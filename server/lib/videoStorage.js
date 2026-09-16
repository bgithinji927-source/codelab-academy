const fs = require("fs");
const mongoose = require("mongoose");
const { v2: cloudinary } = require("cloudinary");

const cloudinaryConfigured = Boolean(
  process.env.CLOUDINARY_URL
  || (
    process.env.CLOUDINARY_CLOUD_NAME
    && process.env.CLOUDINARY_API_KEY
    && process.env.CLOUDINARY_API_SECRET
  )
);

if (cloudinaryConfigured) {
  if (process.env.CLOUDINARY_URL) {
    cloudinary.config(process.env.CLOUDINARY_URL);
  } else {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
  }
}

let bucket;
let kaiBackgroundBucket;

function getVideoBucket() {
  if (mongoose.connection.readyState !== 1 || !mongoose.connection.db) {
    throw new Error("MongoDB is not connected; video storage is unavailable");
  }

  if (!bucket) {
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "codelabVideos",
    });
  }

  return bucket;
}

function getKaiBackgroundBucket() {
  if (mongoose.connection.readyState !== 1 || !mongoose.connection.db) {
    throw new Error("MongoDB is not connected; Kai background storage is unavailable");
  }

  if (!kaiBackgroundBucket) {
    kaiBackgroundBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "codelabKaiBackgrounds",
    });
  }

  return kaiBackgroundBucket;
}

function uploadVideo(buffer, filename, contentType, metadata = {}) {
  return new Promise((resolve, reject) => {
    try {
      const uploadStream = getVideoBucket().openUploadStream(filename, {
        contentType,
        metadata,
      });

      uploadStream.once("error", reject);
      uploadStream.once("finish", () => resolve(uploadStream.id));
      uploadStream.end(buffer);
    } catch (error) {
      reject(error);
    }
  });
}

async function getVideoFile(fileId) {
  const objectId = fileId instanceof mongoose.mongo.ObjectId
    ? fileId
    : new mongoose.mongo.ObjectId(String(fileId));
  return getVideoBucket().find({ _id: objectId }).next();
}

function uploadVideoFile(filePath, filename, contentType, metadata = {}) {
  return new Promise((resolve, reject) => {
    try {
      const uploadStream = getVideoBucket().openUploadStream(filename, {
        contentType,
        metadata,
      });
      const sourceStream = fs.createReadStream(filePath);
      sourceStream.once("error", reject);
      uploadStream.once("error", reject);
      uploadStream.once("finish", () => resolve(uploadStream.id));
      sourceStream.pipe(uploadStream);
    } catch (error) {
      reject(error);
    }
  });
}

function isCloudinaryConfigured() {
  return cloudinaryConfigured;
}

async function uploadCloudinaryVideo(filePath, filename, metadata = {}) {
  if (!cloudinaryConfigured) {
    throw new Error("Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.");
  }
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: "video",
    folder: process.env.CLOUDINARY_VIDEO_FOLDER || "codelab-academy/videos",
    use_filename: true,
    unique_filename: true,
    filename_override: filename,
    context: Object.entries(metadata).map(([key, value]) => `${key}=${String(value)}`).join("|"),
  });
  return {
    publicId: result.public_id,
    secureUrl: result.secure_url,
    resourceType: result.resource_type || "video",
    format: result.format || "",
    duration: Number(result.duration || 0),
    bytes: Number(result.bytes || 0),
  };
}

async function deleteCloudinaryVideo(publicId) {
  if (!publicId || !cloudinaryConfigured) return;
  await cloudinary.uploader.destroy(publicId, { resource_type: "video", invalidate: true, type: "upload" });
}

async function deleteVideoFile(fileId) {
  const objectId = fileId instanceof mongoose.mongo.ObjectId
    ? fileId
    : new mongoose.mongo.ObjectId(String(fileId));
  await getVideoBucket().delete(objectId);
}

function uploadKaiBackground(buffer, filename, contentType, metadata = {}) {
  return new Promise((resolve, reject) => {
    try {
      const uploadStream = getKaiBackgroundBucket().openUploadStream(filename, {
        contentType,
        metadata,
      });

      uploadStream.once("error", reject);
      uploadStream.once("finish", () => resolve(uploadStream.id));
      uploadStream.end(buffer);
    } catch (error) {
      reject(error);
    }
  });
}

async function getKaiBackgroundFile(fileId) {
  const objectId = fileId instanceof mongoose.mongo.ObjectId
    ? fileId
    : new mongoose.mongo.ObjectId(String(fileId));
  return getKaiBackgroundBucket().find({ _id: objectId }).next();
}

async function deleteKaiBackgroundFile(fileId) {
  const objectId = fileId instanceof mongoose.mongo.ObjectId
    ? fileId
    : new mongoose.mongo.ObjectId(String(fileId));
  await getKaiBackgroundBucket().delete(objectId);
}

function streamKaiBackground(fileId, response, file) {
  return new Promise((resolve, reject) => {
    try {
      const objectId = fileId instanceof mongoose.mongo.ObjectId
        ? fileId
        : new mongoose.mongo.ObjectId(String(fileId));
      response.status(200).set({
        "Content-Type": file.contentType || "image/jpeg",
        "Content-Length": String(file.length || 0),
        "Cache-Control": "public, max-age=300",
      });
      const downloadStream = getKaiBackgroundBucket().openDownloadStream(objectId);
      downloadStream.once("error", reject);
      downloadStream.once("end", resolve);
      downloadStream.pipe(response);
    } catch (error) {
      reject(error);
    }
  });
}

function streamVideo(fileId, response, request, file) {
  return new Promise((resolve, reject) => {
    try {
      const objectId = fileId instanceof mongoose.mongo.ObjectId
        ? fileId
        : new mongoose.mongo.ObjectId(String(fileId));
      const totalSize = Number(file.length || 0);
      const rangeHeader = request.headers.range;
      let start = 0;
      let end = Math.max(totalSize - 1, 0);
      let statusCode = 200;

      if (rangeHeader && totalSize > 0) {
        const match = String(rangeHeader).match(/bytes=(\d*)-(\d*)/);
        if (match) {
          if (match[1]) start = Number(match[1]);
          if (match[2]) end = Number(match[2]);
          if (!match[1] && match[2]) {
            const suffixLength = Number(match[2]);
            start = Math.max(totalSize - suffixLength, 0);
          }
          end = Math.min(end, totalSize - 1);
          if (start > end || start >= totalSize) {
            response.status(416).set("Content-Range", `bytes */${totalSize}`).end();
            resolve();
            return;
          }
          statusCode = 206;
        }
      }

      const contentLength = Math.max(end - start + 1, 0);
      response.status(statusCode);
      response.set({
        "Content-Type": file.contentType || "video/mp4",
        "Accept-Ranges": "bytes",
        "Content-Length": String(contentLength),
        ...(statusCode === 206
          ? { "Content-Range": `bytes ${start}-${end}/${totalSize}` }
          : {}),
      });

      const downloadStream = getVideoBucket().openDownloadStream(objectId, {
        start,
        end: end + 1,
      });
      downloadStream.once("error", reject);
      downloadStream.once("end", resolve);
      downloadStream.pipe(response);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getVideoBucket,
  getKaiBackgroundBucket,
  uploadVideo,
  uploadVideoFile,
  isCloudinaryConfigured,
  uploadCloudinaryVideo,
  deleteCloudinaryVideo,
  getVideoFile,
  deleteVideoFile,
  uploadKaiBackground,
  getKaiBackgroundFile,
  deleteKaiBackgroundFile,
  streamKaiBackground,
  streamVideo,
};

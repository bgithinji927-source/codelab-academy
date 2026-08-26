const fs = require("fs");
const mongoose = require("mongoose");

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
  getVideoFile,
  deleteVideoFile,
  uploadKaiBackground,
  getKaiBackgroundFile,
  deleteKaiBackgroundFile,
  streamKaiBackground,
  streamVideo,
};

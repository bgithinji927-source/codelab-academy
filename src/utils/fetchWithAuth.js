// src/utils/fetchWithAuth.js
export default async function fetchWithAuth(url, opts = {}) {
  const token = localStorage.getItem("codelabToken");
  const headers = { ...(opts.headers || {}) };

  // default JSON content-type when body is not FormData
  if (!headers["Content-Type"] && !(opts && opts.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, { ...opts, headers });
  return res;
}

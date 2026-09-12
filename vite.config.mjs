import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Keep the cache out of node_modules so deployment builders can safely run
  // `npm ci` when node_modules is restored from a shared build cache.
  cacheDir: "/tmp/codelab-academy-vite",

  server: {
    host: "0.0.0.0",
    port: 5173,

    allowedHosts: true,

    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

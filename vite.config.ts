import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(), reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },
  resolve: {
    alias: [
      // for import like : @/x/y/z
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      // fix less import : @import ~
      // see https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      {
        find: /^~/,
        replacement: "",
      },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
});

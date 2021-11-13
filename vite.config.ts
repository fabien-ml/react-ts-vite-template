import path from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(), reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },
  resolve: {
    alias: [
      {
        // for import like : @/x/y/z
        find: /@\//,
        replacement: path.resolve(__dirname, "src") + "/",
      },
      {
        // for import like : ~x/y/z
        find: /~(.*)/,
        replacement: path.resolve(__dirname, "node_modules") + "/$1",
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

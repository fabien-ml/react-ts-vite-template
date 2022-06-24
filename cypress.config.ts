import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // `on` is used to hook into various events Cypress emits
      // `config` is the resolved Cypress config
      on("dev-server:start", options => {
        return devServer({
          ...options,
          viteConfig: {
            configFile: path.resolve(__dirname, "vite.config.ts"),
          },
        });
      });

      return config;
    },
    baseUrl: "http://localhost:3000",
  },
});

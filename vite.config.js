import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/xpert_official_website/',  // The base path should match your repository name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Only include index.html
      },
    },
  },
});

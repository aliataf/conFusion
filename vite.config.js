import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        aboutus: resolve(__dirname, "aboutus.html"),
        contactus: resolve(__dirname, "contactus.html"),
      },
    },
  },
});

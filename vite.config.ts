import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./core/index.js"),
      name: "draggable-vue-uploader",
      fileName: "draggable-vue-uploader",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()]
});

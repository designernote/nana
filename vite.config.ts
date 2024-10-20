import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/dfdfdf
export default defineConfig({
  // base: "/nana/",
  plugins: [react({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: "/index.html", // index.html 경로 설정
    },
  },
});

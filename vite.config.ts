/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/framer-motion-tailwind-playground/",
  plugins: [svgr(), react()],
  server: {
    port: 3000,
  },
});

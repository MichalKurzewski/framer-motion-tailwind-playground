/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/framer-motion-tailwind-playground/",
  plugins: [svgr(), react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
  server: {
    port: 4000,
  },
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // https://vitejs.dev/config/
  return defineConfig({
    base: "/framer-motion-tailwind-playground/",
    plugins: [
      svgr(),
      react(),
      eslint({
        exclude: ["/virtual:/**", "node_modules/**"],
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      css: true,
    },
    server: {
      port: 4000,
    },
  });
};

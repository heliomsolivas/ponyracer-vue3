import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import vue from "@vitejs/plugin-vue";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

export default defineConfig({
  plugins: [vue()],
  test: vitestConfig.test,
});

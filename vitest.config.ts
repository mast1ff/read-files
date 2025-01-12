import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.ts"],
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
  },
});

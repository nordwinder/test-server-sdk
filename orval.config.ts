import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "single",
      target: "./src/generated/api.ts",
      client: "fetch",
      baseUrl: "http://127.0.0.1:9000",
    },
  },
});

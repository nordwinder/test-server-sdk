import { describe, it, expect } from "vitest";
import { hello } from "../src";

describe("GET /hello", () => {
  it("returns hello world message", async () => {
    const response = await hello();

    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      message: "Hello, world!",
    });
  });
});

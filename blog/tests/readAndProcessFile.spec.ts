import { it, expect, describe } from "vitest";
import { readAndProcessFile } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    class StubFileReader {
      read(filePath: string) {
        return "sixty";
      }
    }

    const result = readAndProcessFile(".test", new StubFileReader());
    expect(result).toBe("sixty->test unit");
  });
});

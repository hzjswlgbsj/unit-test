import { it, expect, describe } from "vitest";
import { readAndProcessFile, FileReader } from "./readAndProcessFile";

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

describe("di class", () => {
  it("构造函数", () => {
    class StubFileReader implements FileReader {
      read(filePath: string) {
        return "sixty";
      }
    }

    const result = new readAndProcessFile(".test", new StubFileReader());
    result.fileReader = new StubFileReader();
    expect(result.run()).toBe("sixty->test unit");
  });

  it("属性", () => {
    class StubFileReader implements FileReader {
      read(filePath: string) {
        return "sixty";
      }
    }

    const result = new readAndProcessFile(".test", new StubFileReader());
    result.fileReader = new StubFileReader();
    expect(result.run()).toBe("sixty->test unit");
  });
  it("方法", () => {
    class StubFileReader {
      read(filePath: string) {
        return "sixty";
      }
    }

    const result = readAndProcessFile(".test", new StubFileReader());
    expect(result).toBe("sixty->test unit");
  });
});

import {
  test,
  run,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
} from "./index";

beforeAll(() => {
  console.log("before all");
});

beforeEach(() => {
  console.log("before each");
});

afterAll(() => {
  console.log("after all");
});

afterEach(() => {
  console.log("after each");
});

test("first test", () => {
  console.log("first");
});

it("first it", () => {
  console.log("first");
  expect(2).toBe(2);
});

describe("sub", () => {
  test("sub:first test case", () => {
    console.log("first");
    expect(2).toBe(2);
  });
});

run();

import { test, run, it, expect } from "./index";

test("first test", () => {
  console.log("first");
});

it("first it", () => {
  console.log("first");
  expect(2).toBe(2);
});

run();

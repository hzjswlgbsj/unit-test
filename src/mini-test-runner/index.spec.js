import { test, run, it, expect, beforAll } from "./index";

beforAll(() => {
  console.log("before all");
});

test("first test", () => {
  console.log("first");
});

it("first it", () => {
  console.log("first");
  expect(2).toBe(2);
});

run();

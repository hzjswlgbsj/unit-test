import Todo from "../src/components/todi-list/Todo";
import {
  expect,
  describe,
  it,
  test,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";

let todo;

beforeAll(() => {
  todo = new Todo();
});

describe("add", () => {
  it("should add a item", () => {
    todo.add("吃饭");
    expect(todo.get()).toEqual(["吃饭"]);
  });
  it("should delete a item", () => {
    todo.remove();
    expect(todo.get()).toEqual([]);
  });

  it.todo("edit");
});

// 钩子执行时机测试
// beforeAll(() => {
//   console.log("beforeAll");
// });
// beforeEach(() => {
//   console.log("beforeEach");
// });
// test("first", () => {
//   console.log("first");
// });
// test("second", () => {
//   console.log("second");
// });
// describe("test", () => {
//   test("describe first", () => {
//     console.log("describe first");
//   });
//   test("describe second", () => {
//     console.log("describe second");
//   });
//   beforeEach(() => {
//     console.log("describe beforeEach");
//   });
//   afterEach(() => {
//     console.log("describe afterEach");
//   });
// });
// afterEach(() => {
//   console.log("afterEach");
// });
// afterAll(() => {
//   console.log("afterAll");
// });

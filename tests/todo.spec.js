import Todo from "../src/components/todi-list/Todo";
import { expect, describe, it } from "vitest";

describe("add", () => {
  const todo = new Todo();
  todo.add("吃饭");
  it("should add a item", () => {
    expect(todo.get()).toEqual(["吃饭"]);
  });
});

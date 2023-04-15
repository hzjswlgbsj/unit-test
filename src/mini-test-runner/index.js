// test it
// expect toBe
// test .only
// 提示是否通过/报错
// beforeAll beforeEach afterAl afterEach
// describe
// 自动执行所有的测试脚本 *。spec.js

const tests = [];
const onlys = [];

test.only = (name, callback) => {
  tests.push({ name, callback });
};
export function test(name, callback) {
  onlys.push({ name, callback });
}

export const it = test;

export function run() {
  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    test.callback();
  }
}

export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
        console.log("ok");
      } else {
        throw new Error(`fail actual:${actual} expected:${expected}`);
      }
    },
  };
}

// test it
// expect toBe
// test .only
// 提示是否通过/报错
// beforeAll beforeEach afterAl afterEach
// describe
// 自动执行所有的测试脚本 *。spec.js

const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterAlls = [];
const afterEachs = [];

test.only = (name, callback) => {
  tests.push({ name, callback });
};

export function test(name, callback) {
  onlys.push({ name, callback });
}

export const it = test;

export function run() {
  // beforeAll hook
  for (const beforeAllCallBack of beforeAlls) {
    beforeAllCallBack();
  }

  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    // beforeEach hook
    for (const beforeEachCallBack of beforeEachs) {
      beforeEachCallBack();
    }
    try {
      test.callback();
      console.log(`ok: ${test.name}`);
    } catch (error) {
      console.log(`error: ${test.name}`);
    }

    // afterEach hook
    for (const afterEachCallBack of afterEachs) {
      afterEachCallBack();
    }

    test.callback();
  }

  // afterAll hook
  for (const afterAllCallBack of afterAlls) {
    afterAllCallBack();
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

export function beforeAll(callback) {
  beforeAlls.push(callback);
}
export function beforeEach(callback) {
  beforeEachs.push(callback);
}
export function afterAll(callback) {
  afterAlls.push(callback);
}
export function afterEach(callback) {
  afterEachs.push(callback);
}

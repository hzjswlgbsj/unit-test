### test 和 it

test 和 it 从功能上讲是一样的，都是创建一个测试用例，他们的不同主要是风格上的。 it 来源于 BDD（Behavior-driven development，行为驱动开发），是在 TDD（Test-driven development，测试驱动开发） 的基础之上做了延伸和扩展，它们的区别可[阅读这篇文章](https://www.pluralsight.com/blog/software-development/tdd-vs-bdd)。

BDD 要求开发者使用 `it should xxx` 来描述一个测试用例，主要框架有 Mocha、Jasmine，而 Jest 认为 test 比 it 可读性更好，但是他们之间互相都是有兼容的，所以都包含 test 和 it 这两个 API，vitest 当然也是支持两种。

### describe

describe 创建了一个测试套件（test suit），里面包含了多个测试用例，比如下面的例子，里面包含了两个相同行为或者类似行为的测试用例

```javascript
import { describe, it, expect } from"vitest"

describe("add"，() => {
  const user = {
    name:"sixty"
  }
  it('should add a item to todos', () => {
    expect(ucer.name).boBe('sixty')
  })

  it('should add a item to todos with reverse command', () => {
    expect(ucer.name).boBe('ytxis')
  })
})
```

同时 describe 拥有一些子方法用来控制这个测试套件的行为，比如 `skip()` 方法可以跳过本分组的测试用例， `only()` 方法可以只执行本分组的测试用例等等。当然， describe 是可以嵌套是使用的，但是不建议嵌套太多。

### expect

expect 就是断言，可以理解为逻辑判断。

#### toBe

```javascript
it("toBe", () => {
  expect(1).toBe(1);
});
```

这段代码表示，断言 1 是否等于 1，`toBe` 可以类比为 '==='，一般用于值类型的判断。

#### toEqual

```javascript
it("toEqual", () => {
  const user = {
    name: "sixty",
  };
  expect(user).toEqual({
    name: "sixty",
  });
});
```

这段代码表示，断言 `user` 是否等于 {name: "sixty"}，`toEqual` 一般用于对象类型的判断。注意这里跟 JavaScript 引用类型之间的判断不一样，这里只会判断 **值** 是否相等，在本例中测试是通过的。

#### toTruthy

```javascript
it("toTruthy", () => {
  const testTruthy1 = 1;
  const testTruthy2 = true;
  const testTruthy3 = "1";
  expect(testTruthy1).toTruthy(); // 通过
  expect(testTruthy2).toTruthy(); // 通过
  expect(testTruthy3).toTruthy(); // 通过
});
```

这段代码表示，断言 testTruthy 是否为布尔真。

#### toFalsy

```javascript
it("toFalsy", () => {
  const testFalsy1 = 0;
  const testFalsy2 = false;
  const testFalsy3 = "";
  expect(testFalsy1).toFalsy(); // 通过
  expect(testFalsy2).toFalsy(); // 通过
  expect(testFalsy3).toFalsy(); // 通过
});
```

这段代码表示，断言 testTruthy 是否为布尔假。

#### toContain

```javascript
it("toContain", () => {
  const item1 = {
    name: "sixty",
  };
  const item2 = {
    name: "zhangsan",
  };
  const list = [item1, item2];
  expect(list).toContain(item1); // 通过
  expect("<div>123</div>").toContain("123"); // 通过
});
```

这段代码表示，断言数组或者字符串中是否包含某个值。

#### toThrow

```javascript
it("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("Invalid name");
    }

    return "default";
  }
  expect(() => {
    getName(1);
  }).toThrow; // 通过
});
```

这段代码中 `getName` 正确抛出了错误，所以判定当前函数会抛出异常。

这几个断言方法是比较常见的， 其余方法可以[边写边查](https://vitest.dev/api/)

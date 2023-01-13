// 栈是一个后进先出的数据结构。(放进去-push-入栈，拿出来-pop-出栈)

{
  const stack = [];
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(...[4, 5, 6]);
  stack.unshift(-3, -2, -1, 0);
  console.log(stack);
  // const item1 = stack.pop();
  // console.log(item1);
  // console.log(stack.splice(2));
  console.log(stack.slice(2));
  // stack.copyWithin(3, 1, 3);
  console.log(stack);
  const aEntries = stack.entries();
  console.log(aEntries); // Array Iterator {}
  console.log(aEntries.next()); // {value: Array(2), done: false}
  console.log(aEntries.next().value);

  const aKeys = stack.keys();
  console.log(aKeys); // Array Iterator {}
  console.log(aKeys.next()); // {value: 0, done: false}
  console.log(aKeys.next()); // {value: 1, done: false}
  console.log("---------------------------------");
}
{
  // 20. 有效的括号
  // 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  const bracketStr = "{{([][{}])}()}";
  const isValid = function (s) {
    if (s.length % 2 === 1) {
      return false;
    }

    const stack = [];
    let opens = "([{",
      closers = ")]}";

    for (let i = 0; i < s.length; i++) {
      const str = s[i];
      if (opens.includes(str)) {
        stack.push(str);
      } else {
        const p = stack[stack.length - 1];
        if (opens.indexOf(p) === closers.indexOf(str)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  console.log(isValid(bracketStr));

  const isValid2 = function (symbols) {
    let stack = [],
      balanced = true,
      index = 0,
      symbol,
      top,
      opens = "([{",
      closers = ")]}";
    while (index < symbols.length && balanced) {
      symbol = symbols.charAt(index);
      if (opens.includes(symbol)) {
        stack.push(symbol);
      } else {
        if (stack.length === 0) {
          balanced = false;
        } else {
          top = stack.pop();
          if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
            balanced = false;
          }
        }
      }
      index++;
    }
    if (balanced && stack.length === 0) {
      return true;
    }
    return false;
  };
  console.log(isValid2(bracketStr));
}

{
  //  十进制转二进制  Decimal to binary
  const decimalToBinary = (num) => {
    const stack = [];
    while (num > 0) {
      stack.push(num % 2);
      num = parseInt(num / 2);
    }

    return stack.reverse().join("");
  };
  console.log(decimalToBinary(14));

  // 十进制转任意进制
  const baseConverter = (decNumber, base) => {
    var remStack = [],
      rem,
      baseString = "",
      digits = "0123456789ABCDEF";

    while (decNumber > 0) {
      rem = Math.floor(decNumber % base);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / base);
    }

    while (remStack.length !== 0) {
      baseString += digits[remStack.pop()];
    }

    return baseString;
  };
  console.log(baseConverter(543, 16));
}

{
  // 数组的demo
  // console.log(new Array(7)); // (7) [empty × 7]
  // console.log(Array(7)); // (7) [empty × 7]
}

{
  // 私有属性，用js的WeakMap实现类
  1;
  // 采用 Class 表达式，可以写出立即执行的 Class。
  let person = new (class {
    constructor(name) {
      this.name = name;
    }
    sayName() {
      console.log(this.name);
    }
  })("张三");
  // person.sayName(); // "张三"

  /* const items = new WeakMap();
  class Stack {
    constructor() {
      items.set(this, []);
    }

    push(element) {
      let s = items.get(this);
      s.push(element);
    }
    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }
  }
  const s = new Stack();
  s.push(9);
  s.push(91);
  s.push(92);
  console.log(s.pop()); */

  let Stack = (function () {
    const items = new WeakMap();

    class Stack {
      constructor() {
        items.set(this, []);
      }

      push(element) {
        let s = items.get(this);
        s.push(element);
      }

      pop() {
        let s = items.get(this);
        let r = s.pop();
        return r;
      }

      peek() {
        let s = items.get(this);
        return s[s.length - 1];
      }

      isEmpty() {
        return items.get(this).length === 0;
      }

      size() {
        let s = items.get(this);
        return s.length;
      }

      clear() {
        items.set(this, []);
      }

      print() {
        console.log(this.toString());
      }

      toString() {
        return items.get(this).toString();
      }
    }

    return Stack;
  })();

  /* const s = new Stack();
  s.push(9);
  s.push(91);
  s.push(92); */
  // console.log(s.pop()); // 92
  // console.log(s.toString()); // 9,91
  // 实现了私有属性items，用这种方法的话，扩展类无法继承私有属性，鱼和熊掌不可兼得。

  function towerOfHanoi(n, from, to, helper) {
    if (n > 0) {
      towerOfHanoi(n - 1, from, helper, to);
      to.push(from.pop());
      towerOfHanoi(n - 1, helper, to, from);
    }
  }

  var source = [7, 6, 5, 4, 3, 3, 2, 1];
  var dest = [];
  var helper = [];

  towerOfHanoi(source.length, source, dest, helper);
  console.log(dest);
}

{
  var source = [7, 6, 5, 4, 3, 3, 2, 1];
  var hanota = function (A, B, C) {
    while (A.length > 0) {
      B.push(A.pop());
      C.unshift(B.pop());
    }
    return C;
  };
  console.log(hanota(source, [], []));
}

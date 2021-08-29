// 栈是一个后进先出的数据结构。(放进去-push-入栈，拿出来-pop-出栈)

/* const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
const item1 = stack.pop();
console.log(item1);
console.log(stack); */

const bracketStr = "()";
const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str === "(" || str === "{" || str === "[") {
      stack.push(str);
    } else {
      const p = stack[stack.length - 1];
      if (
        (p === "(" && str === ")") ||
        (p === "{" && str === "}") ||
        (p === "[" && str === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// isValid(bracketStr);
console.log(isValid(bracketStr));

//  十进制转二进制  Decimal to binary
const decimalToBinary = (num) => {
  const stack = [];
  while (num > 0) {
    stack.push(num % 2);
    num = parseInt(num / 2);
  }

  return stack.reverse().join("");
};
console.log(decimalToBinary(543));

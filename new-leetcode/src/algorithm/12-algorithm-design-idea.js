/* let i = 0;
function recursiveFn() {
  i++;
  recursiveFn();
}
try {
  recursiveFn();
} catch (ex) {
  console.log("i = " + i + " error: " + ex);
} */

/* const fibonacci = (num) => {
  let arr = [];
  let prev = 0,
    next = 1;
  while (next < num) {
    arr.push(next);
    [prev, next] = [next, prev + next];
  }
  console.log(arr);
};
fibonacci(56); */

/* function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  if (num > 2) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(6)); */

class MinCoinChange {
  cache = {};

  constructor(coins) {
    this.coins = coins;
  }

  makeChange(amount) {
    if (!amount) {
      console.log("-------------");
      return [];
    }
    if (this.cache[amount]) {
      console.log("this.cache", this.cache);
      return this.cache[amount];
    }
    let min = [],
      newMin,
      newAmount;
    for (let i = 0; i < this.coins.length; i++) {
      let coin = this.coins[i];
      newAmount = amount - coin;
      console.log(amount, newAmount, i, coin);
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount);
      }
      console.log("newMin****", newMin);
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        console.log("newMin****---", newMin);
        min = [coin].concat(newMin);
      }
    }
    // console.log(min);
    // return (this.cache[amount] = min);
    // debugger;
    this.cache[amount] = min;
    console.log("++++++++++++", amount, min);
    return this.cache[amount];
  }
}
// let minCoinChange = new MinCoinChange([1, 2, 3]);
// console.log(minCoinChange.makeChange(8));

// let minCoinChange2 = new MinCoinChange([1, 3, 4]);
// console.log(minCoinChange2.makeChange(6));

const mergeArraysConcat = (arrays) => {
  return arrays.reduce((p, n) => p.concat(n), []);
};
console.log(mergeArraysConcat([[1, 2, 3], [4, 5], [6]]));

const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2, 3], [4, 5], [6]));

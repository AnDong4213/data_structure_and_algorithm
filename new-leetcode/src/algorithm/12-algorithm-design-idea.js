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
      return [];
    }
    if (this.cache[amount]) {
      return this.cache[amount];
    }
    let min = [],
      newMin,
      newAmount;
    for (let i = 0; i < this.coins.length; i++) {
      let coin = this.coins[i];
      console.log(coin);
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log("new Min " + min + " for " + amount);
      }
    }
    // return (this.cache[amount] = min);
    this.cache[amount] = min;
    return this.cache[amount];
  }
}
let minCoinChange = new MinCoinChange([1, 5, 10, 36]);
console.log(minCoinChange.makeChange(136));

// let minCoinChange2 = new MinCoinChange([1, 3, 4]);
// console.log(minCoinChange2.makeChange(6));

/* const minCoinChange3 = (coins, amount) => {
  let cache = {};

  if (!amount) {
    return [];
  }

  let makeChange = (amount) => {
    if (cache[amount]) {
      return cache[amount];
    }
    let min = [],
      newMin,
      newAmount;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log("new Min " + min + " for " + amount);
      }
    }
    return (cache[amount] = min);
  };
};

console.log(minCoinChange3([1, 5, 10, 25], 36)); */

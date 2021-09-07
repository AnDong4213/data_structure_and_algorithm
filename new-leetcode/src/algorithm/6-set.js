const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

console.log(A.values());

// 交集
// console.log(new Set([x for (x of A) if (B.has(x))]));

// 差集
let difference = function (setA, setB) {
  let differenceSet = new Set();

  for (let x of setA) {
    if (!setB.has(x)) {
      differenceSet.add(x);
    }
  }

  return differenceSet;
};
let differenceAB = difference(B, A);
console.log(differenceAB);

/* const set = new Set([
  ["foo", 1],
  ["bar", 2]
]);
console.log(set);
const m1 = new Map(set);
console.log(m1);
console.log([...m1]);
console.log(Object.fromEntries(m1)); */

let nums = [2, 7, 11, 15];
for (let num of nums) {
  console.log(num);
}
console.log(nums.splice(0, 1));

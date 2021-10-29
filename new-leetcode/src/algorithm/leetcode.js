const maxProfit = function (prices) {
  let p = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      p += prices[i] - prices[i - 1];
    }
  }
  console.log(p);
  return p;
};
// maxProfit([7, 1, 5, 17, 6, 4]);

// 46
const permute = function (nums) {
  let arr = [];

  let recall = (path) => {
    if (path.length === nums.length) {
      arr.push(path);
      return;
    }

    for (let num of nums) {
      if (path.includes(num)) continue;
      recall(path.concat(num));
    }
  };

  recall([]);
  console.log(JSON.stringify(arr));
};
// permute([2, 3, 5, 8]);

//78
var subsets = function (nums) {
  let arr = [];

  let recall = (path) => {
    arr.push(path);

    for (let num of nums) {
      if (path.includes(num)) break;
      recall(path.concat(num));
    }
  };

  recall([]);
  console.log(JSON.stringify(arr));
};
subsets([1, 2, 3]);

var subsets2 = function (nums) {
  const res = [];

  const recall = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      recall(path.concat(nums[i]), l, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    recall([], i, 0);
  }
  console.log(JSON.stringify(res));
};
subsets2([1, 2, 3]);
// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

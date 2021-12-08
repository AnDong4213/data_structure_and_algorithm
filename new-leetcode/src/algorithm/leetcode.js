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

console.log("------------------------------------");
const series = [
  {
    data: [12, 34, 5, 32],
    name: "A"
  },
  {
    data: [54, 43, 43, 235],
    name: "B",
    obj: {
      a: {
        c: [{ a: 1 }, { a: 2 }]
      }
    }
  },
  {
    data: [32, 132, 64, 2],
    name: "C"
  },
  {
    data: [12, 34, 5, 564],
    name: "D"
  }
];

series.forEach((item) => {
  /*  if (item.name === "B") {
    item.data = [9, 7];
    item.obj.a.c = [9999];
  } */
  console.log(item);
});
console.log(series);

console.log("------------------------------------");
function arrayKeys(arr) {
  var i = 0,
    len = arr.length,
    keys = [];
  while (i < len) {
    keys.push(i++);
  }
  return keys;
}
// 归并排序(过程：从下向上)
function mergeSort(arr, key, order) {
  if (!Array.isArray(arr)) return [];
  var key = Array.isArray(key) ? key : [];
  // 对数组arr做若干次合并：数组arr的总长度为len，将它分为若干个长度为gap的子数组；
  // 将"每2个相邻的子数组" 进行合并排序。
  // len = 数组的长度，gap = 子数组的长度
  function mergeGroups(arr, len, gap) {
    // 对arr[0..len)做一趟归并排序
    // 将"每2个相邻的子数组"进行合并排序
    for (var i = 0; i + 2 * gap - 1 < len; i += gap * 2) {
      merge(arr, i, i + gap - 1, i + 2 * gap - 1); // 归并长度为len的两个相邻子数组
    }
    // 注意：
    // 若i ≤ len - 1且i + gap - 1 ≥ len - 1时，则剩余一个子数组轮空，无须归并
    // 若i + gap - 1 < len - 1，则剩余一个子数组没有配对
    // 将该子数组合并到已排序的数组中
    if (i + gap - 1 < len - 1) {
      // 尚有两个子文件，其中后一个长度小于len - 1
      merge(arr, i, i + gap - 1, len - 1); // 归并最后两个子数组
    }
  }
  // 核心排序过程
  function merge(arr, start, mid, end) {
    var i = start; // 第1个有序区的索引，遍历区间是：arr数组中的[start..mid]
    var j = mid + 1; // 第2个有序区的索引，遍历区间是：arr数组中的[mid + 1..end]
    var aTmp = []; // 汇总2个有序区临时数组
    var kTmp = [];
    var isAsc = (order + "").toLowerCase() !== "desc";
    /* 排序过程开始 */
    while (i <= mid && j <= end) {
      // 遍历2个有序区，当该while循环终止时，2个有序区必然有1个已经遍历并排序完毕
      if ((!isAsc && arr[i] <= arr[j]) || (isAsc && arr[i] >= arr[j])) {
        // 并逐个从2个有序区分别取1个数进行比较，将较小的数存到临时数组aTmp中
        aTmp.push(arr[i]);
        kTmp.push(key[i++]);
      } else {
        aTmp.push(arr[j]);
        kTmp.push(key[j++]);
      }
    }
    // 将剩余有序区的剩余元素添加到临时数组aTmp中
    while (i <= mid) {
      aTmp.push(arr[i]);
      kTmp.push(key[i++]);
    }
    while (j <= end) {
      aTmp.push(arr[j]);
      kTmp.push(key[j++]);
    } /*排序过程结束*/
    var len = aTmp.length,
      k;
    // 此时，aTmp数组是经过排序后的有序数列，然后将其重新整合到数组arr中
    for (k = 0; k < len; k++) {
      arr[start + k] = aTmp[k];
      key[start + k] = kTmp[k];
    }
  }
  // 归并排序(从下往上)
  return (function (arr) {
    // 采用自底向上的方法，对arr[0..len)进行二路归并排序
    var len = arr.length;
    if (len <= 0) return arr;
    for (var i = 1; i < len; i *= 2) {
      // 共log2(len - 1)趟归并
      mergeGroups(arr, len, i); // 有序段长度 ≥ len时终止
    }
  })(arr);
}

// 数组原型链方法
Array.prototype.mergeSort = function (key, order) {
  var key = Array.isArray(key) ? key : [];
  function mergeGroups(arr, len, gap) {
    for (var i = 0; i + 2 * gap - 1 < len; i += gap * 2) {
      merge(arr, i, i + gap - 1, i + 2 * gap - 1);
    }
    if (i + gap - 1 < len - 1) {
      merge(arr, i, i + gap - 1, len - 1);
    }
  }
  // 核心排序过程
  function merge(arr, start, mid, end) {
    var i = start;
    var j = mid + 1;
    var aTmp = [];
    var kTmp = [];
    var isAsc = (order + "").toLowerCase() !== "desc";
    /* 排序过程开始 */
    while (i <= mid && j <= end) {
      if ((isAsc && arr[i] <= arr[j]) || (!isAsc && arr[i] >= arr[j])) {
        aTmp.push(arr[i]);
        kTmp.push(key[i++]);
      } else {
        aTmp.push(arr[j]);
        kTmp.push(key[j++]);
      }
    }
    while (i <= mid) {
      aTmp.push(arr[i]);
      kTmp.push(key[i++]);
    }
    while (j <= end) {
      aTmp.push(arr[j]);
      kTmp.push(key[j++]);
    } /*排序过程结束*/
    var len = aTmp.length,
      k;
    for (k = 0; k < len; k++) {
      arr[start + k] = aTmp[k];
      key[start + k] = kTmp[k];
    }
  }
  // 归并排序(从下往上)
  return (function (arr) {
    var len = arr.length;
    if (len <= 0) return arr;
    for (var i = 1; i < len; i *= 2) {
      mergeGroups(arr, len, i);
    }
    return arr;
  })(this);
};

// 测试
var arr2 = [5, 2, 7, 1, 2, 6, 6, 8];
var key2 = arrayKeys(arr2);
mergeSort(arr2, key2, "asc");
console.log(arr2); // [8, 7, 6, 6, 5, 2, 2, 1]
console.log(key2); // [7, 2, 5, 6, 0, 1, 4, 3]

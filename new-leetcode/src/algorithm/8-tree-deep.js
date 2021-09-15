import { BinarySearchTree } from "./8-tree";

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
tree.insert(13);
// tree.insert(12);
// tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// tree.insert(6);

// console.log(JSON.stringify(tree.root, null, 4));

const tree2 = {
  key: 1,
  left: {
    key: 2,
    left: {
      key: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    key: 3,
    left: null,
    right: {
      key: 5,
      left: null,
      right: null
    }
  }
};

// console.log(JSON.stringify(tree2, null, 4));

// 104. 二叉树的最大深度  3种解法
const maxDepth = function (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
maxDepth(tree2);

const maxDepth2 = function (root) {
  let level = 0;
  if (!root) return level;

  let stack = [root];
  while (stack.length) {
    let len = stack.length;

    while (len--) {
      let n = stack.shift();
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
    }

    level++;
  }
  return level;
};
// maxDepth2(tree2);

const maxDepth3 = function (root) {
  let level = 0;

  let dfs = (t, l) => {
    if (!t) return;

    if (!t.left && !t.right) {
      level = Math.max(l, level);
    }
    dfs(t.left, l + 1);
    dfs(t.right, l + 1);
  };
  dfs(root, 1);

  return level;
};
// maxDepth3(tree2);

const tree3 = {
  key: 1,
  left: {
    key: 2,
    left: {
      key: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    key: 3,
    left: null,
    right: null
  }
};
// 111. 二叉树的最小深度
const minDepth = function (root) {
  let level = [];

  let dfs = (t, l) => {
    if (!t) return;

    if (!t.left && !t.right) {
      if (!level.length) {
        level.push(l);
      } else {
        if (l < level[level.length - 1]) {
          level.push(l);
        }
      }
    }
    dfs(t.left, l + 1);
    dfs(t.right, l + 1);
  };
  dfs(root, 1);

  return root ? level[level.length - 1] : 0;
};
// console.log(minDepth(tree3));

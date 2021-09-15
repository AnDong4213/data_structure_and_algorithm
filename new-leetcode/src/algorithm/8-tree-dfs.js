import { BinarySearchTree } from "./8-tree";

{
  const tree = {
    val: "a",
    children: [
      {
        val: "b",
        children: [
          {
            val: "d",
            children: []
          },
          {
            val: "e",
            children: []
          }
        ]
      },
      {
        val: "c",
        children: [
          {
            val: "f",
            children: []
          },
          {
            val: "g",
            children: []
          },
          {
            val: "h",
            children: []
          }
        ]
      }
    ]
  };

  // 深度优先遍历  使用递归
  // 深度优先遍历 (DFS Depth First Search) 就是一个节点不到头(叶子节点为空) 不回头
  // 其中深度遍历就是我们所说的 先序遍历 中序遍历 后序遍历 , 先中后指的是根节点输出的时机
  const dfs = (root) => {
    console.log(root.val);
    // root.children.forEach((child) => dfs(child));
    root.children.forEach(dfs);
  };
  // dfs(tree);

  console.log("======================================");

  // 广度优先遍历  队列
  // 广度有点遍历(BFS Breadth First Search) 就是一层一层输出 , 输出到最下层的叶子节点, 为空的时候结束
  const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
      const n = q.shift();
      console.log(n.val);
      n.children.forEach((child) => q.push(child));
    }
  };
  // bfs(tree);
}

console.log("===================================================");

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// console.log(JSON.stringify(tree.root, null, 4));

// 递归的坏处就是 , 出入栈消耗大量的内存, 每一次方法的调用都会保存大量的变量, 多以对于遍历来说并不好 ,非递归遍历的实现 , 基于栈的实现, 对于遍历节点保存在栈中, 出入栈 , 主要利用栈的后进先出的特性 , 很好的保证了, 后进的优先遍历 .

//先序遍历
const preOrder = (root) => {
  if (!root) return;

  console.log(root.key);
  preOrder(root.left);
  preOrder(root.right);
};
// 非递归版
const preOrder2 = (root) => {
  if (!root) return;
  const stack = [root];

  while (stack.length > 0) {
    let n = stack.pop();
    console.log(n.key);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};
// preOrder(tree.root);
// preOrder2(tree.root);

//中序遍历
const inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.key); // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
  inOrder(root.right);
};
// 非递归版
const inOrder2 = (root) => {
  if (!root) return;

  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.key);
    p = n.right;
  }
};
// inOrder(tree.root);
// inOrder2(tree.root);

//后序遍历
const postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.key); // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
};
// 非递归版
const postOrder2 = (root) => {
  if (!root) return;

  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const m = outputStack.pop();
    console.log(m.key);
  }
};

// postOrder(tree.root);
// postOrder2(tree.root);

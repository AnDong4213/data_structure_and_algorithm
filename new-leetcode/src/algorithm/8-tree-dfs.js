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
  const dfs = (root) => {
    // console.log(root.val);
    // root.children.forEach((child) => dfs(child));
    root.children.forEach(dfs);
  };
  dfs(tree);

  console.log("======================================");

  // 广度优先遍历  队列
  const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
      const n = q.shift();
      // console.log(n.val);
      n.children.forEach((child) => q.push(child));
    }
  };
  bfs(tree);
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

//先序遍历
const preOrder = (root) => {
  if (!root) return;

  console.log(root.key);
  preOrder(root.left);
  preOrder(root.right);
};
// preOrder(tree.root);

//中序遍历
const inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.key); // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
  inOrder(root.right);
};
// inOrder(tree.root);

//后序遍历
const postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  // console.log(root.key); // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
};
postOrder(tree.root);

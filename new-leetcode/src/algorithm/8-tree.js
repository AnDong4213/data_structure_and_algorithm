const BinarySearchTree = (function () {
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    root = null;

    static insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    static inOrderTraverseNode(node, callback) {
      console.log(node);
      if (node !== null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback);
      }
    }
    // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
    // 向树中插入一个新的键
    insert(key) {
      let newNode = new Node(key);

      if (this.root === null) {
        this.root = newNode;
      } else {
        BinarySearchTree.insertNode(this.root, newNode);
      }
    }

    // 通过中序遍历方式遍历所有节点
    inOrderTraverse(callback) {
      BinarySearchTree.inOrderTraverseNode(this.root, callback);
    }
  }

  return BinarySearchTree;
})();

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
function printNode(value) {
  console.log(value + "-----");
}
tree.inOrderTraverse(printNode);

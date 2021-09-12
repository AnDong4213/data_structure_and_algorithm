export const BinarySearchTree = (function () {
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
    static inOrderTraverseNode(node, callback) {
      // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
      // console.log(node);
      if (node !== null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback);
      }
    }
    inOrderTraverse(callback) {
      BinarySearchTree.inOrderTraverseNode(this.root, callback);
    }

    // 通过先序遍历方式遍历所有节点
    static preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
      }
    }
    preOrderTraverse(callback) {
      BinarySearchTree.preOrderTraverseNode(this.root, callback);
    }

    // 通过后序遍历方式遍历所有节点
    static postOrderTraverseNode(node, callback) {
      if (node !== null) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverse(callback) {
      BinarySearchTree.postOrderTraverseNode(this.root, callback);
    }

    // minNode
    static minNode(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    }
    // 寻找树的最小键
    min() {
      return BinarySearchTree.minNode(this.root);
    }

    // maxNode
    static maxNode(node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    }
    // 寻找树的最大键
    max() {
      return BinarySearchTree.maxNode(this.root);
    }

    static searchNode(node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return this.searchNode(node.left, key);
      } else if (key > node.key) {
        return this.searchNode(node.right, key);
      } else {
        return true;
      }
    }
    // 搜索一个特定的值
    search(key) {
      return BinarySearchTree.searchNode(this.root, key);
    }

    static findMinNode(node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    static removeNode(node, element) {}
    // 移除一个节点
    remove(element) {
      this.root = BinarySearchTree.removeNode(this.root, element);
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
tree.insert(27);
tree.insert(30);
tree.insert(46);
tree.insert(70);

// console.log(JSON.stringify(tree.root, null, 4));
function printNode(value) {
  console.log(value);
}
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(1));

console.log("-------------深度优先遍历----------------------");

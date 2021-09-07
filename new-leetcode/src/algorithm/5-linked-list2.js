export const LinkedList = (function () {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  const length = new WeakMap();
  const head = new WeakMap(); // 存储第一个节点的引用

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    // 向链表尾部追加元素，列表为空，添加的是第一个元素；不为空，向其追加元素。
    append(element) {
      let node = new Node(element),
        current;
      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }

      let l = this.size();
      l++;
      length.set(this, l);
    }
    // 1，在列表的起点添加一个元素；2，在列表中间添加一个元素
    insert(position, element) {
      if (position >= 0 && position <= this.size()) {
        let node = new Node(element),
          current = this.getHead(),
          previous,
          index = 0;
        if (position === 0) {
          node.next = current;
          head.set(this, node);
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }

        let l = this.size();
        l++;
        length.set(this, l);

        return true;
      } else {
        return false;
      }
    }
    // 从列表的特定位置移除一项
    removeAt(position) {
      if (position > -1 && position < this.size()) {
        let current = this.getHead(),
          previous,
          index = 0;
        if (position === 0) {
          head.set(this, current.next);
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }

        let l = this.size();
        l--;
        length.set(this, l);

        return current.element;
      } else {
        return null;
      }
    }

    // getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
    getElementAt(index) {
      if (index > -1 && index < this.size()) {
        let current = this.getHead(),
          pos = 0;
        while (current) {
          if (pos === index) {
            return current;
          }
          pos++;
          current = current.next;
        }
      } else {
        return undefined;
      }
    }

    // 从列表中移除一项
    remove(element) {
      let index = this.indexOf(element);
      return this.removeAt(index);
    }

    // 返回元素在列表中的索引
    indexOf(element) {
      let current = this.getHead(),
        index = 0;
      while (current) {
        if (element === current.element) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead(),
        string = "";
      while (current) {
        string += current.element + (current.next ? ", " : "");
        current = current.next;
      }
      return string;
    }

    print() {
      console.log(this.toString());
    }
  }

  return LinkedList;
})();

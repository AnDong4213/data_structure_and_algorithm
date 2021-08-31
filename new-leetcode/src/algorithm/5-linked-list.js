{
  const a = { val: "a", next: null };
  const b = { val: "b", next: null };
  const c = { val: "c", next: null };
  const d = { val: "d", next: null };
  a.next = b;
  b.next = c;
  c.next = d;

  // 遍历链表
  let p = a;
  while (p) {
    console.log(p.val);
    p = p.next;
  }

  // 插入
  const e = { val: "e" };
  c.next = e;
  e.next = d;
  // console.log(a);

  // 删除
  c.next = d;
  console.log(a);
}

{
  // 237. 删除链表中的节点
  // 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
  var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
  };
}
console.log("-------------------------------------------------");

{
  // 创建链表
  const LinkedList = (function () {
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

  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(7);
  list.print();
  console.log(list.getHead());
  console.log(list.indexOf(2));
  // console.log(list.removeAt(1));
  // console.log(list.getHead());
}
console.log("--------------");
/* {
  let n = 5,
    i = 0;
  function aa() {
    while (i < n) {
      if (i === 3) {
        return i;
      }
      console.log(i + "+");
      i++;
    }
  }
  console.log(aa());
} */

// 622. 设计循环队列
/* 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
 */
{
  class MyCircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.front = 0;
      this.rear = 0;
      this.max = k;
    }

    enQueue(value) {
      if (this.isFull()) {
        return false;
      } else {
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.max;
        return true;
      }
    }
    deQueue() {
      if (!this.isEmpty()) {
        this.queue[this.front] = "";
        this.front = (this.front + 1) % this.max;
        return true;
      } else {
        return false;
      }
    }
    Front() {
      if (this.isEmpty()) {
        return -1;
      } else {
        return this.queue[this.front];
      }
    }
    Rear() {
      if (this.isEmpty()) {
        return -1;
      } else {
        let rear = this.rear - 1;
        return this.queue[rear < 0 ? this.max - 1 : rear];
      }
    }
    isEmpty() {
      return this.front === this.rear && !this.queue[this.front];
    }
    isFull() {
      return this.front === this.rear && !!this.queue[this.front];
    }
  }

  const queue = new MyCircularQueue(5);
  queue.enQueue(1);
  console.log(queue.Rear());
}

{
  // 用es6实现 Queue
  const Queue = (function () {
    const items = new WeakMap();

    class Queue {
      constructor() {
        items.set(this, []);
      }

      enqueue(element) {
        let q = items.get(this);
        q.push(element);
      }

      dequeue() {
        let q = items.get(this);
        let r = q.shift();
        return r;
      }

      front() {
        let q = items.get(this);
        return q[0];
      }

      isEmpty() {
        return items.get(this).length == 0;
      }

      size() {
        let q = items.get(this);
        return q.length;
      }

      clear() {
        items.set(this, []);
      }

      print() {
        console.log(this.toString());
      }

      toString() {
        return items.get(this).toString();
      }
    }

    return Queue;
  })();
}

{
  // 优先队列
  let PriorityQueue = (function () {
    class QueueElement {
      constructor(element, priority) {
        this.element = element;
        this.priority = priority;
      }
    }
    const items = new WeakMap();
    class PriorityQueue {
      constructor() {
        items.set(this, []);
      }

      enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority);
        let q = items.get(this);
        let added = false;

        for (let i = 0; i < q.length; i++) {
          if (queueElement.priority < q[i].priority) {
            q.splice(i, 0, queueElement);
            added = true;
            break;
          }
        }
        if (!added) {
          q.push(queueElement);
        }

        items.set(this, q);
      }

      dequeue() {
        let q = items.get(this);
        let r = q.shift();
        items.set(this, q);
        return r;
      }

      front() {
        let q = items.get(this);
        return q[0];
      }

      isEmpty() {
        return items.get(this).length == 0;
      }

      size() {
        let q = items.get(this);
        return q.length;
      }

      clear() {
        items.set(this, []);
      }

      print() {
        let q = items.get(this);
        /* for (let i = 0; i < q.length; i++) {
          console.log(`${q[i].element}  - ${q[i].priority}`);
        } */
        return q;
      }
    }

    return PriorityQueue;
  })();

  let priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);
  priorityQueue.enqueue("Jack1", 13);
  priorityQueue.enqueue("Jack2", 4);
  priorityQueue.enqueue("Tom", 0);
  console.log(priorityQueue.print());
}

{
  // 循环队列-击鼓传花
  const hotPotato = function (nameList, num) {
    let queue = nameList;

    let eliminated = "";
    while (queue.length > 1) {
      for (let i = 0; i < num; i++) {
        queue.push(queue.shift());
      }
      eliminated = queue.shift();
      console.log("eliminated", eliminated);
    }

    return queue.shift();
  };

  let names = ["John", "Jack", "Camila", "Ingrid", "Carl", "Tom", "Army"];
  console.log(hotPotato(names, 26));
}

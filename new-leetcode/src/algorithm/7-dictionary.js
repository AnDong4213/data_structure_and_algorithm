import { LinkedList } from "./5-linked-list2";
/* const a = { a1: 1 };
console.log(a.hasOwnProperty("a1")); */

// 创建字典
function Dictionary() {
  var items = {};

  this.set = function (key, value) {
    items[key] = value; //{1}
  };

  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    return items.hasOwnProperty(key);
    //return value in items;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.each = function (fn) {
    for (var k in items) {
      if (this.has(k)) {
        fn(k, items[k]);
      }
    }
  };

  this.getItems = function () {
    return items;
  };
}

// 创建散列表--分离链接
const HashTable2 = (function () {
  class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }

  class HashTable {
    table = [];

    static loseloseHashCode(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }

    hashCode(key) {
      return HashTable.loseloseHashCode(key);
    }

    put(key, value) {
      let position = this.hashCode(key);

      if (this.table[position] === undefined) {
        this.table[position] = new LinkedList();
      }
      this.table[position].append(new ValuePair(key, value));
    }

    get(key) {
      let position = this.hashCode(key);

      if (this.table[position] !== undefined) {
        let current = this.table[position].getHead();

        do {
          if (current.element.key === key) {
            return current.element.value;
          }
          current = current.next;
        } while (current);
      }
      return undefined;
    }

    remove(key) {
      let position = this.hashCode(key);

      if (this.table[position] !== undefined) {
        let current = this.table[position].getHead();

        do {
          if (current.element.key === key) {
            this.table[position].remove(current.element);
            if (this.table[position].isEmpty()) {
              this.table[position] = undefined;
            }
            return true;
          }
          current = current.next;
        } while (current);
      }
    }

    print() {
      return this.table;
    }
  }

  return HashTable;
})();

// 创建散列表--线性探查
const HashTable = (function () {
  class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }

  class HashTable {
    table = [];

    static loseloseHashCode(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }

    hashCode(key) {
      return HashTable.loseloseHashCode(key);
    }

    put(key, value) {
      let position = this.hashCode(key);

      if (this.table[position] === undefined) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = ++position;
        while (this.table[index] !== undefined) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
    }

    get(key) {
      let position = this.hashCode(key);
      let table = this.table;
      console.log(table[position]);

      if (table[position] !== undefined) {
        if (table[position].key === key) {
          return table[position].value;
        } else {
          let index = ++position;
          while (table[index] === undefined || table[index].key !== key) {
            index++;
          }
          if (table[index].key === key) {
            return table[index].value;
          }
        }
      }
      return undefined;
    }

    remove(key) {
      let position = this.hashCode(key);
      let table = this.table;
      // console.log(table[position]);
      if (table[position] !== undefined) {
        if (table[position].key === key) {
          // console.log(key);
          table[position] = undefined;
        } else {
          console.log(key);
          var index = ++position;
          while (table[index] === undefined || table[index].key !== key) {
            index++;
          }
          if (table[index].key === key) {
            table[index] = undefined;
          }
        }
      }
    }

    print() {
      return this.table;
    }
  }

  return HashTable;
})();

let hash = new HashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaron@email.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul@email.com");
hash.put("Nathan", "nathan@email.com");

console.log(hash.get("Jamie"));
console.log(hash.get("Sue"));
hash.remove("Jonathan");
// hash.remove("Jamie");
console.log(hash.get("Jonathan"));
console.log(hash.get("Sue"));

/* const arrL = [];
arrL[10] = "9";
console.log(arrL); //  [empty × 10, "9"]
console.log(arrL[19] === undefined); // true
console.log(arrL); //  [empty × 10, "9"] */

/* {
  const aa = function () {
    var text = "";
    var i = 0;
    do {
      text += "<br>数字为 " + i;
      if (i === 2) {
        return i;
      }
      i++;
    } while (i < 5);

    return text;
  };
  console.log(aa()); // 2
} */

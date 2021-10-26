class ArrayList {
  array = [];

  insert(item) {
    this.array.push(item);
  }
  toString() {
    return this.array.join();
  }

  swap(index1, index2) {
    let arr = this.array,
      temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  swap2(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; // 内存消耗比较大
  }

  // 冒泡排序  冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。
  bubbleSort() {
    const arr = this.array,
      length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  // 选择排序  选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位
  selectionSort() {
    let arr = this.array,
      length = arr.length;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (arr[indexMin] > arr[j]) {
          indexMin = j;
        }
      }

      if (indexMin !== i) {
        this.swap(i, indexMin);
      }
    }
  }

  // 插入排序，从第二个数开始往前比，比它大就往后排  排序小型数组时，此算法比选择排序和冒泡排序性能要好
  insertionSort() {
    let arr = this.array,
      length = arr.length,
      j,
      temp;
    for (let i = 1; i < length; i++) {
      j = i;
      temp = arr[i];
      while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
        j = j - 1;
      }
      arr[j] = temp;
    }
  }

  // 归并排序，归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组，火狐浏览器的sort算法就是用的归并排序，而Chrome使用了一个快速排序的变体。
  // 其复杂度为O(nlogn)。
  merge(left, right) {
    let result = [],
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  }
  mergeSortRec(arr) {
    let length = arr.length;
    if (length === 1) {
      return arr;
    }

    let mid = length >> 1,
      left = arr.slice(0, mid),
      right = arr.slice(mid, length);
    return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
  }
  mergeSort() {
    this.array = this.mergeSortRec(this.array);
  }

  // 快速排序，快速排序也许是最常用的排序算法了。它的复杂度为O(nlogn)，且它的性能通常比其他的复杂度为O(nlogn)的排序算法要好。
  // 和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）
  partition(array, left, right) {
    let pivot = array[(right + left) >> 1],
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this.swap2(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  quick(array, left, right) {
    let index;
    if (array.length > 1) {
      index = this.partition(array, left, right);
      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }

      if (index < right) {
        this.quick(array, index, right);
      }
    }
    return array;
  }
  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }
  // 堆排序  堆排序也是一种很高效的算法，因其把数组当作二叉树来排序而得名。把数组当作二叉树来管理。

  // 顺序搜索，顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找的元素做比较。顺序搜索是最低效的一种搜索算法

  // 二分搜索，这个算法要求被搜索的数据结构已排序。
  binarySearch(item) {
    let low = 0,
      high = this.array.length - 1,
      mid,
      element;

    while (low <= high) {
      mid = (low + high) >> 1;
      element = this.array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}

const array = new ArrayList();
array.insert(8123);
array.insert(23);
array.insert(2);
array.insert(123);
array.insert(13);
array.insert(13523);
array.insert(523);

// array.bubbleSort();
// array.selectionSort();
// array.insertionSort();
array.mergeSort();
// array.quickSort();
// console.log(array.binarySearch(2));
console.log(array.toString());

// console.log(array.array.sort((a, b) => a - b));

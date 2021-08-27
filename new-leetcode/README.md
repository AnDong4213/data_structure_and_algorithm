[precommit 提交前格式化代码](https://prettier.io/docs/en/precommit.html)

[prettier 代码美化](https://prettier.io/docs/en/install.html)

> 数据结构是计算机存储、组织数据的方式，算法是系统描述解决问题的策略与指令(一系列解决问题的清晰指令)。<br />
> 程序 = 数据结构 + 算法。<br />
> 数据结构为算法提供服务，算法围绕数据结构操作。<br />
> 了解基本的数据结构和算法可以提高代码的性能和质量。<br />

> <font size=3 color=#666 face="黑体">示例</font>

### 2, 时间/空间复杂度计算

> 时间复杂度。1，一个函数，用大 O 表示，比如 O(1)、O(n)、O(logN)。2，定性描述该算法的运行时间<br />

```javascript
O(1);
let i = 0;
i+=1;

O(n);
for (let i = 0; i < n; i+=1>) {
  console.log(i)
}
// 前面两个相加，O(1)+O(n) = O(n)  // n足够大时，O(1)忽略不计了

O(n) * O(n) = O(n^2)
for (let i = 0; i < n; i+=1>) {
  for (let j = 0; j < n; j+=1>) {
    console.log(i, j)
  }
}

O(logN);就是以2为底数的logN
let i = 1;
while(i < n) {
  console.log(i);
  i *= 2;
}
// 复杂度的规则，2n，3n都是n，或者说只取复杂度最高的那个，2n是两个相同复杂度，所以最高的也是n
```

![Image text](https://github.com/AnDong4213/data_structure_and_algorithm/blob/main/images/imooc2/360%E6%88%AA%E5%9B%BE20210726202558786.jpg);

> 空间复杂度。1，一个函数，用大 O 表示，比如 O(1)、O(n)、O(n^2)。2，算法在运行过程中临时占用存储空间大小的量度<br />

```javascript
O(1);
let i = 0;
i+=1;

O(n);
const list = [];
for (let i = 0; i < n; i+=1>) {
  list.push(i)
}

O(n^2);
const matrix = [];
for (let i = 0; i < n; i+=1>) {
  matrix.push([])
  for (let j = 0; j < n; j+=1>) {
    matrix[i].push(j)
  }
}
// 矩阵的本质就是一个二维数组，嵌套了两层数组，存储了n的2次方个变量，
```

### 3，数据结构之“栈”

> 栈是什么？ (蜂窝煤的顺序)<br />
> 栈是一个后进先出的数据结构。(放进去-push-入栈，拿出来-pop-出栈) <br />
> js 中没有栈，但可以用 Array 实现栈的所有功能 <br />

`栈的使用场景`

> 需要后进先出的场景。(十进制转二进制，判断字符串的括号是否有效，函数调用堆栈)

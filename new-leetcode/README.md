[precommit 提交前格式化代码](https://prettier.io/docs/en/precommit.html)

[prettier 代码美化](https://prettier.io/docs/en/install.html)
> 数据结构是计算机存储、组织数据的方式，算法是系统描述解决问题的策略与指令(一系列解决问题的清晰指令)。<br />
> 程序 = 数据结构 + 算法。<br />
> 数据结构为算法提供服务，算法围绕数据结构操作。<br />
> 了解基本的数据结构和算法可以提高代码的性能和质量。<br />

> <font size=3 color=#666 face="黑体">示例</font>

### 第2章 时间/空间复杂度计算
> 时间复杂度。1，一个函数，用大O表示，比如O(1)、O(n)、O(logN)。2，定性描述该算法的运行时间<br />

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
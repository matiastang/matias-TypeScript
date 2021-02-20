<!--
 * @Author: tangdaoyong
 * @Date: 2021-01-12 17:43:37
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-01-12 18:00:05
 * @Description: in
-->
# in

`ts`和`js`中的关键字`in`。

## for ... in

是对数组或对象的循环/迭代操作
```ts
let arr = [0, 1, 2, 3, 4, 5]
for (const key in arr) {
    console.log(key);
}

let obj = {
    name: 'matias',
    age: 27
}
for (const key in obj) {
    console.log(key);
}
```

## 判断对象是否是数组/对象的元素/属性
```ts
if (0 in arr) {
    console.log('arr中包含0')
}
if (!(10 in arr)) {
    console.log('arr中不包含10')
}
if ('age' in obj) {
    console.log('obj中包含age')
}
if (!('phone' in obj)) {
    console.log('obj中不包含phone')
}
```
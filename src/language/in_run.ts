// for ... in
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

// 判断对象是否是数组/对象的元素/属性
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
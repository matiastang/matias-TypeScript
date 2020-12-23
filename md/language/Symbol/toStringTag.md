<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-23 09:43:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-23 10:20:09
 * @Description: toStringTag
-->
# toStringTag

## 介绍

`Symbol.toStringTag` 是一个内置 `symbol`，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签，通常只有内置的 `Object.prototype.toString()` 方法会去读取这个标签并把它包含在自己的返回值里。

```ts
/*
* npx ts-node src/language/Symbol/toStringTag_run.ts
*/

// `undefined | null | boolean | number | bigint | string | symbol | void | object | unknown | never | any`

// 基本类型

let ts_null: null = null;
let ts_boolean = false;
let ts_number = 0;
const max = Number.MAX_SAFE_INTEGER;
// 未使用tsconfig.json时提示：
// BigInt literals are not available when targeting lower than ES2020.ts(2737)
// let ts_bigint = 9007199254740991n;
let ts_bigint = BigInt(1);
let ts_string = 'string';
let ts_symbol = Symbol();
let ts_void: void = void

console.log(Object.prototype.toString.call(ts_null))
console.log(Object.prototype.toString.call(ts_boolean))
console.log(Object.prototype.toString.call(ts_number))
console.log(Object.prototype.toString.call(ts_bigint))
console.log(Object.prototype.toString.call(ts_string))
console.log(Object.prototype.toString.call(ts_symbol))
console.log(Object.prototype.toString.call(ts_void))

// 系统对象

console.log(Object.prototype.toString.call(new Map()))
console.log(Object.prototype.toString.call(function* () {}))
console.log(Object.prototype.toString.call(Promise.resolve()))

// 自定义对象

let ts_object: object = {
    name: 'matias',
    get [Symbol.toStringTag]() {
        return 'ts_object';
    }
}
console.log(Object.prototype.toString.call(ts_object))
```
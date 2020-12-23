/*
 * @Author: tangdaoyong
 * @Date: 2020-12-23 09:43:53
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-23 10:19:27
 * @Description: toStringTag
 */

/// <reference lib="es2015.symbol.wellknown" />

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
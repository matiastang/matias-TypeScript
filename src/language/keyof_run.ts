/*
 * @Author: tangdaoyong
 * @Date: 2020-12-30 10:17:44
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-30 14:10:07
 * @Description: keyof测试
 */

// 接口使用keyof
interface Person {
    name: string;
    age: number;
    location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number
type K4 = keyof { [x: number]: Person };  // number

// 类使用keyof
class Person1 {
    name: string = "Semlinker";
}

let sname: keyof Person1;
sname = "name";
// sname = "age"; // Type '"age"' is not assignable to type '"name"'.ts(2322)

// 基本数据类型使用keyof
let K5: keyof boolean; // let K1: "valueOf"
let K6: keyof number; // let K2: "toString" | "toFixed" | "toExponential" | ...
let K7: keyof symbol; // let K1: "valueOf"

// keyof 也称为输入索引类型查询，与之相对应的是索引访问类型，也称为查找类型。在语法上，它们看起来像属性或元素访问，但最终会被转换为类型：
type P1 = Person["name"];  // string
type P2 = Person["name" | "age"];  // string | number
type P3 = string["charAt"];  // (pos: number) => string
type P4 = string[]["push"];  // (...items: string[]) => number
type P5 = string[][0];  // string

interface StringIndexArray {
    [index: string]: string;
}

interface NumberIndexArray {
    [index: number]: string;
}

let test: StringIndexArray = {
    name: 'matias'
}
console.log(test.name);
console.log(test['name']);
console.log(test[0]);

type K8 = keyof StringIndexArray // type K1 = string | number
type K9 = keyof NumberIndexArray // type K2 = number

// 捕获字符串的类型与值
const foo = 'Hello World';

// 使用一个捕获的类型
let bar: typeof foo;

// bar 仅能被赋值 'Hello World'
bar = 'Hello World'; // ok
// bar = 'anything else'; // Error Type '"anything else"' is not assignable to type '"Hello World"'

const colors = {
    red: 'red',
    blue: 'blue'
  };
  
  type colorsType = typeof colors;
  type Colors = keyof typeof colors;
  
  let color: Colors; // color 的类型是 'red' | 'blue'
  color = 'red'; // ok
  color = 'blue'; // ok
//   color = 'anythingElse'; // Error Type '"anythingElse"' is not assignable to type '"red" | "blue"'
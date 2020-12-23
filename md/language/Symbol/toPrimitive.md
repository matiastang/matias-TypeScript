<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-22 17:37:26
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-23 10:38:13
 * @Description: ToPrimitive
-->

# ToPrimitive

[Symbol/toPrimitive](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

`ToPrimitive`是一个内部算法，是编程语言在内部执行时遵循的一套规则。
是`JavaScript`对象转换到基本类型值算法。

看一下如下代码：
```ts
interface Date {
    /**
     * Converts a Date object to a string.
     */
    [Symbol.toPrimitive](hint: "default"): string;
    /**
     * Converts a Date object to a string.
     */
    [Symbol.toPrimitive](hint: "string"): string;
    /**
     * Converts a Date object to a number.
     */
    [Symbol.toPrimitive](hint: "number"): number;
    /**
     * Converts a Date object to a string or number.
     *
     * @param hint The strings "number", "string", or "default" to specify what primitive to return.
     *
     * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
     * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
     */
    [Symbol.toPrimitive](hint: string): string | number;
}
```

## hint

`ToPrimitive` 算法在执行时，会被传递一个参数 `hint`，表示这是一个什么类型的运算（也可以叫运算的期望值），根据这个 `hint` 参数，`ToPrimitive` 算法来决定内部的执行逻辑。

`hint` 参数的取值只能是下列 3 者之一：

1. `string`
2. `number`
3. `default`

## 转换算法

当对象发生到基本类型值的转换时，会按照下面的逻辑调用对象上的方法：

1. 如果存在，调用 `obj[Symbol.toPrimitive](hint)`
2. 否则，如果 `hint` 取值是 `string`：
* 无论是否存在，调用 `obj.toString()` 和 `obj.valueOf()`。
3. 否则（也就是 `hint` 取值是 `number` 或 `default` 的情况）：
* 无论是否存在，调用 `obj.valueOf()` 和 `obj.toString()`。

## 查看hint

```ts
/// <reference lib="es2015.symbol.wellknown" />

/*
* npx ts-node src/language/Symbol/toPrimitive_run.ts
*/

let user = {
    name: "John",
    money: 1000,
   
    [Symbol.toPrimitive](hint: string | number) {
      console.log(`hint: ${hint}`);
      switch (hint) {
          case 'string':
              return this.name
          default:
              return this.money
      }
    }
};

// 需要配置tsconfig.json不然`${user}`是hint: default
console.log(`${user}`)// hint: string
console.log(+user);// hint: number
console.log(user + '500');// hint: default
```

## Symbol.toPrimitive 和 toString/valueOf 方法
并不要求 Symbol.toPrimitive 和 toString/valueOf 方法必须返回 hint 参数值所暗示的类型值。

但要注意下面两点：

1. Symbol.toPrimitive 和 toString 方法的返回值必须是基本类型值。
2. valueOf 方法除了可以返回基本类型值，也可以返回其他类型值。
其他
当我们创建一个普通对象时（{} 或 new Object() 的方式等），对象上是不具备 [Symbol.toPrimitive] （方法）属性的。所以，对于普通对象的到基本类型值的运算，一般按照具体场景：

hint 值为 "string" 时，先调用 toString，toString 如果返回一个基本类型值了，则返回、终止运算；否则接着调用 valueOf 方法。
否则，先调用 valueOf，valueOf 如果返回一个基本类型值了，则返回、终止运算；否则接着调用 toString 方法。

## 遇到的问题

### error TS2585: 'Symbol' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.

文件顶部添加
```ts
/// <reference lib="es2015.symbol.wellknown" />
```

### error TS2339: Property 'toPrimitive' does not exist on type 'SymbolConstructor'.

文件顶部添加
```ts
/// <reference lib="es2015.symbol" />
```
时提示错误。
写一个系统类用过`Symbol.ToPrimitive`的如`new Date()`查看它使用的是`es2015.symbol.wellknown`。所有我们也替换。 
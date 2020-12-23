<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-23 09:37:19
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-23 09:39:11
 * @Description: ts类型
-->
# ts类型

[TypeScript 笔记（一）常见类型简介](https://zhuanlan.zhihu.com/p/60231338)

## 类型介绍

`TypeScript` 中的常见的类型很丰富，包括 ：

`undefined | null | boolean | number | bigint | string | symbol | void | object | unknown | never | any`

其中 `undefined | null | boolean | number | bigint | string | symbol | void` 是原始类型 (`primitive type`)，`object` 代表了所有非原始类型（`non-primitive type`），`unknown | never` 则是类型论中顶和底类型，而 `any` 则代表了动态类型。

原始类型除了上述介绍的，还有字面量类型（`literal type`）和枚举类型（`enum type`）。
<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-30 10:17:07
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-30 10:17:22
 * @Description: typeof
-->
# typeof

## 类型保护

typeof 用作类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，"typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
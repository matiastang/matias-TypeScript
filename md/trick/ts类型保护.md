<!--
 * @Author: tangdaoyong
 * @Date: 2021-01-12 18:07:14
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-01-12 18:18:47
 * @Description: 类型保护
-->
# 类型保护

[类型保护](https://mp.weixin.qq.com/s?__biz=MzI2MjcxNTQ0Nw==&mid=2247484114&idx=1&sn=af33c36580d21c2ffe4e8204f71c10b8&chksm=ea47a38add302a9c01c9bea63f5974554e2a9ab856f1cb3b66620a02452d12d1967fb676dc9f&scene=21#wechat_redirect)

## 类型谓词

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function isOfType<T>(
  varToBeChecked: any,
  propertyToCheckFor: keyof T
): varToBeChecked is T {
  return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
}
```
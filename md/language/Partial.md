<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-22 15:51:01
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-22 16:25:08
 * @Description: Partial
-->
# Partial

[Partial](https://blog.csdn.net/roamingcode/article/details/104111165)

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```
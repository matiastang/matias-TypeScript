<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-22 15:54:21
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-22 16:08:59
 * @Description: 命令行运行ts文件
-->
# 命令行运行ts文件

## TS Node

[TS-Node](https://github.com/TypeStrong/ts-node)
`TS-Node`包装了`node`，可以即时编译代码并通过节点`run`运行`.ts`文件。

1. 安装
```
yarn init
yarn add --dev typescript
yarn add --dev ts-node
```
2. 执行
```
npx ts-node src/run.ts
```
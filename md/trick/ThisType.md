<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-30 14:55:30
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-30 14:56:05
 * @Description: ThisType
-->
# ThisType

通过 ThisType 我们可以在对象字面量中键入 this，并提供通过上下文类型控制 this 类型的便捷方式。它只有在 --noImplicitThis 的选项下才有效。

现在，在对象字面量方法中的 this 类型，将由以下决定：

* 如果这个方法显示指定了 this 参数，那么 this 具有该参数的类型。（下例子中 bar）
* 否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型。（下例子中 foo）
* 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为 T。
* 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为该上下文类型。
* 否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型。
* 否则，this 的类型为 any。
<!--
 * @Author: tangdaoyong
 * @Date: 2020-12-22 16:30:54
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-22 16:38:14
 * @Description: ts创建符合interface的对象
-->
# ts创建符合interface的对象

1. `interface`中的字段使用可空

```ts
interface People {
    name?: string | undefined
    age?: number | undefined
}

const peopleObj: People = { name: 'matias', }
console.log(peopleObj);
```

2. 使用`Partial`实现上面同样的效果

```ts
interface IUser {
    name: string
    age: number
    department: string
}

// 类型`Puser`就是在`interface`的基础上，字段变为可空
type Puser = Partial<IUser>

const IuserObj: Puser = { name: 'matias', }
console.log(IuserObj);
```
/*
 * @Author: tangdaoyong
 * @Date: 2020-12-22 16:18:57
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-22 16:37:58
 * @Description: Partial
 */

interface People {
    name?: string | undefined
    age?: number | undefined
}

const peopleObj: People = { name: 'matias', }
console.log(peopleObj);


interface IUser {
    name: string
    age: number
    department: string
}

// 类型`Puser`就是在`interface`的基础上，字段变为可空
type Puser = Partial<IUser>

const IuserObj: Puser = { name: 'matias', }
console.log(IuserObj);
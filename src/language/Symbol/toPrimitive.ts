/*
 * @Author: tangdaoyong
 * @Date: 2020-12-22 17:37:36
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-23 10:21:28
 * @Description: ToPrimitive
 */

// <reference no-default-lib="true"/>

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



let left = {
    name: ''
}
// let userName: string = user as string
// console.log(JSON.stringify(user));
// console.log(left[user]);
console.log(<unknown | string> user)
console.log(`${user}`)
console.log(+user);// hint: number
console.log(user + '500');// hint: default
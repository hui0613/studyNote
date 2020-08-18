"use strict";
/*
 * @Author: Hui
 * @Date: 2020-08-11 21:55:36
 * @LastEditTime: 2020-08-12 14:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hhzdtk.com/home/hui/Document/study/11-typescript/06-泛型.ts
 */
/**
 * 使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
 *
 * 定义一个方法来接受任意类型的数据，并且返回该类型的数据
 */
/**
 * 使用 any 可以实现上面的功能，但是丢失了传入的类型的返回的类型
 */
// function indetity(arg: any): any {
//   return arg;
// }
/**
 * 使用 泛型 实现
 *
 *  <T> 表示一种泛型，可以接受任意类型的数据
 *  调用函数是传入的参数的数据类型和返回值的数据类型必须相同
 */
function indentity(arg) {
    return arg;
}
/**
 * 泛型类
 *
 * 使用泛型类定义一个类，包含一个方法，能够同时进行字符串的拼接和数字的加减
 */
//  下面是官网中的例子,当时会有报错
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
/**
 * 使用泛型类求数组的最小值
 * 在实例化是需要指定数据类型
 *    可以求任意类型的最小值
 */
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] < min) {
                min = this.list[i];
            }
        }
        return min;
    };
    return MinClass;
}());
var minClass = new MinClass();
minClass.add(2);
minClass.add(3);
minClass.add(11);
console.log(minClass.min());
function log(arg) {
    console.log(arg.length);
    return arg;
}
/**
 * 由于上面的泛型函数被定义了约束,所以不能处理任意类型的数据,
 * 只能处理带有 length 属性的数据
 */
log({ length: 10, value: 3 });
/**************/
/**************/
/**************/
/**
 * 把类作为参数类型的泛型类
 *
 * 定义一个 user 类映射到数据库的 user 表
 * 定义一个 DB 类用于操作数据库
 * 将 user 类作为参数传递给 DB 类
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var DB = /** @class */ (function () {
    function DB() {
    }
    // 操作数据库的方法
    DB.prototype.add = function (user) {
        return true;
    };
    return DB;
}());
var u = new User();
u.userName = "zs";
u.password = "123456";
var db = new DB();
console.log(db.add(u));

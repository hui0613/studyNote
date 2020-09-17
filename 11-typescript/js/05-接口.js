"use strict";
/*
 * @Author: your name
 * @Date: 2020-08-11 20:53:47
 * @LastEditTime: 2020-08-12 13:07:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hhzdtk.com/home/hui/Document/study/11-typescript/05-接口.ts
 */
/**
 * 接口是一种规范的定义，他定义了行为和动作的规范
 * 接口定义了一些类需要遵守的规范，接口不关心这些类内部的具体实现和状态数据，
 * 只是规定这些类中必须提供某些方法或者参数
 */
/**
 *  下面的例子中定义了一个函数，并且要求在调用这个函数的必须传入一个对象，并且这个对象必须
 * 含有一个 label 属性，作为函数的参数
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
/**
 *  若传入的对象中含有接口中没有定义的属性，
 * 则不能直接将对象字面量写在函数的执行符号内(括号)，
 * 不然会报错，这是因为 ts 会进行额外的类型检查，当然，也可以跳过这些额外的类型检查
 */
var obj = { size: 12, label: "object" };
printLabel1(obj);
/**
 *  绕开额外的类型检查
 *
 * 1. 使用类型断言
 *    printLabel1({ size: 12, label: "object" } as LabelledValue);
 * 2.添加一个字符串索引签名(有点懵，不是很懂)
 *    在接口中设置一个任意类型的属性，并且属性名是一个变量，用于接受其余的变量
 * interface LabelledValue {
 *    label: string;
 *    [propName:string]:any
 * }
 *
 *
 * 3.将对象复制给一个变量，在进行传参
 *
 *
 */
/*************************/
/*************************/
/*************************/
/**
 * ts 中具有 ReadyOnlyArray<T>  类型，与Array<T> 类型相似，但是是只读的（相当于名 没有 set 方法 ）
 *
 */
var a = [1, 2, 4];
// 下面定义的 arr 是只读的，修改 arr 的任何属性和元素都会报错
var arr = a;
var md5 = function (key, value) {
    return key + value;
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name);
    };
    return Dog;
}());
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
        this.name = name;
    }
    Web.prototype.eat = function () {
        console.log(this.name);
    };
    Web.prototype.work = function () {
        console.log(this.name);
    };
    return Web;
}());

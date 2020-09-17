"use strict";
/**
 *  ts 中定义函数
 * 需要指定函数的返回类型，若返回的数据类型不符合则会报错
 *
 *
 * 若方法没有返回值，则设置为 void
 */
//  定义一个返回值的数据类型为 string 的函数
function test() {
    // 若此处返回一个非 string 类型的数据则会报错
    return "result";
}
// 匿名函数
var test2 = function () {
    return 123;
};
// 没有返回值的方法
function test3() {
    console.log("test");
}
/**
 * 参数的传递
 *  在指定函数的参数是需要指定参数的数据类型，在调用函数是只能传递对应数据类型的参数
 *
 *
 */
function getInfo(name, age) {
    return name + "---" + age;
}
console.log(getInfo("zs", 12));
/**
 * 方法的可选参数
 * 在 es5 中方法中的形参和实参可以不一样
 * 在 ts 中两者必须一样，若不一样则需要配置可选参数
 *
 * 在形参后添加一个 ？ 表示该参数是可选参数
 * 可选参数必须配置在形参列表的最后面
 */
function getInfo1(name, age) {
    return name + "---" + age;
}
/**
 *
 * 默认参数
 * es5 中无法设置方法的默认参数，在 es6 和 ts 中可以设置默认参数
 *
 * 在不传入默认参数是，会使用默认值
 */
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    return name + "---" + age;
}
/**
 * 剩余参数
 *  使用 ... 扩展运算符来接受剩余参数
 */
function sum(a, b, c) {
    return a + b + c;
}
function sum1(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum1(1, 2, 3, 4, 5, 6, 7));
function getData(str) {
    if (typeof str === "string") {
        return "string";
    }
    else if (typeof str === "number") {
        return "number";
    }
}
console.log(getData("zs")); // string
console.log(getData(12)); // number

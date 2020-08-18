"use strict";
/**
 * 装饰器是一种特殊类型的申明，它可以被附加到类申明，属性，方法或参数上，可以改变；类的行为
 *
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  类装饰器
function logClass(params) {
    console.log(params);
}
var httpClient = /** @class */ (function () {
    function httpClient() {
    }
    httpClient.prototype.getDatas = function () { };
    httpClient = __decorate([
        logClass
    ], httpClient);
    return httpClient;
}());
/**
 * 装饰器组合
 *
 * 当多个装饰器应用在一个申明上时：
 *  1.有上至下对装饰器求值
 *  2.若求值的结果为函数，由下至上进行调用
 */
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
/**
 * 上面执行结果：
 * f(): evaluated
 * g(): evaluated
 * g(): called
 * f(): called
 */

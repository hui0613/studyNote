/**
 * 装饰器是一种特殊类型的申明，它可以被附加到类申明，属性，方法或参数上，可以改变；类的行为
 *
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 */

//  类装饰器
function logClass(params: any) {
  console.log(params);
}
@logClass
class httpClient {
  constructor() {}
  getDatas() {}
}

/**
 * 装饰器组合
 *
 * 当多个装饰器应用在一个申明上时：
 *  1.有上至下对装饰器求值
 *  2.若求值的结果为函数，由下至上进行调用
 */

function f() {
  console.log("f(): evaluated");
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("f(): called");
  };
}

function g() {
  console.log("g(): evaluated");
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("g(): called");
  };
}

class C {
  @f()
  @g()
  method() {}
}

/**
 * 上面执行结果：
 * f(): evaluated
 * g(): evaluated
 * g(): called
 * f(): called
 */

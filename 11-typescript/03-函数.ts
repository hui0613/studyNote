/**
 *  ts 中定义函数
 * 需要指定函数的返回类型，若返回的数据类型不符合则会报错
 *
 *
 * 若方法没有返回值，则设置为 void
 */

//  定义一个返回值的数据类型为 string 的函数
function test(): string {
  // 若此处返回一个非 string 类型的数据则会报错
  return "result";
}

// 匿名函数
var test2 = function (): Number {
  return 123;
};

// 没有返回值的方法
function test3(): void {
  console.log("test");
}

/**
 * 参数的传递
 *  在指定函数的参数是需要指定参数的数据类型，在调用函数是只能传递对应数据类型的参数
 *
 *
 */

function getInfo(name: string, age: number): string {
  return `${name}---${age}`;
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

function getInfo1(name: string, age?: number): string {
  return `${name}---${age}`;
}

/**
 *
 * 默认参数
 * es5 中无法设置方法的默认参数，在 es6 和 ts 中可以设置默认参数
 *
 * 在不传入默认参数是，会使用默认值
 */

function getInfo2(name: string, age: Number = 20): string {
  return `${name}---${age}`;
}

/**
 * 剩余参数
 *  使用 ... 扩展运算符来接受剩余参数
 */

function sum(a: number, b: number, c: number): number {
  return a + b + c;
}

function sum1(a: number, ...result: number[]): number {
  let sum = a;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}

console.log(sum1(1, 2, 3, 4, 5, 6, 7));

/**
 * 函数的重载
 *    javascript 并没有函数重载的概念，通过为一个函数设置多个函数类型来实现多种功能的目的
 * es5 中出现同名方法，先定义的会被后定义的覆盖
 */

function getData(name: string): string;
function getData(age: number): number;

function getData(str: any): any {
  if (typeof str === "string") {
    return "string";
  } else if (typeof str === "number") {
    return "number";
  }
}

console.log(getData("zs")); // string
console.log(getData(12)); // number

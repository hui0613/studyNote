/**
 * 相比 js ，ts 多了 枚举（enum）、 元组（tuple） 、任意类型（any） 、void 类型、never类型
 * 增加类型校验，在定义变量时需要制定数据类型
 */

// 定义一个 boolen 类型

var flag: boolean = true;

// 将 number 复制给 flag 变量时会报错
// flag  = 123；  // 报错

// number 类型
var num: number = 123;

//string 类型
var str: string = "str";

// 数组类型

// 两种定义元组的形式

// 1.表示数组中所   有元素都是 number 类型的数据
var arr1: number[] = [1, 2];

// 2.
var arr2: Array<number> = [1, 2, 43];

// 元组类型 tuple
// 定义元组中每一个元素的类型，必须一一对应
let arr3: [number, string] = [1, "str"];

// 枚举类型

enum Falg {
  success,
  cancel,
  failed = 9,
  demo,
}

let s: number = Falg.success;
console.log(s); // 1
let s2: Falg = Falg.demo;
console.log(s2); // 10
/**
 * 若枚举类型中的标志符都没有赋值，则会输出对应标志符的下标
 * 若只是部分标志符没有赋值，那么
 *  1. 在输出的标志符之前没有被赋值的标志符会打印该标志符的下标
 *
 *  2. 若数字出的标志符之前有被赋值的标志符，则会打印最近有赋值的标志符的值加1
 */

//  任意类型 any  可以给变量赋值任意类型的数据
//在获取元素节点时使用 any 类型
var any1: any = "1231";
any1 = 123;

// null 和 undefined 类型

var unum: undefined;
console.log(unum);

// 指定变量为 number 类型或者 undefined
var num1: number | undefined;
console.log(num1);

//  void 类型
// 一般用于定义没有返回值的方法时,若方法有返回值需要制定方法的返回值类型

function run(): void {
  console.log("123");
}

// never 类型（是其他类型（包括 null 和 undefined）的子类型） 代表从不会出现的值

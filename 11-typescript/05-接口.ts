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

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/**
 * 使用 接口 来实现上面的例子
 * 使用 interface 关键字来定义一个接口
 *
 * 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
 * 接口中可以定义可选属性，在属性后添加一个 ?
 *  同样的，也可以为接口中的属性添加只读（readonly）修饰
 */
interface LabelledValue {
  label: string;
}

function printLabel1(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

/**
 *  若传入的对象中含有接口中没有定义的属性，
 * 则不能直接将对象字面量写在函数的执行符号内(括号)，
 * 不然会报错，这是因为 ts 会进行额外的类型检查，当然，也可以跳过这些额外的类型检查
 */
let obj = { size: 12, label: "object" };
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

let a: number[] = [1, 2, 4];
// 下面定义的 arr 是只读的，修改 arr 的任何属性和元素都会报错
let arr: ReadonlyArray<number> = a;
// arr.length = 10; // 报错

/**
 * 函数类型接口：
 *      对函数的参数和返回类型进行约束
 */

interface encrypt {
  (key: string, value: string): string;
}

let md5: encrypt = function (key: string, value: string): string {
  return key + value;
};

/**
 * 可索引接口
 *    可索引接口具有一个索引签名，描述可索引的数据类型，和相应索引的返回值类型
 *  索引签名可以设置成只读类型，这样就可以防止给索引复制
 */

// 这个接口表示：当索引是 number 类型时，返回值为 string 类型
interface StringArray {
  [index: number]: string;
}

/**
 * 类类型接口
 *    与 抽象类 类似
 *
 * 类类型接口中可以含有属性和方法，方法不用具体实现，而是在类中实现（必须实现）
 */

interface Animal {
  name: string;
  eat(str: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name);
  }
}

/**
 * 接口的扩展 继承接口
 *    接口可以继承，
 * 在类中实现继承的接口是，被继承接口的方法和属性也要在类中得到实现
 */

interface Animal {
  eat(): void;
}

interface Persons extends Animal {
  work(): void;
}

class Web implements Persons {
  constructor(public name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name);
  }

  work() {
    console.log(this.name);
  }
}

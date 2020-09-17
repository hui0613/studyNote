"use strict";
// //  ts 中类的定义
// class Animal {
//   name: string; // 声明一个 属性，这里省略个 public 关键字，外界可以访问该属性
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(num: number) {
//     console.log(`${this.name} moved ${num}m `);
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /**
//  * ts 中实现继承
//  * 使用 extends  实现类的继承
//  *
//  * 定义一个类继承上面的 Animal 类
//  */
// class Dog extends Animal {
//   weight: number; // 申明一个该类特有的属性
//   constructor(name: string, weight: number) {
//     // this.weight = weight;  // 报错
//     super(name);
//     /**  派生类中 必须 调用 super 方法来执行 基类 中的共造方法，
//      * 访问派生类构造函数中的this 之前，必须先调用 super 方法
//      * 并且传递基类所需要的参数
//      */
//     this.weight = weight;
//   }
//   bark(): void {
//     console.log("woof");
//   }
// }
// let dog = new Dog("xiao", 12);
// dog.bark();
// dog.move(12);
// class Mouse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(): void {
//     /**
//      *  在 派生类中 重写 基类中方法
//      */
//     console.log("is a mouse");
//   }
// }
// let mouse = new Mouse("mouse");
// mouse.move();
/**
 * 公有、私有、受保护修饰符
 *
 * 在 ts 中，所有的属性和方法默认都是 公有的，可以省略 public 关键字,
 * 对于共有的属性和方法，外界都可以访问
 *
 * 当一个属性或者方法被 private 关键字 修饰时不能在申明它的类之外访问（即使是该类的派生类也不能访问）,可以通过
 * 在该类中定义方法类间接的访问该属性或者成员
 *
 * 当一个属性或者方法被 protected 关键字 修饰是，该类及其派生类可以访问到成员，除此之外不可以访问
 *
 * 构造函数也可以被标记为 protected ，这样的话，该类不能在包含这个类意外实例化，但是可以被继承
 *
 * readonly 修饰符：使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 *
 */
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    return Person;
}());
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(name, gender, age) {
        return _super.call(this, name, gender, age) || this;
    }
    return Boss;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, gender, age, department) {
        var _this = _super.call(this, name, gender, age) || this;
        _this.department = department;
        return _this;
    }
    return Employee;
}(Person));
var person = new Person("zs", "man", 12);
// console.log(person.gender); //报错
// let Boss =  new Boss('zs','man',23); //报错
/**
 * 参数属性：
 *  在构造函数的参数前使用访问修饰符来修饰，会声明并初始化一个属性
 */
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
        this.name = name;
        console.log(this.name);
    }
    return Octopus;
}());
var oc = new Octopus("demo");
/**
 * 静态属性
 *
 * 使用 static 关键字来定义静态属性
 * 访问静态属性时，需要在静态属性前加上该属性所属的类名
 */
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.area = function (point) {
        console.log(Grid.origin.x, Grid.origin.y);
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid = new Grid();
grid.area({ x: 1, y: 2 });
/**
 * 抽象类
 *  使用 abstract 关键字来定义一个抽象类，在抽象类中可以定义抽象方法，抽象方法必须在派生类中
 * 得到实现，抽象方法可以包含访问修饰符
 *
 */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
department.generateReports();

// {
//   function Foo() {
//     /** 这里没有使用 var 关键字进行申明，getName 默认作为全局变量
//      * 同样的，在执行 new Foo() 时，会将 getName 作为全局变量，而不是实例的属性，因此在 new 得到的
//      * 实例中不存在 getName 属性
//      * 所以在执行 new Foo().getName(); 访问的其实是原型上的 getName 方法
//      */

//     getName = function () {
//       console.log("1");
//     };
//     return this;
//   }

//   // @2
//   Foo.getName = function () {
//     console.log("2");
//   };

//   // @3
//   Foo.prototype.getName = function () {
//     console.log("3");
//   };
//   /** 函数表达式在预编译过程中不会读取函数体，只有在执行的时候才会进行赋值
//    * 因此在第一次中 getNam() 时 function () {console.log("4");};  会覆盖 {console.log(5);}
//    */

//   // @4
//   var getName = function () {
//     console.log("4");
//   };

//   // @5
//   function getName() {
//     console.log(5);
//   }

//   console.log(Foo.getName);
//   Foo.getName(); // 2
//   getName(); // 4
//   //Foo在全局环境下执行 ，返回的 this 指向的全局环境（window），下面的代码相当于执行 this.getName()
//   Foo().getName(); // 1
//   //上一行代码前半段执行完成后，相当于重新定义了 getName 方法
//   getName(); // 1
//   new Foo.getName(); // 2
//   new Foo().getName(); // 3
//   new new Foo().getName(); // 3
// }

console.log("********************************")


{
  var a = 1;

  function fn() {
    console.log(a); // undefinde
    var a = 5;
    console.log(a); // 5
    a++;
    var a;
    fn2(); // 6
    console.log(a); // 20
    function fn2() {
      console.log(a);
      a = 20;
      b = 100;
    }
  }
  fn();
  console.log(a); // 1
  a = 10;
  console.log(a); // 10
  console.log(b); // 100
}

{

  {
    var a = { n: 1 };
    var b = a;
    a = { n: 2 };
    a.x = a;
    console.log(a.x);
    console.log(b.x);
  }

  var a = { n: 1 };
  var b = a;
  a.x = a = { n: 2 };
  console.log(a.x);
  console.log(b.x);
}

console.log('**************************')

{
  var length = 10;
  function fn() {
    // console.log(this)
    console.log(this.length);
  }
  var obj = {
    length: 5,
    method: function (fn) {

      fn();
      arguments[0]();
    }
  };
  obj.method(fn);
  obj.method(fn,123);
}


console.log([] == [])
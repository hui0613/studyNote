### 闭包

> 函数和其周围环境状态的引用捆绑在一起就会形成闭包

```javascript
function a{
    var num = 12;
    function b(){
        num++ ;
        console.log(num)
    }
    glob = 100;
    return b;
}

var test = a()
test();//13
```

在上面的代码中，a 函数在执行完毕是，理论上应当将 a 函数创建的执行期上下文（活动对象--AO）销毁，但实际上，由于在 a 函数内部定义的 b 函数被作为返回值返回到了外部环境中，因此 a 函数的执行期上下文被保留且被 b 函数引用，这就形成了闭包。

#### 以上代码作用域链变化过程

- a 函数被创建时

### 闭包的作用

- 实现共有变量

  - eg:累加器
    上面的例子就是一个累加器，每次调用`test` 方法,num 值都会进行 ++ 操作

- 可以作缓存
  因为闭包中的执行期上下文不会被销毁，因此在外层函数定义的变量会一直保存且处于可访问状态，因此可以使用闭包来储存一些数据

- 可以属实现封装，属性私有化

```javascript
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```

上面的例子中，立即执行函数 `Counter` 中包含两个私有项 ---- 变量 `privateCounter` 和函数 `changeBy`，这两项都无法在函数外部直接使用，只能用过函数返回的三个方法来进行访问，这样就实现了属性的私有化。

- 模块化开发，避免污染全局环境

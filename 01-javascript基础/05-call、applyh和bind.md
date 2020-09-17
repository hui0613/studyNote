## call()

> **`call()`** 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

### 参数

`call()` 方法第个参数是函数在运行是需要使用的 this 对象，第二个参数开始为参数列表

```javascript
function show() {
  console.log("show");
  console.log(arguments);
}
var obj = {};

show.call(obj, 1, 23);
```

### `call()` 返回值

该方法返回调用该函数的返回值，若没有返回值，则返回 `undefined`

### `call()` 方法允许一个对象调用不属于这个对象的函数或方法

```javascript
show.call(obj);
```

### 可以使用 `call()` 方法实现继承

```javascript
var Animate(){

}
var Dog(){
    Animate.call(this)
}
```

在使用 `call()` 方法是，若没有传递第一个参数，在非严格模式下，默认为 `window`,在严格模式下为 `undefined`

## apply()

`apply()` 的语法和作用与 `call()` 相似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

## bind()

> bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

`bind()` 函数和 `call()`、`apply()` 函数一样，可以改变函数的 `this` 指向，但是 `bind()` 在改变函数的 `this` 指向是并不会立即执行函数，而是会返回一个新的函数

```javascript
function test() {
  console.log(this);
}

var obj = {};
var newFun = test.bind(obj);
newFun(); // {}
```

## 手动实现 `call` ,`apply` ,`bind`

### 实现 call()

```javascript
// 实现 call 方法
Function.prototype.myCall = function (context) {
  //若没有指定 this，则默认为全局环境
  if (context === undefined) {
    context = window === "undefined" ? global : window;
  }

  const fn = Symbol();
  context[fn] = this;
  context[fn](...[...arguments].slice(1));
  // 函数执行完毕之后要删除该属性
  delete context[fn];
};
```

### 实现 apply()

```javascript
/**
 * apply 方法和 call 方法类似，只是在传递参数是不同
 */
Function.prototype.myCall = function (context) {
  //若没有指定 this，则默认为全局环境
  if (context === undefined) {
    context = window === "undefined" ? global : window;
  }

  const fn = Symbol();
  context[fn] = this;
  // 与 call 方法的不同之处
  context[fn](...[...arguments].slice(1));
  // 函数执行完毕之后要删除该属性
  delete context[fn];
};
```

### 实现 bind()

```javascript
Function.prototype.myBind = function (context) {
  if (context === undefined) {
    context = window === "undefined" ? global : window;
  }
  let _this = this,
    args = [...arguments].slice(1);

  return function () {
    let newArges = [...arguments];
    return self.apply(context, args.concat(newArges));
  };
};
```

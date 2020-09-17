使用 `typeof` 和 `instanceof` 都可检测变量类型，typeof 可以判断基本数据类型以及函数，但是无法判断数组、对象以及 `null`

## typeof

```javascript
var num = 123,
  str = "123",
  flag = true,
  unde = undefined;
console.log(typeof num);
console.log(typeof str);
console.log(typeof flag);
console.log(typeof unde);

var arr = [],
  obj = {},
  test = function () {},
  nu = null;
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof test);
console.log(typeof nu);
```

上面的代码中判断 `arr` 、`obj`、 `nu` 返回的都是 `object`，无法具体的判断数据类型

## instanceof

> `instanceof` **运算符**用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```javascript
function Person() {}

let person = new Person();

console.log(person instanceof Person); //  true
```

### 实现 instanceof

```javascript
/**
 *
 * instanceof 实现原理
 *
 * 检测构造函数的原型是否出现在实例的原型链上
 *
 * @param {*} letfValue 实例对象
 * @param {*} rightValue 构造函数
 */
function new_instanceof_of(letfValue, rightValue) {
  let rightProto = rightValue.prototype,
    leftProto = letfValue.__proto__;
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (leftProto === rightProto) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}
```

## typeof 实现原理

`typeof` 一般用于判断一个变量的类型，`number`、`string`、`boolean`、`undefined`、`object`、`function`、`symbol`

`instanceof` 主要的作用是判断一个实例是否属于某一中类型

基本原理：

> `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

### 模拟实现 `instanceof`

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

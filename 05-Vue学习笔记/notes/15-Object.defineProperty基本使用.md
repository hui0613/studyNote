## Object.defineProperty()

### 参数

- obj

  要定义属性的对象。

- prop

  要定义或修改的属性的名称或 Symbol 。==> 可定义新的属性和修改已有的属性

* descriptor

  要定义或修改的属性描述符。（该参数是一个对象）

### 返回值

传递给函数的对象

### 基本使用

```javascript
let obj = {
  name: 'zs',
};
Object.defineProperty(obj, 'age', {
  // configurable 键值为 true 时，该属性可删除，该属性的描述符可被修改，默认为 false,设置为false时若尝试删除该属性，在非严格模式下会被忽略，在严格模式下会抛出异常
  // configurable: true,
  // // enumerable 键值为 true 时，该属性可被枚举，默认为 false
  // enumerable: true,
  // // value 属性的值为对象对应属性的值
  // value: 12,
  // //writable 键值为 true 时，该属性可写，否则不可使用 复制运算符改变，默认为 false
  // writable: true,

  /**
   *  在描述符中，get() set()不能和 value writable 共存
   */

  // 访问该属性时，会自动调用 get 方法
  get() {
    return age;
  },

  // 使用 复制运算符时会调用 set 方法
  set(val) {
    age = val;
  },
});
obj.age = 10;
console.log(obj.age);
```

#### 使用 `Object.defineProperty()` 模拟 vm 对象

`Vue`中会遍历 `data` 对象中的所有属性，并将其设置成 `VM` 对象的属性

```javascript

```

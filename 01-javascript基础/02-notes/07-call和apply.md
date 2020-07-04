### call()

**call() 方法会改变调用者的 `this`指向**

```
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }

        function Food(name, price) {
            /**这里的 this 指向 Food 会为 Food添加 name 和price 属性，下面的函数同理*/
            Product.call(this, name, price);
            this.category = 'food';
        }

        function Toy(name, price) {
            Product.call(this, name, price);
            this.category = 'toy';
        }

        var cheese = new Food('feta', 5);
        var fun = new Toy('robot', 40);
        console.log(cheese)
        console.log(fun)
```

### apply()

**apply() 方法和call() 方法类似，同样可以改变 this 的指向，不同的时 call() 方法接受一个参数列表， 而 apply() 接受一个参数数组**

**使用 apply() 将一个数组添加到另一个数组中**

```
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```
使用 push 方法时会将数组作为一个元素整个添加到数组中

```
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push( elements);
console.info(array); // ["a", "b", [0, 1, 2]]
```












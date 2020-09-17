## 函数 Function

函数的形参和 （实参）argument 对象对应的参数不是同一个变量，但是改变其中一个另一个也会相应的改变
实参的个数由调用函数时传递参数的个数决定

## 预编译

### js 执行流程

- 语法分析：通篇分析代码
- 预编译：发生在函数执行的前一刻

  - 函数声明整体提升
  - 变量声明提升（变量初始化不会被提升）

    (以上两个并不是预编译的过程，只是在预编译过程中会发生的）

    预编译过程中会将未经声明就赋值的变量设置为全局（window）变量，在全局声明的变量同样为全局变量

    ```javascript
    function test() {
      var a = (b = 123);
    }
    console.log(a);
    console.log(b);
    ```

    上述代码中，b 为全局变量，在函数外可以使用 b，

    - **预编译的过程**

      - 创建 AO 对象（`Activation Object`）(执行期上下文)
      - 找函数中的形参和变量声明，将其值设置为 `undefind`（在这一步会进行变量提升）
      - 将实参和形参相统一
      - 寻找函数中函数声明，将其值设置成函数体

      ```javascript
      function fn(a) {
      console.log(a)；//function a() { }

      var a = 123;

      console.log(a);//123

      function a() { }
      console.log(a);//123
      var b = function () { }

      console.log(b);//function () { }

      function d (){}
      }
      fn(1)
      ```

      以上例子中函数预编译过程及结果

      - 创建 AO 对象

        ```javascript
        AO{

        }
        ```

        - 寻找形参和变量声明

        ```javascript
        AO{
            a: undefind,
            b: undefind
        }
        ```

        - 实参和形式参向统一

        ```javascript
        AO{
            a:1,
            b: undefind
        }
        ```

        - 在函数中寻找函数声明

        ```javascript
        AO{
            a:1,
            b:undefind,
            d: function d (){}
        }
        ```

        **预编译完成之后执行函数**

    - **全局预编译个函数与编译的过程基本相似，全局预编译过程中没有实参和形参的统一这一步骤，并且创建的为 GO 对象（Global Obejct：全局对象）**

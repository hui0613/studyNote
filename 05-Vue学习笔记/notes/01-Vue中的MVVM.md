## 什么是 MVVM

`MVVM` 是 `Model-View-ViewModel`的缩写。

> MVVM 有助于将图形用户界面的开发与业务逻辑或后端逻辑（数据模型）的开发分离开来，这是通过置标语言或 GUI 代码实现的。MVVM 的视图模型是一个值转换器， 这意味着视图模型负责从模型中暴露（转换）数据对象，以便轻松管理和呈现对象。在这方面，视图模型比视图做得更多，并且处理大部分视图的显示逻辑。视图模型可以实现中介者模式，组织对视图所支持的用例集的后端逻辑的访问。（来源维基百科）

---

MVVM 由 Model、View、ViewModel 三部分组成，Model 代表的是数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑；

## Vue 中的 MVVM

![](https://user-gold-cdn.xitu.io/2018/6/24/1643060c121f7361?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

在 MVVM 的架构下，View 层和 Model 层并没有直接联系，而是通过 ViewModel 层进行交互。ViewModel 层通过双向数据绑定将 View 层和 Model 层连接了起来，使得 View 层和 Model 层的同步工作完全是自动的。因此开发者只需关注业务逻辑，无需手动操作 DOM，复杂的数据状态维护交给 MVVM 统一来管理。

- **Model(M)** :普通的 `javascript` 对象，例如 `Vue` 实例中的 `data`

* **View(V)**: 视图
  html 模板中的 #app

- **ViewModel(VM)** : Vue 实例

  - 负责数据和视图的根新

  * 是 Model 和 View 视图通信的桥梁

简单来说：**数据驱动视图**

## MVVM - 相应式原理

[深入 Vue 相应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)

> 当你把一个普通的 `JavaScript` 对象传入 `Vue` 实例作为 `data` 选项，Vue 将遍历此对象所有的 `property`，并使用 `Object.defineProperty` 把这些 `property` 全部转为 `getter/setter`

## 什么是MVVM

`MVVM` 是 `Model-View-ViewModel`的缩写。
> MVVM有助于将图形用户界面的开发与业务逻辑或后端逻辑（数据模型）的开发分离开来，这是通过置标语言或GUI代码实现的。MVVM的视图模型是一个值转换器，[1] 这意味着视图模型负责从模型中暴露（转换）数据对象，以便轻松管理和呈现对象。在这方面，视图模型比视图做得更多，并且处理大部分视图的显示逻辑。[1] 视图模型可以实现中介者模式，组织对视图所支持的用例集的后端逻辑的访问。（来源维基百科）

****

MVVM 由Model、View、ViewModel三部分组成，Model代表的是数据模型，也可以在Model中定义数据修改和操作的业务逻辑；

## Vue中的MVVM

![](https://user-gold-cdn.xitu.io/2018/6/24/1643060c121f7361?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

在MVVM的架构下，View层和Model层并没有直接联系，而是通过ViewModel层进行交互。ViewModel层通过双向数据绑定将View层和Model层连接了起来，使得View层和Model层的同步工作完全是自动的。因此开发者只需关注业务逻辑，无需手动操作DOM，复杂的数据状态维护交给MVVM统一来管理。












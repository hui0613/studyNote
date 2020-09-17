 // 获取所有的 span 标签
 var menuSpan = document.querySelectorAll(".my_menu_title")

 //使用一个变量来保存当前打开的菜单
 var openMenu = null;
 for (let i = 0; i < menuSpan.length; i++) {
     menuSpan[i].onclick = function () {
         // 获取被点击元素的父元素
         var parentUl = this.parentElement;

         let startHeight = parentUl.offsetHeight;

         toggleClassName(parentUl, "collapsed")
         // console.log(openMenu)
         if (openMenu != null && openMenu != parentUl && !hasClassName(openMenu, "collapsed")) {
             // alert("demo")
             let openStartHeight = openMenu.offsetHeight;
             addClassName(openMenu, "collapsed");
             // openMenu.style.height = openStartHeight + "px";
             let openEndHeight = openMenu.offsetHeight;
             move(openMenu, "height", openStartHeight, openEndHeight, 5, function () {
                 openMenu.style.height = ""
                 openMenu = parentUl
             })
         } else {
             openMenu = parentUl;
         }

         let endHeight = parentUl.offsetHeight;

         move(parentUl, "height", startHeight, endHeight, 5, function () {
             parentUl.style.height = "";

         })



     }
 }

 // 定义函数用于 给元素对象添加 类名
 function addClassName(obj, className) {
     if (!hasClassName(obj, className)) {
         //元素不存在质地年类名，可以添加
         if (obj.className == '') {
             obj.className += className
         } else {
             obj.className += " " + className;
         }

     }
 }

 //定义函数删除元素的类
 function removeClass(obj, className) {

     if (hasClassName(obj, className)) {
         let reg = new RegExp("\\b" + className + "\\b");
         obj.className = obj.className.replace(reg, "");
     }
 }

 //添加或者删除类名循环切换
 function toggleClassName(obj, className) {
     if (!hasClassName(obj, className)) {
         //指定元素不包含指定类名，则添加类名
         addClassName(obj, className)
     } else if (hasClassName(obj, className)) {
         //指定元素一有指定类名，则删除该类名
         removeClass(obj, className)
     }
 }

 // 定义函数判断指定元素 是否已经包含指定类名，避免重复添加类名
 function hasClassName(obj, className) {
     var objClassName = obj.className;
     let reg = new RegExp("\\b" + className + "\\b")
     if (reg.test(objClassName)) {
         return true;
     }
     return false;
 }

 //定义一个函数设置动画效果 参数：对象，属性，起始状态，目标状态，速度
 function move(obj, attr, start, end, speed, callback) {

     if (start < end) {
         //起始状态小于目标状态时
         // console.log("demo")
         // alert("demo")
         obj.style[attr] = start + "px"
         let timer = setInterval(function () {
             // console.log(obj.style[attr])
             let x = obj.style[attr];
             obj.style[attr] = parseInt(x) + speed + "px"
             if (parseInt(x) >= end) {
                 clearInterval(timer)
                 callback()
             }



         }, 20)
     } else if (start > end) {
         // alert("a")
         obj.style[attr] = start + "px"
         let timer = setInterval(function () {
             // console.log(obj.style[attr])
             let x = obj.style[attr];
             obj.style[attr] = parseInt(x) - speed + "px"
             if (parseInt(x) <= end) {
                 clearInterval(timer)
                 callback()
             }



         }, 20)
     }
 }
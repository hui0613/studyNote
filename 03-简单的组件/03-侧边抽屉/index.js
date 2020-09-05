var showDrawerBtn = document.getElementById("showDrawer");
var left = document.getElementById("left");
var mask = document.getElementById("mask");

showDrawerBtn.onclick = function () {
  if (hasClassName(left, "left-open")) {
    removeClass(left, "left-open");
    removeClass(mask, "maskShow");
    addClassName(left, "left-hide");
    addClassName(mask, "maskHide");
    // 1100 ms 之后将遮罩曾设置成 none
    setTimeout(function () {
      mask.style.display = "none";
    }, 1100);
  } else if (!hasClassName(left, "left-open")) {
    removeClass(left, "left-hide");
    removeClass(mask, "maskHide");
    addClassName(left, "left-open");
    addClassName(mask, "maskShow");
    mask.style.display = "block";
  }
};

// 定义函数用于 给元素对象添加 类名
function addClassName(obj, className) {
  if (!hasClassName(obj, className)) {
    //元素不存在质地年类名，可以添加
    if (obj.className == "") {
      obj.className += className;
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
    addClassName(obj, className);
  } else if (hasClassName(obj, className)) {
    //指定元素一有指定类名，则删除该类名
    removeClass(obj, className);
  }
}

// 定义函数判断指定元素 是否已经包含指定类名，避免重复添加类名
function hasClassName(obj, className) {
  var objClassName = obj.className;
  let reg = new RegExp("\\b" + className + "\\b");
  if (reg.test(objClassName)) {
    return true;
  }
  return false;
}

//定义函数删除元素的类
function removeClass(obj,className) {
    if (hasClassName(obj,className)) {
        let reg = new RegExp("\\b" + className + "\\b");
        obj.className = obj.className.replace(reg,"");
    }
}

//添加或者删除类名循环切换
function toggleClassName(obj,className) {
    if (!hasClassName(obj,className)) {
        //指定元素不包含指定类名，则添加类名
        addClassName(obj,className);
    } else if (hasClassName(obj,className)) {
        //指定元素一有指定类名，则删除该类名
        removeClass(obj,className);
    }
}

// 定义函数判断指定元素 是否已经包含指定类名，避免重复添加类名
function hasClassName(obj,className) {
    var objClassName = obj.className;
    let reg = new RegExp("\\b" + className + "\\b");
    if (reg.test(objClassName)) {
        return true;
    }
    return false;
}

// 设置函数 通过添加或者删除类名来控制动画
function controlAnimation(obj,showClass,hideClass) {
    if (hasClassName(obj,showClass)) {
        removeClass(obj,showClass);
        obj.className += hideClass;
    } else {
        if (hasClassName(obj,hideClass)) {
            removeClass(obj,hideClass);
            obj.className += showClass;
        } else {
            obj.className += " " + showClass;
        }
    }
}

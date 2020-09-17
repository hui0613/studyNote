// 获取元素的样式

function getStyles(el, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return parseInt(window.getComputedStyle(el, null));
    } else {
      return window.getComputedStyle(el, null);
    }
  } else {
    if (prop) {
      return parseInt(el.currentStype[prop]);
    } else {
      return el.currentStype;
    }
  }
}

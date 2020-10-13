// 模板编译

function Compiler(vm) {
  this.$vm = vm;
  // 编译模板
  this.compiler(this.$vm.$el);
}

Compiler.prototype.compiler = function (el) {
  Array.from(el.childNodes).forEach((node) => {
    // 节点为元素节点
    if (this.isElementNode(node)) {
      // 节点为元素节点时，需要递归对子结点进行编译
      this.compiler(node);
      this.compilerElementNode(node);
    }
    // 节点为文本节点
    if (this.isTextNode(node)) {
      this.compilerTextNode(node);
    }
  });
};

/**
 * 编译元素节点
 * 1.找到所有的属性 attrbuties
 * 2. 判断指令属性
 * 3.处理指令
 *
 * @param {*} node
 */

Compiler.prototype.compilerElementNode = function (node) {
  //   console.log(node);
  //   console.log('编译元素节点');
  Array.from(node.attributes).forEach((attr) => {
    // 获取属性节点的属性名称和属性值
    const attrName = attr.name,
      value = attr.value;
    // 判断属性时候为 Vue 指令（从本质上来说，Vue指令也属于属性节点）
    if (this.isDiractive(attrName)) {
      if (attrName === 'v-text') {
        node.textContent = this.$vm.$data[value];

        //订阅事件， 数据发生变化时重现渲染DOM
        bus.$on(value, () => {
          node.textContent = this.$vm.$data[value];
        });
      }
      if (attrName === 'v-model') {
        node.value = this.$vm.$data[value];
        //订阅事件， 数据发生变化时重现渲染DOM
        bus.$on(value, () => {
          node.value = this.$vm.$data[value];
        });
        node.oninput = () => {
          this.$vm.$data[value] = node.value;
        };
      }
    }
  });
};

/**
 * 编译文本节点
 *
 * @param {*} node
 */
Compiler.prototype.compilerTextNode = function (node) {
  // 获取文本节点的内容
  let txt = node.textContent,
    // 定义正则获取 插值表达式中的变量
    reg = /\{\{(.+)\}\}/;
  if (reg.test(txt)) {
    const key = RegExp.$1.trim();
    // console.log(this.$vm);
    node.textContent = this.$vm.$data[key];

    bus.$on(key, () => {
      node.textContent = this.$vm.$data[key];
    });
  }
};

/**
 * 判断是否为元素节点
 *
 * @param {*} node
 */
Compiler.prototype.isElementNode = function (node) {
  return node.nodeType === 1;
};

//判断是否为文本节点
Compiler.prototype.isTextNode = function (node) {
  return node.nodeType === 3;
};

// 判断是否为属性节点
Compiler.prototype.isDiractive = function (attrName) {
  return attrName.startsWith('v-');
};

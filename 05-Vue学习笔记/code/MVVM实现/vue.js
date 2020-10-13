/**
 * 模拟  Vue
 *
 * 主要知识点：
 *  1. Object.defineProperty()  方法的使用
 *  2. 发布-订阅模式，进行数据劫持
 *  3. 模板编译 ==== 插值表达式/指令
 *
 * 初始化工作
 * 1.代理数据: 将 data 中的数据挂在到 vm 实例上,并设置 get/set
 * 2.数据劫持: 为 data 属性提供和 get/set,同时更新 DOM 元素
 * 3.编译模板: 处理视图中的DOM元素(插值表达式,属性指令)
 *
 * @param {*} options
 */

function Vue(options) {
  this.$options = options;
  //  获取 挂载 的 DOM 元素
  this.$el =
    typeof options.el === 'string'
      ? document.querySelector(options.el)
      : options.$el;
  this.$data = options.data;

  // 代理数据
  this.proxyData();

  /**
   * 数据劫持
   *
   * 便于数据改变树驱动视图的改变
   *
   * 新建一个构造函数实现
   */

  new Observer(this.$data);

  /**
   * 编译模板
   */

  new Compiler(this);
}

//代理数据，将 data 中的数据 挂载到 vm 实例上，并设置 get/set
Vue.prototype.proxyData = function () {
  Object.keys(this.$data).forEach((key) => {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        return this.$data[key];
      },
      set(val) {
        this.$data[key] = val;
      },
    });
  });
};

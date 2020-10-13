/**
 * 数据劫持
 */
function Observer(data) {
  this.$data = data;

  Object.keys(this.$data).forEach((key) => {
    this.defineReactive(this.$data, key, this.$data[key]);
  });
}

// 劫持 vm 实例中的 data 属性数据并设置 get/set，当视图数据改变时,需要通过 set 来改变数据
Observer.prototype.defineReactive = function (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get() {
      return value;
    },
    set(val) {
      // 减少不必要的更新
      if (val === value) return;
      value = val;

      // 数据发生变换，更新DOM，通过发布-订阅触发

      bus.$emit(key);
    },
  });
};

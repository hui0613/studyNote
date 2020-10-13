function EventEmitter() {
  // 存储所有的事件
  this.list = {};
}

// （订阅）注册事件 ->  保存事件名称和事件处理函数
EventEmitter.prototype.$on = function (eventType, handler) {
  //   if (!this.list[EventEmitter]) {
  //     this.list[EventEmitter] = [];
  //   }
  //   this.list[EventEmitter].push(handler);
  // 简化代码

  // 该类型的事件不存在时，以类型为键，新建一个空数组
  this.list[eventType] = this.list[eventType] || [];
  this.list[eventType].push(handler);
};

// （发布）触发事件 ->  取出对应的事件处理函数并且执行
EventEmitter.prototype.$emit = function (eventType, ...params) {
  if (this.list[eventType]) {
    this.list[eventType].forEach((handler) => {
      // 解决 this 指向问题
      handler.call(this, ...params);
    });
  }
};

let bus = new EventEmitter();

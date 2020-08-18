import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 在这里定义事件处理函数
    // 第一个参数为 state
    add(state,step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    }
  },
  actions: {
    addasync(context,step) {
      setTimeout(() => {
        context.commit('add',step)
      },1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      },1000);
    }
  },
  modules: {
  },
  getters: {
    showNum(state) {
      return '当前最新值:' + state.count
    }
  }
})

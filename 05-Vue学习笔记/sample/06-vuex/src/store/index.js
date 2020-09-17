import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    demo: "demo"
  },
  mutations: {
    getQuery(state, value) {
      state.demo = value;
      // console.log(state.demo);
    }
  }
});

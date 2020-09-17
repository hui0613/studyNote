import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    inputValue: "",
    nextId: 5,
    viewStatus: 'all'
  },
  mutations,
  actions: {
    getList(context) {
      axios.get('./list.json').then(res => {
        context.commit('initList',res.data)
      })
    },
  },
  modules: {
  },
  getters: {
    unDoneList(state) {
      return state.list.filter(e => e.done === false).length

    },
    getViewStatus(state) {
      return state.viewStatus
    },
    infoList(state) {
      if (state.viewStatus === 'all') {
        return state.list
      } else if (state.viewStatus === 'unDone') {
        return state.list.filter(e => e.done === false)
      } else if (state.viewStatus === 'done') {
        return state.list.filter(e => e.done === true)
      }
      return state.list
    }
  }
})

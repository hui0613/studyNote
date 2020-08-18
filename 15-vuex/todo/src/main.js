import Vue from 'vue'
import App from './App.vue'

// 1. 导入 ant-design-vue 组件库
// import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

import store from './store/index'


import { Button,Input,List,message,Checkbox } from 'ant-design-vue'



Vue.config.productionTip = false
// 3. 安装组件库
// Vue.use(Antd)
Vue.use(Button)
Vue.use(Input)
Vue.use(List)
Vue.use(Checkbox)
Vue.prototype.$message = message;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
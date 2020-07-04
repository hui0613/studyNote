const {
    add
} = require("./mathUtils")

//添加 css 依赖
require('../src/css/index.css')

/*引入 vue 进行 vue 开发 */
/*1. runntime-onle  ----> 代码中，不允许包含 template
    2. runntime-compiler  ----> 代码中可以有 template ，Vue 可以编译 template
    在开发时需要使用 runntime-compiler ，在 webpack.config.js 文件中配置，使其在加载 vue 时加载 runntime-compiler
 */
import Vue from 'vue'

import App from '../src/App.vue'

const app = new Vue({
    el: '#app',
    template: "<App></App>",
    components: {
        App,
    }
})

console.log(add(10, 20));
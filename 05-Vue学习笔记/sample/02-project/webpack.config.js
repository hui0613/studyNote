const path = require("path")

module.exports = {
    //设置入口文件
    entry: "./src/main.js",
    //设置出口文件
    output: {
        //使用 path 模块加载绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}
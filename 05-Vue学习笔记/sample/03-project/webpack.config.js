const path = require("path")

const htmlWebpackPlugin = require('html-webpack-plugin')

const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    //设置入口文件
    entry: "./src/main.js",
    //设置出口文件
    output: {
        //使用 path 模块加载绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //设置公共路径，所有 url 的路径前都添加该路径,在使用 html-webpack-plugin 打包 html 文件时，不需要配置该项
        // publicPath: 'dist/'
    },
    module: {
        //配置加载规则
        rules: [{
                //使用正则表达时表示需要加载的文件类型
                test: /\.css$/i,
                /*css-loader 只负责加载 css 文件，不会将文件添加到 DOM 中，需要使用 style-loader 来将 css 文件添加到 DOM 中
                webpack 在加载 loader 时， 加载顺序为从右往左
                */
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [{
                        loader: 'url-loader',
                        options: {
                            /*当使用的图片小于 limit 限制时，回将图片编译成 base64 格式文件
                            图片大小大于 limit 时，需要使用 file-loader 
                            */
                            limit: 2000,
                            /*加载图片时，默认会使用 hash 算法对文件名称进行重命名,
                    不利于后期图片的区分,
                    img/[name].[hash:8].[ext]   解释： img 为文件夹名称；
                    [name]  会使用图片原来的名称替换；
                    [hash:8]  截取 8 为hash 值
                    [ext]  后缀名
                    .  连接符
                    */
                            name: 'img/[name].[hash:8].[ext]'
                        },

                    },

                ],
            },
            {
                test: /\.js$/,
                /*使用 babel-loader 时会对所有的 js 文件进行转化，速度会很慢，使用 exclude 排除  node_module 文件夹中的js，不对此文件夹中
                的 js 文件转换 */
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/i,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        /**配置 加载 Vue 时 加载 runntime-compiler 
         * alias: 设置别名
         */
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            /**传入参数，在 html代码中自动添加 #app 标签 */
            template: 'index.html'
        }),
        new uglifyjsWebpackPlugin()
    ],
    /**配置 本地服务器 */
    devServer: {
        /**设置需要放在服务器上的文件目录 */
        contentBase: './dist',
        /**设置实时监听 */
        inline: true
    }
}
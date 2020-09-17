## 本地安装

**安装版本3.6.0，4.X 以上版本安装和配置有所变化**

前提条件：
+ 已安装 node  环境
+ 项目文件完成初始化     `npm init`

### 安装 
`npm install --save-dev webpack@3.6.0`

###  创建 `webpack` 配置文件 
 在项目更目录创建 `webpack` 配置文件 `webpack.config.js`

 ### 编辑配置文件

 ```
module.exports = {
    /*配置入口文件，一般情况下为 ./src/main.js 
    根据自己项目自行修改
    */
    entry: '',
    /*配置输出文件路径和文件名
    文件路径和文件名一般固定
    文件路径使用 path 模块动态回去绝对路径
    __dirname 表示当前文件所在文件夹的路径
    dist 为一般情况下打包文件的输出路径
    */
    output:{
        path:'path.resolve(__dirname,'dist'),
        filename:'bundle.js
    },
    module:{
        /*配置第三方 loader 的加载规则，用于处理 css 、图片等文件,使用 loader 前需要安装对应的 loader ，具体安装参考 webpack 官网*/
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
            }
        ],
    }
}
 ```

 ### 插件的安装及使用

 + **打包 html 的 插件**

    `npm install html-webpaclplugin --save-dev`

    修改 webpack.config.js 文件

+ **js 压缩插件**

    `npm install uglifyjs-webpack-plugin@1.1.1 --save-dev`

+ **搭建本地服务器**
    `npm install webpack-dev-server@2.9.1 --save-dev`


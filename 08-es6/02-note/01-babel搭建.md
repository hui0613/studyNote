## 初始化项目

`npm init`

## 创建 babel 配置文件

### 在项目根目录下创建 `.babelrc` 文件，项目所需要的 `babel` 配置都在这个文件中

## 安装 `bebal` 的预设

**建议将预设安装在本地**

`npm i babel-preset-env --save-dev`

## 配置 bable 预设

修改 .babelrc 文件

```
{
  //配置预设规则
  "presets": ["babel-preset-env"]
}
```

## 安装 `babel` 的脚手架

`npm i babel-cli --save-dev`

### 配置 babel-cli

修改 `package.json` 文件，在 `script`节点中添加以下代码

```
"build": "babel app.js -o babel.js"
```

命令行执行 `npm run build`

> app.js 时需要转义的 js 文件 ，babel.js 时目标文件。使用这种方式固定了转义文件和目标文件，使用起来不灵活。

```
"build":"bable src -d lib"
```

命令行执行 `npm run build`

> src 为需要转义文件所在的目录，也就是源码目录，lib 为目标文件的输出目录，目录不存在时，会自动在项目根目录下创建目录

## 使用 `babel-node` 执行转义后的 js 文件

修改 `package.json` 文件，在 `script`节点中添加以下代码

```
"script-name": "babel-node ./src/app.js"
```

命令行执行 `npm run script-name`

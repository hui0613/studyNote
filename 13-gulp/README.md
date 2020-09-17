## 全局安装 gulp-cli 命令行工具

`npm install gulp-cli -g`

## 本地安装

`npm install gulp -D`

## 在项目根目录下创建 gulpfile.js 文件，专门为 gulp 编写任务

#### 在 4.0 以前的版本中使用 `task` 方法来创建任务，4.0 以后的版本中只需要 使用 export 导出任务即可

**4.0 以前的版本**

```
const gulp = require('gulp);
<!-- 参数
第一个参数为任务名称
第二个参数是一个回调函数，任务的功能
 -->
gulp.task('hello',function(){
    console.log("hello world)
})
```

**4.0 以后的版本中**

```
// 定义一个任务, 参数为一个回调函数
function defaultTask(cb){
    cb()
}

exports.defaultTask = defalutTask
```

### 组合任务

`gulp` 提供 `series()` 和 `parallel()` 两个方法来组合任务,

- `series()` 方法组合的任务会按顺序执行,执行顺序为从左往右

  ```
    const { series } = require('gulp');
    function transpile(cb) {
        // body omitted
        cb();
    }

    function bundle(cb) {
        // body omitted
        cb();
    }

    exports.build = series(transpile, bundle);
  ```

* `parallel()` 组合的方法会尽可能的并发执行

  ```
    const { parallel } = require('gulp');
    function javascript(cb) {
        // body omitted
        cb();
    }
    function css(cb) {
        // body omitted
        cb();
    }
  exports.build = parallel(javascript, css);
  ```

- `series()` 和 `parallel()` 方法可以进行嵌套

  ```
    const { series, parallel } = require('gulp');
    function clean(cb) {
        // body omitted
        cb();
    }

    function cssTranspile(cb) {
        // body omitted
        cb();
    }
    function cssMinify(cb) {
        // body omitted
        cb();
    }

    function jsTranspile(cb) {
        // body omitted
        cb();
    }

    function jsBundle(cb) {
        // body omitted
        cb();
    }

    function jsMinify(cb) {
        // body omitted
        cb();
    }

    function publish(cb) {
        // body omitted
        cb();
    }

    exports.build = series(
        clean,
        parallel(cssTranspile, series(jsTranspile, jsBundle)),
        parallel(cssMinify, jsMinify),
        publish
    );

  ```

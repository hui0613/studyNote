const { series, src, dest, watch } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function defaultTask() {
  return (
    src("./src/index.js")
      .pipe(
        // 在管道中使用插件
        babel({
          presets: ["@babel/env"],
        })
      )
      // 在管道中添加文件
      .pipe(src("./src/detail.js"))
      .pipe(uglify())
      .pipe(dest("./dist/"))
  );
}

watch("./src/*.js", defaultTask);

// exports.build = series(task, defaultTask);

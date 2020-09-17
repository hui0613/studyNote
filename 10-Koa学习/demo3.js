const Koa = require("koa");
const Router = require("koa-router");
// 引入 koa-viewa
var views = require("koa-views");

const app = new Koa();
const router = new Router();

//配置模板引擎
app.use(
  views("views", {
    extension: "ejs",
  })
);

app.use(async (ctx, next) => {
  ctx.state = {
    name: "zs",
  };
  await next();
});

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "标题",
  });
});

// 启动路由
app.use(router.routes(), router.allowedMethods());
app.listen(3000);

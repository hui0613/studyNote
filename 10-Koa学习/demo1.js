const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// 获取get传值
router.get("/demo1", (ctx, next) => {
  // 从 ctx 中获取 get 传值
  console.log(ctx.query);
  ctx.body = "hello world 首页";

  // 启动 ctx 中 request 获取值
  //   console.log(ctx.request);
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

/**
 * post 传值使用 koa-bodyparser 处理并获取数据
 */

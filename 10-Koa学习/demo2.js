const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// 动态路由
// 动态路由中可以传入多个值
router.get("/demo2/:aid/:cid", (ctx, next) => {
  // 获取动态路由的值
  console.log(ctx.params);
  ctx.body = "动态路由";
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);

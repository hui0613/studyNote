const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "hello world 首页";
});
// 启动路由
app.use(router.routes(), router.allowedMethods());
app.listen(3000);

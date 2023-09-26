const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const logger = require("./utils/logger");
//引入mock路由
const mockList = require("./mock/index");

// 初始化 Koa 应用实例
const app = new Koa();
const router = new Router();

// 注册mock路由
mockList.forEach((item) => {
  const { url, method, response } = item;
  // 类似于 router.get or router.post

  // context => ctx
  // ctx.url    // 相当于 ctx.request.url
  // ctx.body   // 相当于 ctx.response.body
  // ctx.status // 相当于 ctx.response.status
  router[method](url, (ctx) => {
    ctx.body = response(ctx);
  });
});

// 注册中间件
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

// 注册自定义中间件
app.use(logger());

app.listen(8111, () => {
  console.log("vue_demo_koa 启动成功！");
});

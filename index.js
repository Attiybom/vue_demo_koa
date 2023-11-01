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
    if (ctx.type === "text/html") {
      ctx.status = 200;
      ctx.body = '<!DOCTYPE html><html>...</html>';
    };
  });
});

// 注册中间件
app.use(cors());
app.use(bodyParser());

// 注册自定义中间件
app.use(logger());

app.use(router.routes());



// 洋葱模型
// 第一个中间件：处理请求日志
// app.use(async (ctx, next) => {
//   console.log('Received a request');
//   console.log('df')
//   await next();
//   console.log('Sent a response');
//   console.log('fd')
// });

// // 第二个中间件：处理请求体
// app.use(async (ctx, next) => {
//   // 模拟异步操作（例如从数据库中获取数据）
//   setTimeout(async () => {
//     console.log('das')
//     await next();
//     console.log('czx')
//   }, 1000);
// });

// // 第三个中间件：添加响应头
// app.use(async (ctx, next) => {
//   ctx.set('X-Powered-By', 'Koa');
//   console.log('adad')
//   await next();
//   console.log('asq')
// });



app.listen(8111, () => {
  console.log("vue_demo_koa 启动成功！");
});

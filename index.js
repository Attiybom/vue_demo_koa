const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const path = require('path');
const fs = require('fs');

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

const newSend = require('koa-send');

router.get('/api/pagFile', async (ctx) => {
  const filePath = 'like.pag'; // 这里不需要 path.join，因为文件在当前目录
  console.log(`Trying to send file from path: ${filePath}`);
  // ctx.attachment(filePath); // 如果不需要浏览器直接下载文件，这行可以注释掉
  await send(ctx, filePath); // 使用 koa-send 发送文件
});

// 尝试同步读取文件以确认其存在
const filePath = path.join(__dirname, 'like.pag');
try {
  const data = fs.readFileSync(filePath);
  console.log('File read successfully', data.length);
} catch (error) {
  console.error('Error reading file', error);
}

// 注册中间件
app.use(cors());
app.use(bodyParser());

// 注册自定义中间件
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());



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


// // 托管静态资源
// const koaStatic = require('koa-static');
// // 加载pag图片地址
// const staticPath = './data/pag';

// app.use(koaStatic(
//   path.join( __dirname,  staticPath)
// ));

const send = require('koa-send');

router.get('/api/pagFile', async (ctx) => {
  // 假设文件位于 data/pag/like.pag
  const filePath = path.join(__dirname, 'data/pag/like.pag');
  ctx.attachment(filePath);
  await send(ctx, filePath);
});

router.get('/api/removeFromShelves', async (ctx) => {
  ctx.throw(500, '服务器错误')
  // 假设文件位于 data/pag/like.pag
  // const filePath = path.join(__dirname, 'data/pag/like.pag');
  // ctx.attachment(filePath);
  // await send(ctx, filePath);
});

app.listen(8111, () => {
  console.log("vue_demo_koa 启动成功！");
});

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const path = require("path");
const fs = require("fs");

const static = require("koa-static");
const { koaBody } = require("koa-body");

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
      ctx.body = "<!DOCTYPE html><html>...</html>";
    }
  });
});

router.get("/api/pagFile", async (ctx) => {
  const filePath = "like.pag"; // 这里不需要 path.join，因为文件在当前目录
  console.log(`Trying to send file from path: ${filePath}`);
  await send(ctx, filePath); // 使用 koa-send 发送文件
});

// 尝试同步读取文件以确认其存在
const filePath = path.join(__dirname, "like.pag");
try {
  const data = fs.readFileSync(filePath);
  // console.log("File read successfully", data.length);
} catch (error) {
  console.error("Error reading file", error);
}

// 注册中间件
app.use(cors());
app.use(bodyParser());

// 注册自定义中间件
app.use(logger());

// 托管静态资源
app.use(static(path.join(__dirname, "/uploads")));

//
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      uploadDir: path.join(__dirname, "uploads"), // 上传文件的存储路径
      keepExtensions: true, // 保留文件扩展名
      // onFileBegin: (name, file) => {
      //   const dir = path.resolve(__dirname, "uploads");

      //   if (!fs.existsSync(dir)) {
      //     fs.mkdirSync(dir);
      //   }
      //   if (name == "img") {
      //     file.filepath = `${dir}/${file.newFilename}`;
      //   } else if (name == "video") {
      //     file.filepath = `${dir}/${file.newFilename}`;
      //   }
      // },
    },
  })
);

router.post("/api/uploadImgs", async (ctx) => {
  console.log("files", ctx.request.files); // 尝试打印看看是否有文件

  const newFilename = ctx.request.files.newFilename;
  if (newFilename) {
    console.log("newFilename", newFilename);
  }

  ctx.body = {
    message: "File uploaded successfully",
    fileName: newFilename,
  };
});

router.post("/api/uploadTest", (ctx) => {
  // 如果不知道键的名字，你可以这样获取所有上传的文件信息
  const files = ctx.request.files;
  let fileData = {};

  for (let key in files) {
    if (files.hasOwnProperty(key)) {
      // fileData[key]是对应每个上传文件的信息对象
      fileData[key] = {
        filepath: files[key].filepath,
        size: files[key].size,
        mimetype: files[key].mimetype,
        originalFilename: files[key].originalFilename,
      };
    }
  }

  // 假设每次请求只上传一个文件，我们只需要获取第一个文件
  const fileKey = Object.keys(files)[0]; // 获取第一个上传文件的键名
  const file = files[fileKey]; // 获取第一个上传文件的文件信息对象
  // 生成文件访问的URL
  const fileUrl = `http://localhost:8111/${path.basename(
    file.filepath
  )}`;

  ctx.response.body = {
    errno: 200, // 注意：值是数字，不能是字符串
    data: {
      a: 'aa', // 奇怪数据
      v: 'vv', // 奇怪数据
      dsa: 'dsa', // 奇怪数据
      trueData: {
        url: fileUrl, // 图片 src ，必须
        // alt: "上传的图片", // 图片描述文字，非必须
        // href: fileUrl, // 图片的链接，非必须
      }
    },
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8111, () => {
  console.log("8111 启动成功！");
});

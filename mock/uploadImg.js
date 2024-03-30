const path = require('path');

module.exports = [
  // 测试用例
  {
    url: "/api/uploadImg",
    method: "post",
    async response(ctx) {
      // const file = ctx.request.files.file; // 获取上传文件
      // const basename = path.basename(file.path); // 获取上传文件的文件名

      if (ctx.request.files.file) {
        console.log('files', files)
      }

      console.log('context', ctx)
      // console.log('file', file)

      return {
        errno: 200, // 注意：值是数字，不能是字符串
        data: {
          // url: `http://localhost:8111/uploads/${basename}`, // 图片 src ，必须
          alt: "uploaded image", // 图片描述文字，非必须
          // href: "zzz", // 图片的链接，非必须
        },
      };
    },
  },
];

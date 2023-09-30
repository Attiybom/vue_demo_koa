module.exports = [
  {
    url: "/api/fileUpload",
    method: "post", // 模拟使用
    response() {
      return {
        errno: 0,
        data: {},
        msg: "文件上传成功！",
      };
    },
  },
];

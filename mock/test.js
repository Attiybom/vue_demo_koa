const Mock = require("mockjs");
const options = require("../data/cascaderData");

module.exports = [
  // 获取级联数据
  {
    url: "/api/test1",
    method: "get",
    response(ctx) {
      const { url, query = {} } = ctx;
      return {
        errno: 200,
        msg: "success",
        data: {
          list: options,
          total: options.length,
          msg: "test1请求成功！",
        },
      };
    },
  },
  // 测试用例
  {
    url: "/api/test2",
    method: "get",
    response() {
      return {
        errno: 500,
        data: {
          msg: "test2请求成功！",
        },
        msg: "success",
      };
    },
  },
  // 返回错误
  {
    url: "/api/test3",
    method: "get",
    response() {
      return {
        errno: 500,
        data: {
          msg: "下架失败",
        },
        msg: "error",
      };
    },
  },
  // 测试用例4
  {
    url: "/api/test4",
    method: "get",
    response() {
      return {
        errno: 200,
        data: {
          msg: "上架成功",
        },
        msg: "success",
      };
    },
  },
];

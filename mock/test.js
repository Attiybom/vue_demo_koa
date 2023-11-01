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
        errno: 0,
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
        errno: 0,
        data: {
          msg: "test2请求成功！",
        },
        msg: "success",
      };
    },
  },
];

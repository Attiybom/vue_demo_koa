const options = require("../data/tableData.js");

module.exports = [
  // 获取级联数据
  {
    url: "/api/tableList",
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
];

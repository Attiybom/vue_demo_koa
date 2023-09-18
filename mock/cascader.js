const Mock = require("mockjs");
const options = require("../data/cascaderData");

const Random = Mock.Random;

// 过滤下拉框数据
// function getCascaderData(param) {
//   switch (param) {
//     case '0':
//       return options[0];
//     case "1":
//       return options[1];
//     default:
//       return options;
//   }
// }

//
module.exports = [
  // 测试用例
  {
    url: "/api/cascaderTest",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          msg: "级联数据模拟请求成功！",
        },
        msg: "success",
      };
    },
  },
  // 获取级联数据
  {
    url: "/api/cascaderList",
    method: "get",
    response(ctx) {
      const { url, query = {} } = ctx;
      // const { type } = query;
      // console.log('type', type)
      // const res = getCascaderData(type);
      // console.info('res', res)
      return {
        errno: 0,
        msg: 'success',
        data: {
          list: options,
          total: options.length
        }
      }
    },
  },
];

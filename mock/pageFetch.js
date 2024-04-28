const Mock = require('mockjs');

function generatePageData() {
  const data = Mock.mock({
    'list|10': [
      {
        'value|+1': 1,
        'label': '@name',
        'id|+1': '@integer(1000, 9999)',
      }
    ],
    'total': 100
  });

  return data;
}


module.exports = [
  {
    url: "/api/pageFetch",
    method: "get",
    response(ctx) {
      console.log('ctx', ctx)
      console.log('ctx.query', ctx.query)

      // console.log('ctx.req', ctx?.req)
      // console.log('ctx.res', ctx?.res)
      return {
        errno: 0,
        data: {
          msg: "success",
          data: generatePageData(),
        },
      };
    },
  },
];

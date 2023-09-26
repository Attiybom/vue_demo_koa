const options = require("../data/dialogData");

module.exports = [
  {
    url: "/api/dialog",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          msg: "dialog-data,success",
          list: options,
          total: options.length,
        },
      };
    },
  },
];

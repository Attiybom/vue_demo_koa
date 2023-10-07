const tabData = require("../data/tabData");

module.exports = [
  {
    url: "/api/tabs",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          tabData,
        },
      };
    },
  },
];

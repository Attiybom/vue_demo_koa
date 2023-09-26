const Mock = require("mockjs");

const Random = Mock.Random;

const options = {
  btnList1: [
    {
      id: 1,
      name: "xiaomi1",
      text: "我是xiaomi1",
      src: Random.image("300x343", Random.color(), "xiaomi1"),
    },
    {
      id: 2,
      name: "xiaohong1",
      text: "我是xiaohong1",
      src: Random.image("300x343", Random.color(), "xiaohong1"),
    },
    {
      id: 3,
      name: "xiaohua1",
      text: "我是xiaohua1",
      src: Random.image("300x343", Random.color(), "xiaohua1"),
    },
  ],
  btnList2: [
    {
      id: 4,
      name: "xiaomi2",
      text: "我是xiaomi2",
      src: Random.image("300x343", Random.color(), "xiaomi2"),
    },
    {
      id: 5,
      name: "xiaohong2",
      text: "我是xiaohong2",
      src: Random.image("300x343", Random.color(), "xiaohong2"),
    },
    {
      id: 6,
      name: "xiaohua2",
      text: "我是xiaohua2",
      src: Random.image("300x343", Random.color(), "xiaohua2"),
    },
  ],
  btnList3: [
    {
      id: 7,
      name: "xiaomi3",
      text: "我是xiaomi3",
      src: Random.image("300x343", Random.color(), "xiaomi3"),
    },
    {
      id: 8,
      name: "xiaohong3",
      text: "我是xiaohong3",
      src: Random.image("300x343", Random.color(), "xiaohong3"),
    },
    {
      id: 9,
      name: "xiaohua3",
      text: "我是xiaohua3",
      src: Random.image("300x343", Random.color(), "xiaohua3"),
    },
  ],
};

module.exports = options;

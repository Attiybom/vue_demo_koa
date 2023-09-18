const optionsA =  [
  {
    value: 1,
    label: "东南",
    children: [
      {
        value: 2,
        label: "上海",
        children: [
          { value: 3, label: "普陀" },
          { value: 4, label: "黄埔" },
          { value: 5, label: "徐汇" },
        ],
      },
      {
        value: 7,
        label: "江苏",
        children: [
          { value: 8, label: "南京" },
          { value: 9, label: "苏州" },
          { value: 10, label: "无锡" },
        ],
      },
      {
        value: 12,
        label: "浙江",
        children: [
          { value: 13, label: "杭州" },
          { value: 14, label: "宁波" },
          { value: 15, label: "嘉兴" },
        ],
      },
    ],
  },
  {
    value: 17,
    label: "西北",
    children: [
      {
        value: 18,
        label: "陕西",
        children: [
          { value: 19, label: "西安" },
          { value: 20, label: "延安" },
        ],
      },
      {
        value: 21,
        label: "新疆维吾尔族自治区",
        children: [
          { value: 22, label: "乌鲁木齐" },
          { value: 23, label: "克拉玛依" },
        ],
      },
    ],
  },
]

const optionsB = [
  {
    value: 1,
    label: 'Asia',
    children: [
      {
        value: 2,
        label: 'China',
        children: [
          { value: 3, label: 'Beijing' },
          { value: 4, label: 'Shanghai' },
          { value: 5, label: 'Hangzhou' },
        ],
      },
      {
        value: 6,
        label: 'Japan',
        children: [
          { value: 7, label: 'Tokyo' },
          { value: 8, label: 'Osaka' },
          { value: 9, label: 'Kyoto' },
        ],
      },
      {
        value: 10,
        label: 'Korea',
        children: [
          { value: 11, label: 'Seoul' },
          { value: 12, label: 'Busan' },
          { value: 13, label: 'Taegu' },
        ],
      },
    ],
  },
  {
    value: 14,
    label: 'Europe',
    children: [
      {
        value: 15,
        label: 'France',
        children: [
          { value: 16, label: 'Paris' },
          { value: 17, label: 'Marseille' },
          { value: 18, label: 'Lyon' },
        ],
      },
      {
        value: 19,
        label: 'UK',
        children: [
          { value: 20, label: 'London' },
          { value: 21, label: 'Birmingham' },
          { value: 22, label: 'Manchester' },
        ],
      },
    ],
  },
  {
    value: 23,
    label: 'North America',
    children: [
      {
        value: 24,
        label: 'US',
        children: [
          { value: 25, label: 'New York' },
          { value: 26, label: 'Los Angeles' },
          { value: 27, label: 'Washington' },
        ],
      },
      {
        value: 28,
        label: 'Canada',
        children: [
          { value: 29, label: 'Toronto' },
          { value: 30, label: 'Montreal' },
          { value: 31, label: 'Ottawa' },
        ],
      },
    ],
  },
]


module.exports = [optionsA, optionsB]

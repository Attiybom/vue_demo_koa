const cascader = require('../mock/cascader')
const dialog = require("../mock/dialog");
const fileUpload = require("../mock/fileUpload");

const mockList = [...cascader, ...dialog, ...fileUpload];

module.exports = mockList

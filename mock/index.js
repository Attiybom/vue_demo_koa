const test = require("../mock/test");
const cascader = require("../mock/cascader");
const dialog = require("../mock/dialog");
const fileUpload = require("../mock/fileUpload");
const tabs = require("../mock/tabs");
const uploadImg = require("../mock/uploadImg");

const mockList = [...test, ...cascader, ...dialog, ...fileUpload, ...tabs, ...uploadImg];

module.exports = mockList;

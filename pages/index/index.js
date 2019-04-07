//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    time: util.formatTime(new Date()),
    motto: 'Hello World'
  },
  onLoad: function () {
    
  }
})

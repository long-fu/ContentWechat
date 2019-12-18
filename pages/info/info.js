// pages/info/info.js

const util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    content_id: null,
    info_data: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("联系人id",options.content_id)
    var that = this

    that.setData({
      content_id: options.content_id
    })

    var body = { "content_id": this.data.content_id }

    var url = util.root_url + "get_content_info"
    wx.request({
      url: url,
      data: body,
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        that.setData({
          info_data: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  delete_index: function(){
    
    var body = {"content_id": this.data.content_id}
    var url = util.root_url + "delete_content"
    wx.request({
      url: url,
      data: body,
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        
        var pages = getCurrentPages()
        var pr_page = pages[pages.length - 2]
        console.log(pr_page)

        wx.navigateBack({
          delta: 1
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  edit_info: function () {
    console.log("去到编辑界面")
    
    wx.setStorageSync('user_info', this.data.info_data)
    
    wx.navigateTo({
      url: '../edit/edit?is_add=false',
    })
  },
  calling_phone:function(e){
    
    var phone_number = e.target.dataset.phone
    console.log("打电话", phone_number)
    
    wx.makePhoneCall({
      phoneNumber: phone_number, //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  },


})
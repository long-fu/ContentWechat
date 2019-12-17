// pages/content/content.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (app.globalData.openid) {
      
      // that.openid = app.globalData.openid
      that.setData({
        openid: app.globalData.openid
      })
      var open_id = app.globalData.openid
      var body = { "open_id": open_id }
      wx.request({
        url: 'http://127.0.0.1:8888/get_content_index_list',
        data: body,
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log("获取用户数据0")
        },
        fail: function (res) { },
        complete: function (res) { },
      })


    } else {

      app.openIdReadyCallback = res => {
        that.setData({
          openid: res.data.openid
        })

        var open_id = app.globalData.openid
        var body = { "open_id": open_id }

        wx.request({
          url: 'http://127.0.0.1:8888/get_content_index_list',
          data: body,
          header: {},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            that.setData({
              array: res.data
            })
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    }

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

  calling_phone:function(){
    wx.makePhoneCall({
      phoneNumber: "18682435851", //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  
  }
  ,
  add_phone_handler: function() {
    console.log("添加号码本")
    wx.navigateTo({
      url: '../edit/edit?is_add=true',
    })
  }
})
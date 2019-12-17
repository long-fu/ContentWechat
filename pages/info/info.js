// pages/info/info.js
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
    wx.request({
      url: 'http://172.20.10.2:8888/get_content_info',
      data: body,
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log("获取联系人详细信息", res.data)
        // that.data = res.data
        that.setData({
          info_data: res.data
        })
        console.log("重新给值",that.data)
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
    console.log("删除此条数据")
    var body = {"content_id": this.data.content_id}
    wx.request({
      url: 'http://172.20.10.2:8888/delete_content',
      data: body,
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log("删除一个联系人成功", res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  calling_phone:function(e){
    console.log("点击拨打电弧",e)
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
  }

})
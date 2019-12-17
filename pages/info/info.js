// pages/info/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image:"../../resource/image/touxiang.jpeg",
    name:"我是谁",
    array: [
      {phone:"1868225123"},
      {phone:"1868225123"}
  ],
    remark: "我就是备注"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  delete: function(){
    console.log("删除此条数据")
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
  }

})
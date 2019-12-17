// pages/edit/edit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // false 增加 true 编辑
    is_add:true,
    info_data: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log("设置参数", options.is_add)
    var that = this
    if (options.is_add) {
      that.setData({
        type: options.is_add,
        info_data : {
          nike_name: "",
          avatar_url: "",
          remarks: "",
          array: [{ type: "",phone_number:""}]
        }
      })
    } else {

    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  
  save_info_data:function(){
    console.log("保存联系人")
  },

  bindFormSubmit: function (e) {
    console.log("开始提交数据")
    console.log(e.detail.value)
  },
  add_new_phone:function() {
    console.log("新增电话")
    var that = this
    var info_data = that.data.info_data
    var new_number = { type: "", phone_number: "" }
    info_data.array.push(new_number)

    console.log("老的数据", info_data)
    that.setData({
      info_data: info_data
    });
  }
});

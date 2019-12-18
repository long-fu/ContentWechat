//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

        var code = res.code;
        var appid = 'wxbfcc58c38ba0d08b';	//小程序的appid
        var secret = 'e809c7cb5772bf4e8d073acdca0d4be1';	//小程序的secret
        var json_obj = { "code": code, "appid": appid, "secret": secret }
        var str_json = JSON.stringify(json_obj, null, "\t")
        var that = this
        wx.request({
          url: 'http://127.0.0.1:8888/get_open_id',
          data: str_json,
          header: {},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log("启动获取openid成功",res)
            that.globalData.isRegister = res.data.is_register
            that.globalData.openid = res.data.openid
            that.globalData.session_key = res.data.session_key

            if (that.openIdReadyCallback) {
              console.log("回调openid注册成功",res)
              that.openIdReadyCallback(res)
            }
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })

    // 获取用户信息
    wx.getSetting({    
      success: res => {
        if (res.authSetting['scope.userInfo']) { // 验证权限
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     var that = this
          //     // 可以将 res 发送给后台解码出 unionId
          //     that.globalData.userInfo = res.userInfo
          //     wx.request({
          //       url: 'http://127.0.0.1:8888/register',
          //       data: res.userInfo,
          //       header: {},
          //       method: 'POST',
          //       dataType: 'json',
          //       responseType: 'text',
          //       success: function(res) {},
          //       fail: function(res) {},
          //       complete: function(res) { },
          //     })

          //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //     // 所以此处加入 callback 以防止这种情况
          //     if (that.userInfoReadyCallback) {
          //       that.userInfoReadyCallback(res)
          //     }
          //   }
          // })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
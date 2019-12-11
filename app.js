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
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("登录部分",res)

        var code = res.code;
        var appid = 'wxbfcc58c38ba0d08b';	//小程序的appid
        var secret = 'e809c7cb5772bf4e8d073acdca0d4be1';	//小程序的secret
        var json_obj = { "code": code, "appid": appid, "secret": secret}
        var str_json = JSON.stringify(json_obj, null, "\t")
        console.log("参数", str_json)
        wx.request({
          url: 'http://127.0.0.1:8888/get_open_id',
          data: str_json,
          header: {},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) {
            console.log("注册结果", res)
          },
        })
        // wx.request({
        //   url: 'http://127.0.0.1:8888/getOpenId',
        //   data: str_json,
        //   header: {},
        //   method: 'GET',
        //   dataType: 'json',
        //   responseType: 'text',
        //   success: function (res) {
        //     console.log("请求成功",res)
        //    },
        //   fail: function (res) {
        //     console.log("请求失败", res)
        //    },
        //   complete: function (res) { 
        //     console.log("请求完成", res)
        //   },
        // })
        // wx.request({
        //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code,
        //   header: { 'content-type': 'application/json' },
        //   success: function (res) {
        //     console.log(res);	// 返回的数据
        //     console.log("获取openid",res.data.openid);	// openid
        //   }
        // })


      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          console.log("获取用户信息")
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 用户数据
              console.log("用户数据成功",res.userInfo)

              wx.request({
                url: 'http://127.0.0.1:8888/register',
                data: res.userInfo,
                header: {},
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {
                  console.log("注册结果", res)
                },
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

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

  // 下载多张图片接口（保证图片下载顺序）
  downloadFileArrayImgs: function(arrayImgs) {
    console.log(1);
    wx.showLoading({
      title: '图片下载中...',
      mask: true,
    });
    console.log(2);
    
    return new Promise((resolve, reject) => {
      console.log(3);

      let temporary_arrayImgs = []; //存储下载后的临时图片地址

      let index = 0; //下载的图片索引值

      // 需要递归循环执行下载图片且确保下载图片的顺序
      (function downloadFileFunction() {
        console.log(4);
        console.log(`数组值为：${arrayImgs[index]}`);

        wx.downloadFile({
          url: arrayImgs[index],
          success: function(res) {
            wx.hideLoading();

            if (res.statusCode === 200) {
              console.log(`下载的图片地址：${res.tempFilePath}`);
              temporary_arrayImgs.push(res.tempFilePath);
              console.log(5);

              if ((index + 1) == arrayImgs.length) {
                // 图片已经下载完成，返回图片数组结果
                resolve(temporary_arrayImgs);
                console.log(6);

              } else {
                // 图片未下载完成，下载下一张图片
                index++;
                downloadFileFunction();
                console.log(7);
                
              }

            } else {
              wx.showToast({
                title: '图片下载失败！',
                icon: 'none',
                duration: 2000,
                success: function() {
                  reject();
                }
              })
            }
          }

          
        })



      })() //自调用函数写法



    })
  },


  globalData: {
    userInfo: null
  }

  
})
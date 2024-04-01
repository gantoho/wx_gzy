// app.js
App({
  capsuleTop: wx.getMenuButtonBoundingClientRect().top,
  capsuleHeight: wx.getMenuButtonBoundingClientRect().height,
  pxRpx(value, to = "rpx") {
    if (to === "px") {
      return value * (wx.getSystemInfoSync().windowWidth / 750)
    } else if (to === "rpx") {
      return value / wx.getSystemInfoSync().windowWidth * 750
    } else {
      return "第二个参数只能为px或rpx"
    }
  },
  onLaunch() {
    const updateManager = wx.getUpdateManager()
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版已经准备就绪，立即重启？',
        complete: (res) => {
          if (res.cancel) {
            console.log("稍后重启")
          }
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
  }
})

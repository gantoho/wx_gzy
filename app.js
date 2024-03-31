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
  }
})

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capsuleTop: 0,
    capsuleHeight: 0,
    headHeight: 0,
    swiperList: [
      {
        id: "0",
        imgUrl: "http://files.ganto.cn/files/56.jpg",
      },
      {
        id: "1",
        imgUrl: "http://files.ganto.cn/files/10.jpg",
      },
      {
        id: "2",
        imgUrl: "http://files.ganto.cn/files/130.jpg",
      },
      {
        id: "3",
        imgUrl: "http://files.ganto.cn/files/40.jpg",
      }
    ],
  },
  back() {
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const appInstance = getApp()
    this.setData({
      capsuleTop: appInstance.capsuleTop,
      capsuleHeight: appInstance.capsuleHeight,
      headHeight: appInstance.capsuleTop + appInstance.capsuleHeight + appInstance.pxRpx(15, "px")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
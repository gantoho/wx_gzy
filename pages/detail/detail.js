const { http } = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capsuleTop: 0,
    capsuleHeight: 0,
    headHeight: 0,
    detail: {}
  },
  back() {
    wx.navigateBack()
  },
  async getGoodsDetail(id) {
    const token = wx.getStorageSync("token")
    if (!token) {
      wx.showToast({
        title: '请先登录',
      })
      return
    }
    const ret = await http("https://api.ganto.cn/getGoodsDetail", "GET", {
      id,
    },{
      token
    })
    this.setData({
      detail: ret.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getGoodsDetail(options.id)
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
const { http } = require("../../utils/request")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    dialogShow: false,
    username: "",
    usernameErr: false,
    password: "",
    passwordErr: false,
  },
  go_update() {
    this.onLoad()
  },
  toLogin() {
    this.setData({
      dialogShow: true
    })
  },
  async login() {
    const { username, password } = this.data
    const usernameRegex = /^[a-zA-Z0-9_-]{3,18}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_]).{6,20}$/
    if (!usernameRegex.test(username)) {
      wx.showToast({
        title: '用户名格式有误',
        icon: "error"
      })
      this.setData({
        usernameErr: true
      })
      return
    }
    this.setData({
      usernameErr: false
    })

    if (!passwordRegex.test(password)) {
      wx.showToast({
        title: '密码格式有误',
        icon: "error"
      })
      this.setData({
        passwordErr: true
      })
      return
    }
    this.setData({
      passwordErr: false
    })
    
    await this.loginApi(this.data.username, this.data.password)

    if (!this.data.user.data) {
      wx.showToast({
        title: this.data.user.message,
        icon: "error"
      })
      return
    }
    wx.showToast({
      title: '登录成功',
    })
    wx.setStorageSync("user", this.data.user)
    this.setData({
      dialogShow: false
    })
  },
  async loginApi(username, password) {
    const ret = await http("https://api.ganto.cn/login", "POST", {
      username,
      password
    })
    this.setData({
      user: ret
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      user: wx.getStorageSync("user")
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
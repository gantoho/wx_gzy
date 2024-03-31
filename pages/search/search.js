Page({

  /**
   * 页面的初始数据
   */
  data: {
    capsuleTop: 0,
    capsuleHeight: 0,
    headHeight: 0,
    rawGoodsList: [
      {
        id: "0",
        imgUrl: "http://files.ganto.cn/files/81.jpg",
        title: "商品名称",
        price: "25",
        show: false
      },
      {
        id: "1",
        imgUrl: "http://files.ganto.cn/files/19.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "2",
        imgUrl: "http://files.ganto.cn/files/49.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "3",
        imgUrl: "http://files.ganto.cn/files/8.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "4",
        imgUrl: "http://files.ganto.cn/files/57.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "5",
        imgUrl: "http://files.ganto.cn/files/61.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "6",
        imgUrl: "http://files.ganto.cn/files/28.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "7",
        imgUrl: "http://files.ganto.cn/files/50.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      },
      {
        id: "8",
        imgUrl: "http://files.ganto.cn/files/77.jpg",
        title: "商品名称商品名称商品名称",
        price: "25",
        show: false
      }
    ],
    showGoodsList: []
  },
  back() {
    wx.navigateBack()
  },
  handleInput(e) {
    let showGoodsList = []
    if (e.detail.value.trim().length === 0) {
      showGoodsList = []
    } else {
      showGoodsList = this.data.rawGoodsList.map(item => {
        if (item.title.indexOf(e.detail.value) !== -1) {
          return {...item, show: true}
        }
        return {...item, show: false}
      })
    }
    
    this.setData({
      showGoodsList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const appInstance = getApp()
    this.setData({
      capsuleTop: appInstance.capsuleTop,
      capsuleHeight: appInstance.capsuleHeight,
      headHeight: appInstance.capsuleTop + appInstance.capsuleHeight + appInstance.pxRpx(80 + 24 + 15, "px")
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
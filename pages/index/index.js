Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      {
        id: "0",
        imgUrl: "http://files.ganto.cn/files/56.jpg",
        jumpPath: "/pages/detail/detail"
      },
      {
        id: "1",
        imgUrl: "http://files.ganto.cn/files/10.jpg",
        jumpPath: "/pages/detail/detail"
      },
      {
        id: "2",
        imgUrl: "http://files.ganto.cn/files/130.jpg",
        jumpPath: "/pages/detail/detail"
      }
    ],
    goodsList: [
      {
        id: "0",
        imgUrl: "http://files.ganto.cn/files/81.jpg",
        title: "商品名称",
        price: "25"
      },
      {
        id: "1",
        imgUrl: "http://files.ganto.cn/files/19.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "2",
        imgUrl: "http://files.ganto.cn/files/49.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "3",
        imgUrl: "http://files.ganto.cn/files/8.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "4",
        imgUrl: "http://files.ganto.cn/files/57.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "5",
        imgUrl: "http://files.ganto.cn/files/61.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "6",
        imgUrl: "http://files.ganto.cn/files/28.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "7",
        imgUrl: "http://files.ganto.cn/files/50.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      },
      {
        id: "8",
        imgUrl: "http://files.ganto.cn/files/77.jpg",
        title: "商品名称商品名称商品名称",
        price: "25"
      }
    ],
    searchData: [
      {
        id: "0",
        value: "葡萄"
      },
      {
        id: "1",
        value: "香蕉"
      },
      {
        id: "2",
        value: "西瓜"
      }
    ],
    capsuleTop: 0,
    capsuleHeight: 0,
    scrollTop: 0,
  },
  stopTouchMove() {
    return false;
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const appInstance = getApp()
    this.setData({
      capsuleTop: appInstance.capsuleTop,
      capsuleHeight: appInstance.capsuleHeight
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
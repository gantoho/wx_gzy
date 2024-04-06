function http(url, method='GET', data={}, header={}) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url,
      method,
      data,
      header,
      success({data}) {
        if (data.code === 200) {
          resolve(data)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  http
}
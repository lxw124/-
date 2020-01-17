// miniprogram/pages/User/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    username:'',
    list:[{src:'./image/2.png',text:'待付款'},
    {src:'./image/3.png',text:'待收货'},
    {src:'./image/4.png',text:'待退货'}],
    my:[{src:'./image/6.png',text:'我的礼券'},
    {src:'./image/7.png',text:'积分抵现'},
    {src:'./image/8.png',text:'我的礼品卡'},
    {src:'./image/9.png',text:'我的电子书'},
    {src:'./image/10.png',text:'收货地址'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(wx.getStorageSync('username'))
    if (wx.getStorageSync('username')) {
      this.setData({ show: false, username: wx.getStorageSync('username') })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  register(){
    wx.navigateTo({
      url: 'login',
    })
  },
  out(){
    wx.removeStorageSync('username')
    this.setData({show:true})
  }
 
})
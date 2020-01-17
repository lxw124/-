const db=wx.cloud.database();
const userInfo=db.collection('userInfo');

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
      url: 'register',
    })
  },
  back(){
    wx.navigateBack({
      delta:1
    })
  },
  submit(e){
    var username=e.detail.value.username;
    var password=e.detail.value.password;
    console.log(username+'..'+password);
    new Promise((res,rej)=>{
      userInfo.where({username:username})
      .get()
      .then(data=>{
        if(data.data.length==0){
          wx.showModal({
            content: '用户名不存在'
          })
          return rej();
        }
        if(data.data[0].password!==password){
          wx.showModal({
            content: '密码错误'
          })
          return rej();
        }
      return res();
      })
    }).then(()=>{
      wx.setStorageSync('username',username)
      wx.showModal({
        content: '登录成功',
        success(){
          wx.navigateTo({
            url: 'user'
          })
        }
      })
    },()=>{
      console.log('登录失败')
    })
  }
})
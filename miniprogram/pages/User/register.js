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
  register:function(e){
   var username=e.detail.value.username;
   var password=e.detail.value.password;
   var shop={};
   console.log(username+'..'+password);
  if(username==''){
    wx.showModal({
      content: '请输入用户名'
    })
    return;
  }
  if(password==''){
    wx.showModal({
      content: '请输入密码'
    })
    return;
  }
  new Promise((res,rej)=>{
    userInfo.where({username:username})
    .get()
    .then(data=>{
      
      if(data.data.length>0){
        wx.showModal({
          content: '用户名已存在'
        })
        return rej();
      }
      return res()
    })
  }).then(()=>{
    userInfo.add({data:{username:username,password:password,shop:shop},
        success(res){
          wx.showModal({
            content: '注册成功',
            success(res){
              wx.navigateTo({
                url: 'login',
              })
            }
          })
         
        }
    })
  },()=>{console.log('注册失败')})

  

  }
})
// pages/index1/index.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
      list:['图书','童书','旧书/拍卖','女装','手机数码','童装童鞋','食品生鲜',
      '男装','男女鞋','创意文具',"电子书",'电脑办公','母婴玩具','运动户外','手表眼镜',
      '家用电器'],
      book:[{src:'./image/2.png',text:'总榜'},
      {src:'./image/3.png',text:'新书榜'},
      {src:'./image/4.png',text:'童书榜'}],
      text:['社会','侦探/悬疑','情感','世界名著','历史',
      '科幻','魔幻','惊悚/恐怖','武侠','官场','军事','都市','乡土','职场'],
      flag:true,
      txt:'展开↓',
      id:'0'
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
 open(e){
   var that=this;
   if(this.data.flag==true){this.setData({flag:false,txt:'收起↑'})}else{
     this.setData({flag:true,txt:'展开↓'})
   }
   console.log(this.data)
  let q=wx.createSelectorQuery();
 var camera=q.select('.camera');
 console.log(camera)
 camera.boundingClientRect(function(e){
   console.log(e)
    
 }).exec()
 },

  change(e){
    this.setData({id:e.target.dataset.num})
  }
})
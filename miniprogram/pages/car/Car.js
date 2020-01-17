// miniprogram/pages/car/Car.js
const db=wx.cloud.database();
const userInfo=db.collection('userInfo');
Page({

  data: {
      image:[{src:'./image/1.png',price:51},
        {src:'./image/2.png',price:71.2},
        {src:'./image/3.png',price:60.00},
        {src:'./image/4.png',price:38.20},
        {src:'./image/5.png',price:55.00},
        {src:'./image/6.png',price:100.0}
      ],
      list:[],
      show:true,
      sum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list=[];
    var sum=0;
    userInfo.where({username:wx.getStorageSync('username')})
    .get().then(res=>{console.log(res)
    if(res.data.length>0){
      for(var key in res.data[0].shop){
        list.push({data:this.data.image[key],num:res.data[0].shop[key],id:key})
        sum+=this.data.image[key].price*res.data[0].shop[key]
       
      }
    }
      this.setData({list:list,sum:sum})
   
    
    })
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
    if (wx.getStorageSync('username')) {
      this.setData({ show: false })
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
  get(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  delete(e){
    var password=''
    console.log(e.target.dataset.shop)
    var num=e.target.dataset.shop;
    userInfo.where({username:wx.getStorageSync('username')})
    .get().then(res=>{console.log(res)
    var shop=res.data[0].shop;
    shop[num]=0;
    password=res.data[0].password
    var shop1={}
    for(var key in shop){
      if(shop[key]!==0){
        shop1[key]=shop[key]
      }
    }
    console.log(res.data[0]._id)
   userInfo.doc(res.data[0]._id)
   .remove().then(()=>{
     userInfo.add({data:{username:wx.getStorageSync('username'),
     password:password,shop:shop1}})
   })
   .then(()=>{
     var list = [];
     var sum = 0;
     userInfo.where({ username: wx.getStorageSync('username') })
       .get().then(res => {
         console.log(res)
         for (var key in res.data[0].shop) {
           list.push({ data: this.data.image[key], num: res.data[0].shop[key] })
           sum += this.data.image[key].price * res.data[0].shop[key]
         }
         console.log(list)
         if(list.length==0){
           this.setData({show:true})
         }
         this.setData({ list: list, sum })


       })
   })
    
     
    
    })
  }
})
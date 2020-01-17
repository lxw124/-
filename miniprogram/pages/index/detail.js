// pages/index/detail.js
const db=wx.cloud.database();
const userInfo=db.collection('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {id:0,
  num:1,
  list:[{image:['./image/1.png','./image/2.png','./image/3.png'],text:'地面飞行吴磊新书（抽奖赠送吴磊签名海报6张，随书赠送两张海报+2张电子屏保+2张明信片）',price:'￥51',title:'地面飞行'},
  {image:['./image/4.png','./image/5.png','./image/6.png'],text:'这是一部向《平凡的世界致敬的书，这是一部幽默到脊骨一阵阵发凉的书',price:'￥65.60',title:'重返蜀山'},
  {image:['./image/7.png','./image/8.png'],text:'人间失格（日本小说家太宰治的自媒体小说，李现推荐）',price:'￥18.80',title:'人间失格'},
  {image:['./image/9.png','./image/10.png','./image/11.png'],text:'丁香医生健康日历 当当自营',price:'￥69.70',title:'丁香医生健康日历'},
  {image:['./image/12.png','./image/13.png','./image/14.png'],text:'活着(2017年新版)',
  price:'￥28.00',title:'活着'},
  {image:['./image/15.png','./image/16.png','./image/17.png'],text:'神奇校车-图画书版（全12册，新增科学博览会1册）',price:'￥194.00',title:'神奇校车'}
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.setData({id:options.id})
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
    console.log(this.data.id)
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
  add(){
    var num=this.data.num;
    num++;
    this.setData({num:num})
  },
  sub(){
    var num=this.data.num;
   num--;
    if(num<0){
      this.num=0;
    }
    this.setData({num:num})
  },
  buy(){
    if (!wx.getStorageSync('username')) {
      wx.showModal({
        content: '请先登录'
      })
      return;
    }
    if(this.data.num==0){
      wx.showModal({
        content: '数量不足'
      })
      return;
    }
    var that=this;
  userInfo.where({username:wx.getStorageSync('username')})
  .get({success:function(res){
    console.log(res.data[0])
    var username=res.data[0].username;
    var password=res.data[0].password;
    var shop=res.data[0].shop;
    var _id=res.data[0]._id;
    console.log(that.data)
    if(shop[that.data.id]){
      shop[that.data.id]=Number(shop[that.data.id])+that.data.num
    
    }else{
      shop[that.data.id]=that.data.num
      console.log(shop)
    }
    userInfo.doc(
      _id).update({data:{shop:shop}})
  }
  })
},
addcar(){
  if(!wx.getStorageSync('username')){
    wx.showModal({
      content: '请先登录'
    })
    return;
  }
  if (this.data.num == 0) {
    wx.showModal({
      content: '数量不足'
    })
    return;
  }
  var that = this;
  userInfo.where({ username: wx.getStorageSync('username') })
    .get({
      success: function (res) {
        console.log(res.data[0])
        var username = res.data[0].username;
        var password = res.data[0].password;
        var shop = res.data[0].shop;
        var _id = res.data[0]._id;
        console.log(that.data)
        if (shop[that.data.id]) {
          shop[that.data.id] = Number(shop[that.data.id]) + that.data.num

        } else {
          shop[that.data.id] = that.data.num
          console.log(shop)
        }
        userInfo.doc(
          _id).update({ data: { shop: shop } }).then(res=>{
              wx.showModal({
                content: '加入成功'
              })
          },()=>{wx.showModal({
            content: '购买失败'
          })})
      }
    })
}

})

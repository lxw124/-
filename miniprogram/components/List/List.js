// components/List/List.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      list:[{src:"./image/1.png",text:'地面飞行吴磊新书',price:'￥51.00'},
            {src:'./image/2.png',text:'重返蜀山(上下册)',price:'￥71.2'},
            {src:'./image/4.png',text:'小说',price:'￥60.00'},
            {src:'./image/3.png',text:'丁香医生健康日历2020',price:'￥38.20'},
            {src:'./image/5.png',text:'活着(2017年新版)',price:"￥55.00"},
            {src:'./image/6.png',text:'神奇校车-图书画板',price:'￥100.0'}
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    detail(e){
     
      wx.navigateTo({
        url: 'detail?id='+e.target.dataset.id
      })
    }
  }
})

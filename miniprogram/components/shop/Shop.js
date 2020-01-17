// components/shop/Shop.js
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
    hour:24-Number(new Date().getHours()),
    minute:60-Number(new Date().getMinutes()),
    second:60-Number(new Date().getSeconds()),
      list:[
        {src:"./image/1.png",
         text:'1元秒杀，限量抢购，抢完即止',
         price:'￥1',
         prev:'￥159.00'
        },
        {
          src:'./image/2.png',
          text:'【限时秒杀包邮】彼得兔的故事书经典...',
          price:'￥14.5',
          prev:'￥96.00'
        },
        {
          src:'./image/3.png',
          text:'宽松慵懒风高领纯色打底毛衣',
          price:'￥49.9',
          prev:'￥308.00'
        },
        {
          src:'./image/4.png',
          text:'我喜欢生命本来的样子',
          price:'￥15',
          prev:'￥45.00'
        },
        {
          src:'./image/5.png',
          text:'鲁迅全集',
          price:'￥229',
          prev:'￥598.00'
        },
        {
          src:'./image/6.png',
          text:'【亏本甩卖！限时抢购价12.9包邮】女...',
          price:'￥12.9',
          prev:'￥599.00'
        },
        {
          src:'./image/7.png',
          text:'越玩越聪明的数独游戏1-6共6册（套装）',
          price:'￥12.8',
          prev:'￥60.00'
        },
        {
          src: './image/8.png',
          text: '【买了都说好】推荐：超火',
          price: '￥33.9',
          prev: '￥499.00'
        },
        {
          src: './image/9.png',
          text: '【29.9元整箱12.30明星款秒杀】',
          price: '￥29.9',
          prev: '￥79.00'
        },
        {
          src: './image/10.png',
          text: '正宗赣南脐橙65mm果5斤装 果园直发新...',
          price: '￥19.9',
          prev: '￥59.90'
        }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      change(){
        setInterval(()=>{this.setData({
          hour: 24 - Number(new Date().getHours()),
          minute: 60 - Number(new Date().getMinutes()),
          second: 60 - Number(new Date().getSeconds())
        })},1000)
      }
  },
  lifetimes:{
    attached(){
      this.change()
    }
  }
})

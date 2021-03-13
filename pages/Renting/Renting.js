// pages/Renting/Renting.js
Component({
    attached: function() {
    wx.setNavigationBarTitle({title:'我要找房'})
    },
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    screen:"大小",
    screenFlag: false,
    screenColor: false,
    screenDown: { screenDown:["大小","0-50平方","50-80平方"],screen:0},
    price:"租金",
    priceFlag: false,
    priceColor: false,
    priceDown: { priceDown:["租金","100-1000元","1000-20000元"],price:0},
    filterRoom: [
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:70,
        price:300,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:60,
        price:1000,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:200,
        price:3000,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:25,
        price:300,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:25,
        price:300,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:25,
        price:300,
        type:"单间"
      },
      {
        id:"001",
        img:"../img/0.jpg",
        num1:806,
        num2:103,
        size:25,
        price:300,
        type:"单间"
      },
  ],
    room : [
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:70,
              price:300,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:60,
              price:1000,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:200,
              price:3000,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:25,
              price:300,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:25,
              price:300,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:25,
              price:300,
              type:"单间"
            },
            {
              id:"001",
              img:"../img/0.jpg",
              num1:806,
              num2:103,
              size:25,
              price:300,
              type:"单间"
            },
        ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    screenShow: function () {//综合下拉
      if (this.data.screenFlag){
        this.setData({
          screenFlag : !this.data.screenFlag,
          priceFlag : false
        })
      }else{
        this.setData({
          screenFlag: !this.data.screenFlag,
          priceFlag: false
        })
      }
    },
    priceShow: function () {//综合下拉
      if (this.data.priceFlag){
        this.setData({
          priceFlag : !this.data.priceFlag,
          screenFlag : false
        })
      }else{
        this.setData({
          priceFlag: !this.data.priceFlag,
          screenFlag : false
        })
      }
    },
    screenChoice:function(e){//综合下拉选择子项
      console.log(e)
      const reg = /(.*)-(.*)平方/
      const sizes = reg.exec( e.currentTarget.dataset.item)
      let rooms = null
      if (sizes) {
        rooms = this.data.room.filter( item => item.size >= Number(sizes[1]) && item.size <= Number(sizes[2]))
      }
      this.setData({
        price: "租金",
        "priceDown.price": 0,
        priceColor: false,
        screen: e.currentTarget.dataset.item,
        "screenDown.screen": e.currentTarget.dataset.index,
        screenFlag: false,
        screenColor:true,
        filterRoom: rooms?rooms:this.data.room,
      })
    },
    priceChoice:function(e){//综合下拉选择子项
      console.log(e)
      const reg = /(.*)-(.*)元/
      const sizes = reg.exec( e.currentTarget.dataset.item)
      let rooms = null
      if (sizes) {
        rooms = this.data.room.filter( item => item.size >= Number(sizes[1]) && item.size <= Number(sizes[2]))
      }
      this.setData({
        screen: "大小",
        "screenDown.screen": 0,
        screenColor: false,
        price: e.currentTarget.dataset.item,
        "priceDown.price": e.currentTarget.dataset.index,
        priceFlag: false,
        priceColor:true,
        filterRoom: rooms?rooms:this.data.room,
      })
    },
    handletouchtart: function (event) {//点击透明背景隐藏下拉
      this.setData({
        screenFlag: false,
        priceFlag: false
      })
    },
  }
})

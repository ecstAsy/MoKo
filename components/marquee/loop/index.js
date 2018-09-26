Component({
  properties: {
    content: {
      type: String,
      value: ''
    },
    orientation:{
      type:String,
      value:''
    }
  },
  data: {
    windowWidth: 0,
    length: 0,
    size: 14,
    marqueeDistance2: 0,
    marqueePace: 1,
    marquee2copy_status: false,
    marquee2_margin: 60,
  },
  ready() {
    let that = this;
    let length = that.data.size * that.data.content.length;
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    that.setData({
      length,
      windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : that.data.marquee2_margin
    })
    that.textRun()
  },

  methods: {
    textRun() {
      let that = this;
      let interval = setInterval(() => {
        if (-that.data.marqueeDistance2 < that.data.length) {
          that.setData({
            marqueeDistance2: that.data.marqueeDistance2 - that.data.marqueePace,
            marquee2copy_status: that.data.length + that.data.marqueeDistance2 <= that.data.windowWidth + that.data.marquee2_margin
          });
        } else {
          if (-that.data.marqueeDistance2 >= that.data.marquee2_margin){
            that.setData({
              marqueeDistance2: that.data.marquee2_margin // 直接重新滚动
            });
            clearInterval(interval);
            that.textRun();
          }else{
            clearInterval(interval);
            that.setData({
              marqueeDistance2: -that.data.windowWidth
            });
            that.textRun();
          }
           
        }
      }, 24)
    }
  }
})

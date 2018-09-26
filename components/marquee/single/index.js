Component({
  properties: {
    content: {
      type: String,
      value: ''
    },
    orientation: {
      type: String,
      value: 'left'
    }
  },
   data: {
     windowWidth:0,
     length:0,
     size: 14,
     marqueeDistance:0,
     marqueePace:1
  },
  ready(){
    let that = this;
    let length = that.data.size * that.data.content.length;
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    that.setData({
      length,
      windowWidth
    })
    that.textRun()
  },
  
  methods: {
    textRun(){
      let that = this;
        let interval = setInterval(()=>{
          if (-that.data.marqueeDistance < that.data.length) {
            that.setData({
            marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
            });
          } else {
            clearInterval(interval);
            that.setData({
              marqueeDistance: that.data.windowWidth
            });
            that.textRun();
          }
        },24)
     }
  }
})

Component({
  properties: {
    icon:{
      type:Boolean,
      value:false
    },
    contact: {
      type: Boolean,
      value: false
    },
    title:{
      type:String,
      value:''
    },
    background:{
      type:String,
      value:'#09a8bc'
    }
  },
  data: {
    pos: {},
    statusBarHeight: 0,
    titleBarHeight:0
  },
  ready() {
    let that = this
    wx.getSystemInfo({
      success:  (res)=> {
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        that.setData({
          statusBarHeight: res.statusBarHeight,
          titleBarHeight: totalTopHeight - res.statusBarHeight
        })
      }
    })
  },
  methods: {
    _handleBack(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})

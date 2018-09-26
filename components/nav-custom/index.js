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
    }
  },
  data: {
    pos: {},
    SYSTEMINFO: ''
  },
  ready() {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          SYSTEMINFO: res
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

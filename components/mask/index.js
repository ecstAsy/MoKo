Component({
  properties: {
    mask: {
      type: Boolean,
      value: true
    },
    background:{
      type:String,
      value:''
    }
  },

  data: {
    SystemInfo:''
  },
  ready() {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          SystemInfo: res
        })
      }
    })
  },
  methods: {
    onClose(){
      this.triggerEvent('close');
    }
  }
})

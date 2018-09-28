Component({
  properties: {
    dataSource:{
      type:Array,
      value:''
    },
    ActiveId:{
      type:Number,
      value:0
    },
    mask:{
      type:Boolean,
      value:false
    }
  },

  data: {
    SystemInfo: ''
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
    onClose() {
      this.triggerEvent('close')
    },
    bindConfim(){
      let that = this,
          ActiveId  = that.data.ActiveId;
      this.triggerEvent('select', ActiveId);
    },
    bindChange(e){
      let _value = e.detail.value[0];
      this.setData({
        ActiveId:_value
      })
    }
  }
})

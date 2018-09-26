Component({
  properties: {
    Tab: {
      type: Array,
      value: ['选项1', '选项2', '选项3', '选项4']
    }
  },
  data: {
    SystemInfo: '',
    sliderLeft:0,
    sliderOffset:0,
    sliderWidth:0,
    ActiveId:1
  },
  ready() {
    let that = this
    wx.getSystemInfo({
      success:(res)=> {
        that.setData({
          sliderLeft: res.windowWidth / that.data.Tab.length / 4,
          sliderWidth: res.windowWidth / that.data.Tab.length/2 
        })
      },
    })
  },
  methods: {
    handleTab(event){
      let ActiveId = event.currentTarget.dataset.id;
      this.setData({
        sliderOffset: event.currentTarget.offsetLeft,
        ActiveId
      })
      this.triggerEvent('select', ActiveId);
    }
  }
})

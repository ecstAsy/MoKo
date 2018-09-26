Component({
  properties: {
    Tab: {
      type: Array,
      value: ['选项1', '选项2','选项3','选项4']
    },
    ActiveId: {
      type: Number,
      value: 0
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
    handleTab(event){
      let ActiveId = event.currentTarget.dataset.id;
      this.setData({
        ActiveId
      })
      this.actionTab(ActiveId);
    },
    switchTab(event) {
      let ActiveId = event.detail.current;
      this.setData({
        ActiveId
      })
      this.actionTab(ActiveId);
    },
    actionTab(ActiveId){
      this.triggerEvent('select', ActiveId);
    }
  }
})

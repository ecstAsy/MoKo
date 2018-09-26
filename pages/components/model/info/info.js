Page({
  data: {
    title: "获取用户信息",
    content: "wx.getUserInfo 接口调整，不会自动弹出授权框，获取用户信息需要用户自己手动触发授权，获取用户信息自定义弹窗引导用户主动触发授权框",
    mask: true
  },
  onLoad: function (options) {

  },
  onCancel(){
    this.setData({
      mask:false
    })
  },
  onConfirm(e){
    let that = this;
    that.onCancel();
     console.log(e.detail)
  }
})
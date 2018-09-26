Page({
  data: {
    title:"手机号验证",
    content:"验证码获取，倒计时提示，提交信息控制，表单提交完成，返回输入的信息，进行后台交互",
    mask:false
  },
  onLoad: function (options) {

  },
  formSubmitPhone(e){
    console.log(e.detail)
  },
  getPhoneCode(e){
    console.log(e.detail)
  },
  Test(){
    this.setData({
      mask:true
    })
  },
  maskClose(){
    this.setData({
      mask: false
    })
  }
})
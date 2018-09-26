Component({
  properties: {
    mask: {
      type: Boolean,
      value: true
    }
  },
  data: {
    SystemInfo:''
  },
  ready() {
    let that = this;
    wx.getSystemInfo({
      success: (res)=> {
        that.setData({
          SystemInfo:res
        })
      },
    })
  },
  methods: {
    onCancel() {
      let that = this;
      this.triggerEvent('close');
      that.getUserInfo();
    },
    onConfirm(e){
      let info = e.detail.rawData;
      this.triggerEvent('getInfo',info);
    },
    getUserInfo(){
      let that = this;
      wx.showModal({
        title: '温馨提示',
        content: '该小程序需要获取你的用户信息才能获取更多服务',
        success: res => {
          if (res.confirm) {
            wx.openSetting({
              success: data => {
                if(data.authSetting['scope.userInfo']){
                  wx.getUserInfo({
                    success:res=>{
                      let info = res.rawData;
                      this.triggerEvent('getInfo', info);
                    }
                  })
                }else{
                  that.getUserInfo();
                }
              }
            })
          } else {
              wx.showModal({
                title: '警告',
                content: '该小程序需要获取你的授权，请到设置中心打开授权',
                showCancel:false,
                success:res=>{
                  if(res.confirm){
                    wx.openSetting({
                      success: data => {
                        if (data.authSetting['scope.userInfo']) {
                          wx.getUserInfo({
                            success: res => {
                              let info = res.rawData;
                              this.triggerEvent('getInfo', info);
                            }
                          })
                        } else {
                          that.getUserInfo();
                        }
                      }
                    })
                  }
                }
              })
          }
        }
      })
    }
  }
})
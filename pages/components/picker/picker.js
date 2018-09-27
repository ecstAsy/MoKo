Page({
  data: {
    Citys:[
      1,2,3,4,5
    ],
    pickerType:[{
      name:'自定义',
      mask:false
    }],
    ActiveId:0,
  },
  onLoad: function (options) {

  },
  action(e){
  let  that = this,
       pickerType = that.data.pickerType,
       Id = e.currentTarget.dataset.id;
    pickerType[Id].mask = true;
    this.setData({
      pickerType
    })
  },
  onConfirm(e){
    let ActiveId = e.detail;
    this.setData({
      ActiveId
    })
  },
  onClose(){
    this.setData({
      mask:false
    })
  }
})
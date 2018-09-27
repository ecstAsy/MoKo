Page({
  data: {
    title:'picker选择器',
    content:'点击蒙板可以取消选择，点击取消亦可，点击确定，返回选中的项目的索引。选中框的颜色可以改变，可以多列选择，传入需要选择的数据即可。',
    Citys:[
      1,2,3,4,5
    ],
    pickerType:[{
      name:'自定义',
      mask:false
    }],
    pickerId:0,
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
      pickerType,
      pickerId:Id
    })
  },
  onConfirm(e){
    let that = this,
      pickerId = that.data.pickerId,
      pickerType = that.data.pickerType,
      ActiveId = e.detail;
    pickerType[pickerId].mask = false;
    this.setData({
      ActiveId,
      pickerType
    })
  },
  onClose(){
    let that = this,
      pickerId = that.data.pickerId,
      pickerType = that.data.pickerType;
    pickerType[pickerId].mask = false;
    that.setData({
      pickerType
    })
  }
})
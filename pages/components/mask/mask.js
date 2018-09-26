Page({
  data:{
    mask:true,
    background: [{
      color: 'rgba(255, 255, 255, .5)',
      title:'white'
    },{
        color: 'rgba(0, 0, 0, .5)',
        title:'black'
    }],
    maskColor: '',
    title:"遮罩层",
    content:"小程序表面一层透明蒙板层，可自行修改颜色，传入background即可，可选择是否需要mask，点击蒙板层关闭蒙板"
  },
  onLoad(options){

  },
  action(e){
    let that = this,
      background = that.data.background,
        _flag = e.currentTarget.dataset.id;
    that.setData({
      maskColor: background[_flag].color,
      mask:true
    })
  },
  maskClose(){
    this.setData({
      mask:false
    })
  }
})
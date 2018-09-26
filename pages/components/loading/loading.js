Page({
  data:{
    LoadingType: [{
      name: 'slide',
      Loading: false
    },{
      name:'dot',
      Loading: false
    }, {
        name: 'circle',
        Loading: false
      }, {
        name: 'circular',
        Loading: false
      }, {
        name: 'square',
        Loading: false
      }],
    title:"loading...",
    content:"页面加载过程中动画衔接，需要动画时，设置Loading为true即可显示动画，可结合mask一起使用"
  },
  onLoad(options){
    
  },
  action(e){
    let that = this,
      LoadingType = that.data.LoadingType,
      _flag = e.currentTarget.dataset.id;
    LoadingType[_flag].Loading = true
    that.setData({
      LoadingType
    })
    setTimeout(()=>{
      LoadingType[_flag].Loading = false
      that.setData({
        LoadingType
      })
    },2000)
  }

})
Page({
  data: {
    ActiveId:1,
    content: ['选项1', '选项2', '选项3', '选项4'],
    title:'左右滑动切换',
    cardContent:'点击tab切换content内容，返回选择的tab的ID，左右滑动切换内容，改变tab的选择ID'
  },
  onLoad(options) {

  },
  actionTab(e){
    let that = this,
      ActiveId = e.detail;
    that.setData({
      ActiveId
    })
  }
})
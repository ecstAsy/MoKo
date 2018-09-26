Page({
  data: {
    ActiveId: 0,
    content: ['选项1', '选项2', '选项3', '选项4'],
    title: '点击切换',
    cardContent: '点击tab切换content内容，返回选择的tab的ID'
  },
  onLoad(options) {

  },
  handleTab(e){
    let that = this,
      ActiveId = e.detail-1;
    that.setData({
      ActiveId
    })
  }
})
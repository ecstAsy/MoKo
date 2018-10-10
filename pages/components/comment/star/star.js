Page({
  data: {
     Comment:[
       {
         title:'服务',
         flag: 1
       }, {
         title: '速度',
         flag: 3
       }, {
         title: '描述',
         flag: 5
       }
     ],
    title:"五星评论",
    content:"点击星评，返回评论的星星Id,根据Id来判断评论的好坏（在遍历过程中为每一个点击事件添加flag,以便区分开评论对象。）。使用组件标签，添加点击事件即可，反之则可用来展示评论结果。"
  },
  onLoad(options) {

  },
  ActionStar(e){
   let that = this,
     Comment = that.data.Comment,
     _flag = e.detail,
     _id = e.currentTarget.dataset.id;
    Comment[_id].flag = _flag;
    that.setData({
      Comment
    })
  }
})
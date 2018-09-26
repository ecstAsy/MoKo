Page({
  data: {
     Comment:[
       {
         title:'服务',
         flag: 0
       }, {
         title: '速度',
         flag: 0
       }, {
         title: '描述',
         flag: 0
       }
     ]
  },
  onLoad: function (options) {

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
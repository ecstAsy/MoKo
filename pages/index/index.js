const App = getApp()
Page({
  data: {
    Components: [{
      id: 1,
      name: '全屏顶部',
      active: false,
      list: [{
        name: '自定义+客服+返回',
        url: '/pages/components/nav-custom/nav-custom'
      }]
    }, {
      id: 2,
      name: '导航',
      active: false,
      list: [{
        name: '左右滑动切换',
        url: '/pages/components/tab/slide/slide'
      }, {
        name: '点击切换',
        url: '/pages/components/tab/click/click'
      }]
    },{
      id:3,
      name:'卡片',
      active:false,
      list:[
        {
          name:'内容介绍',
          url:'/pages/components/card/intro/intro'
        }, {
          name: '卡券模型',
          url: '/pages/components/card/shadow/shadow'
        }
      ]
    },{
        id: 4,
        name: '加载动画',
        active: false,
        list: [
          {
            name: 'loading',
            url: '/pages/components/loading/loading'
          }
        ] 
      }, {
        id: 5,
        name: '遮罩层',
        active: false,
        list: [
          {
            name: 'mask',
            url: '/pages/components/mask/mask'
          }
        ]
      }, {
        id: 6,
        name: '评论',
        active: false,
        list: [
          {
            name: '五星好评',
            url: '/pages/components/comment/star/star'
          }
        ]
      }, {
        id: 7,
        name: '拖拽',
        active: false,
        list: [
          {
            name: '元素',
            url: '/pages/components/drag/drag'
          }
        ]
      }, {
        id: 8,
        name: '滚动文字',
        active: false,
        list: [
          {
            name: '跑马灯',
            url: '/pages/components/marquee/marquee'
          }
        ]
      }, {
        id: 9,
        name: '弹窗',
        active: false,
        list: [
          {
            name: '手机号验证',
            url: '/pages/components/model/phone/phone'
          }, {
            name: '获取用户信息',
            url: '/pages/components/model/info/info'
          }
        ]
      }, {
        id: 10,
        name: '选择器',
        active: false,
        list: [
          {
            name: 'picker选择',
            url: '/pages/components/picker/picker'
          }
        ]
      }]
  },
  onLoad() {

  },
  handleClick(e) {
    let that = this,
      Components = that.data.Components,
      _id = e.currentTarget.dataset.id;
    Components.map(list => {
      list.active = list.id === _id ? !list.active : list.active;
    })
    that.setData({
      Components
    })
  }
})
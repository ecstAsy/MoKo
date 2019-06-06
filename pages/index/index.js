import Http from '../../Http/http.js';
const App = getApp()
let formIds = [];
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
    }, {
      id: 3,
      name: '卡片',
      active: false,
      list: [{
        name: '内容介绍',
        url: '/pages/components/card/intro/intro'
      }, {
        name: '卡片留白',
        url: '/pages/components/card/space/space'
      }, {
        name: '单排选择',
        url: '/pages/components/card/list/list'
      }]
    }, {
      id: 4,
      name: '加载动画',
      active: false,
      list: [{
        name: 'loading',
        url: '/pages/components/loading/loading'
      }]
    }, {
      id: 5,
      name: '遮罩层',
      active: false,
      list: [{
        name: 'mask',
        url: '/pages/components/mask/mask'
      }]
    }, {
      id: 6,
      name: '评论',
      active: false,
      list: [{
        name: '五星好评',
        url: '/pages/components/comment/star/star'
      }]
    }, {
      id: 7,
      name: '拖拽',
      active: false,
      list: [{
        name: '元素',
        url: '/pages/components/drag/drag'
      }]
    }, {
      id: 8,
      name: '滚动文字',
      active: false,
      list: [{
        name: '跑马灯',
        url: '/pages/components/marquee/marquee'
      }]
    }, {
      id: 9,
      name: '弹窗',
      active: false,
      list: [{
        name: '手机号验证',
        url: '/pages/components/model/phone/phone'
      }, {
        name: '获取用户信息',
        url: '/pages/components/model/info/info'
      }]
    }, {
      id: 10,
      name: '选择器',
      active: false,
      list: [{
        name: 'picker选择',
        url: '/pages/components/selector/picker/picker'
      }, {
        name: '九宫格',
        url: '/pages/components/selector/grid/grid'
      }]
    }, {
      id: 11,
      name: '二维码制作器',
      active: false,
      list: [{
        name: '二维码展示',
        url: '/pages/components/QRcode/QRcode'
      }]
    }, {
      id: 12,
      name: 'Banner',
      active: false,
      list: [{
        name: 'Banner展示',
        url: '/pages/components/banner/banner'
      }]
    }],
    swiperIndex:0,
    imgUrls: [
      '/images/poster/poster-1.jpg',
      '/images/poster/poster-2.jpg',
      '/images/poster/poster-3.jpg',
      '/images/poster/poster-4.jpg'
    ],
    swiperH: '',//swiper高度
    nowIdx: 0,//当前swiper索引
    imgList: [//图片列表
      '/images/poster/poster-1.jpg',
      '/images/poster/poster-2.jpg',
      '/images/poster/poster-3.jpg',
    ]
  },
  getHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50;//获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;
    var sH = winWid * imgh / imgw + "px"
    this.setData({
      swiperH: sH//设置高度
    })
  },
  //swiper滑动事件
  swiperChange: function (e) {
    console.log(e)
    this.setData({
      nowIdx: e.detail.current
    })
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
  },
  getLocation() {
    console.log(0)
    wx.chooseLocation({
      success: res => console.log(res)
    })
  },
  // swiperChange(e) {
  //   this.setData({
  //     swiperIndex: e.detail.current
  //   })
  // }
  handleCollect(e) {
    console.log(e)
    formIds = [...formIds, e.detail.formId];
    // if (formIds.length === 10) {
    //   // todo 提交后台，一次性收集 10条

    //   formIds = [];
    //   // 一次收集完以后记得要清空，以便下次收集
    // }
    console.log(`formIds:`, formIds)
  }
})
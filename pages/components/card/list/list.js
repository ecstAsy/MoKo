Page({
  data:{
    title:"单行选择",
    content:"单行选择列表，选中列表项，返回选择的内容。",
    dataSource:[
      {
        name:'江苏',
        active:false,
        lists:['苏州','无锡','南京']
      }, {
        name: '河南',
        active: false,
        lists: ['郑州', '开封', '洛阳','南阳']
      }
    ],
    active:{
      province:'',
      city:''
    }
  },
  onLoad(options){

  },
  onSelectItem(e){
    let that = this,
        dataSource = that.data.dataSource,
        active = that.data.active,
        _id = e.currentTarget.dataset.id;
        active.province = e.detail;
    dataSource[_id].active = !dataSource[_id].active;
    that.setData({
      dataSource,
      active
    })
  },
  onSelectList(e){
    let that = this,
      dataSource = that.data.dataSource,
      active = that.data.active;
    active.city = e.detail;
    dataSource.map(list=>{
      list.active = false
    })
    that.setData({
      active,
      dataSource
    })
  }
})
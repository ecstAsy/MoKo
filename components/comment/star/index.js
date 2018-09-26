Component({
  properties: {
    title:{
      type:String,
      value:''
    }
  },
  data: {
    starArry:[1,2,3,4,5],
    StarId:0
  },
  methods: {
    chooseStar(event){
      let that = this,
        StarId = event.currentTarget.dataset.id;
      console.log(StarId)
      that.setData({
        StarId
      })
      this.triggerEvent('select', StarId);
    }
  }
})

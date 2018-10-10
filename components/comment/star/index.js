Component({
  properties: {
    title:{
      type:String,
      value:''
    },
    StarId:{
      type:Number,
      value:0
    }
  },
  data: {
    starArry:[1,2,3,4,5]
  },
  methods: {
    chooseStar(event){
      let  StarId = event.currentTarget.dataset.id;
      this.triggerEvent('select', StarId);
    }
  }
})

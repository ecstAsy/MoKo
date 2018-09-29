Component({
  properties: {
    name:{
      type:String,
      value:{}
    },
    animation:{
      type:Boolean,
      value:false
    },
    Intro:{
      type:String,
      value:''
    },
    Image:{
      type:String,
      value:''
    }
  },
  data: {

  },
  methods: {
    bindSelect(e){
      let Active = e.currentTarget.dataset.name;
      this.triggerEvent('select', Active);
    }
  }
})

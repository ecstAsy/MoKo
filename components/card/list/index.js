Component({
  properties: {
    name:{
      type:String,
      value:{}
    },
    animation:{
      type:Boolean,
      value:false
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

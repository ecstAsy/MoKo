Component({
  properties: {
    animation:{
      type:Boolean,
      value:false
    },
    content:{
      type:Object,
      value:{}
    }
  },
  data: {

  },
  methods: {
    bindSelect(e){
      let ActiveId = e.currentTarget.dataset.id;
      this.triggerEvent('select', ActiveId);
    }
  }
})

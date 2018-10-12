import MoKo from '../../common.js';
Component({
  properties: {
    imgArry:{
      type:Array,
      value:[]
    },
    height:{
      type:Number,
      value: MoKo._getSystemInfo().windowWidth*0.5
    }
  },
  data: {
    
  },
  ready(){

  },
  methods: {
    onSelect(e){
      let activeId = e.currentTarget.dataset.id;
      this.triggerEvent('select', activeId);
    }
  }
})

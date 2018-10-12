Component({
  properties: {
    txtArry: {
      type: Array,
      value: []
    },
    height: {
      type: Number,
      value: 88
    }
  },
  data: {

  },
  ready() {

  },
  methods: {
    onSelect(e) {
      let activeId = e.currentTarget.dataset.id;
      this.triggerEvent('select', activeId);
    }
  }
})

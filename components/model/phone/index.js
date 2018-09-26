import MoKo from '../../common.js';
Component({
  properties: {
    mask: {
      type: Boolean,
      value: true
    },
    background: {
      type: String,
      value: ''
    }
  },

  data: {
    formData: {
      phone: '',
      code: ''
    },
    btnTxt: '获取验证码',
    countdown: 60,
    isClickCodeBtn: false
  },
  ready() {

  },
  methods: {
    onClose() {
      this.triggerEvent('close');
    },
    formSubmitPhone(e){
      let FormData = e.detail.value,
          errMsg = '';
      errMsg = !FormData.phone ? '手机号不能为空' :
               !FormData.phone ? '验证码不能为空' : '';
      if (errMsg){
        MoKo._showToast(errMsg);
      }else{
        this.triggerEvent('submit', FormData);
      }
    },
    getPhoneCode() {
      let that = this,
        formData = that.data.formData,
      phoneRexp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (formData.phone && phoneRexp.test(formData.phone)) {
        that.setData({
          isClickCodeBtn: true
        })
        that.timer();
        this.triggerEvent('code', formData.phone);
      }else{
        let errMsg = !formData.phone ? '手机号不能为空' : '手机号格式有误';
        MoKo._showToast(errMsg);
      }
    },
    Input(e) {
      let that = this,
        formData = that.data.formData,
        _flag = e.currentTarget.dataset.id,
        _value = e.detail.value;
      _flag === 'phone' ? formData.phone = _value : formData.code = _value;
      that.setData({
        formData
      })
    },
    timer() {
      let that = this,
        countdown = that.data.countdown;
      let clock = setInterval(() => {
        countdown--
        if (countdown >= 0) {
          that.setData({
            countdown: countdown
          })
        } else {
          clearInterval(clock)
          that.setData({
            countdown: 60,
            isClickCodeBtn: false,
            btnTxt: '重新获取'
          })
        }
      }, 1000)
    }
  }
})
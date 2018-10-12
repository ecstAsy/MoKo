import Qrcode from '../../../utils/qrcode.js';
Page({
  data: {
    imagePath: '',
    title:"二维码制作",
    content:"使用外部qrcode.js+canvas画出二维码，传入String即可。"
  },
  onLoad(options) {
    let that = this;
    this._getQrcode('www');
  },
  _getQrcode(Qrcode) {
    let size = this.setCanvasSize();
    this.createQrCode(Qrcode, "mycanvas", size.w, size.h);
  },
  setCanvasSize() {
    const size = {};
    try {
      const res = wx.getSystemInfoSync();
      const width = res.windowWidth
      const height = width; //canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      console.log("获取设备信息失败" + e);
    }
    return size;
  },
  canvasToTempImage() {
    let that = this;
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function(res) {
        const tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath
        });
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },
  createQrCode(url, canvasId, cavW, cavH) {
    //调用插件中的draw方法，绘制二维码图片
    Qrcode.api.draw(url, canvasId, cavW, cavH);
    setTimeout(() => {
      this.canvasToTempImage();
    }, 1000);

  }
})
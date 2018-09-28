const _showToast = (title)=>{
  wx.showToast({
    icon:'none',
    title: title,
  })
}
const _getSystemInfo = ()=>{
  let data;
  wx.getSystemInfo({
    success: res=> {
      data = res;
    }
  })
  return data
}
module.exports = {
  _showToast,
  _getSystemInfo
}
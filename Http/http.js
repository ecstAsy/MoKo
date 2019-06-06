const API_URL = "https://kyfw.12306.cn/"
  //const API_URL = "http://localhost:3001/"
  function Get(url, params, jwtStr) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: API_URL + url,
        data: params,
        method: 'get',
        header: {
          'Content-Type': 'application/json',
          'Authorization': jwtStr
        },
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res)
        },
        complete:res=>{
          wx.hideLoading()
        }
      })
    });
    return promise
  }

  function Post(url, params, jwtStr) {
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: API_URL + url,
        data: params,
        method: 'post',
        header: {
          'content-Type': 'application/x-www-form-urlencoded',
          'Authorization': jwtStr
        },
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res)
        }
      })
    });
    return promise
  }

  function JsonPost(url, params, jwtStr) {
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: API_URL + url,
        data: JSON.stringify(params),
        method: 'post',
        header: {
          'Content-Type': 'application/json',
          'Authorization': jwtStr
        },
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res);
        }
      })
    });
    return promise
  }

  function Put(url, params, jwtStr) {
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: API_URL + url,
        data: params,
        method: 'put',
        header: {
          'Content-Type': 'application/json',
          'Authorization': jwtStr
        },
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res);
        }
      })
    });
    return promise
  }

  function Delete(url, params, jwtStr) {
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: API_URL + url,
        data: params,
        method: 'delete',
        header: {
          'Content-Type': 'application/json',
          'Authorization': jwtStr
        },
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res);
        }
      })
    });
    return promise
  }
  module.exports = {
    Get,
    Post,
    JsonPost,
    Put,
    Delete
  }
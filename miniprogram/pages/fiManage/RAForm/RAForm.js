// miniprogram/pages/fiManage/RAForm/RAForm.js
const db = wx.cloud.database()
const userText = db.collection('PAForm')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state0:'未充值',
    state1:'已充值',
    groupname:["张三课题组","王五课题组"],
    time:["2019.2.13","2019.4.3"],
    money:["500","1100"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindtap1: function () {
    wx.navigateTo({
      url: '/pages/fiManage/RAForm/recharge/recharge',
    })
  }

})
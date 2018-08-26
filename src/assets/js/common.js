exports.install = function (Vue, options) {
  'use strict'

// 纯粹的alert框
  Vue.prototype.alert = function (text, type = "warning") {
    this.$alert(text, '标题名称', {
      confirmButtonText: '确定',
      type: type
    })
  }


// 有确认按钮，确认后有相应的操作
  Vue.prototype.confirm = function (text, okCb, errCb) {
    this.$confirm(text, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      // okCb
    }).catch(() => {
      // errCb
    });
  }
}

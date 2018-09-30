/*
* 等比兼容
* */
(function (doc, win) {
var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    //750是设计图的宽度,50是一个基准宽度(html的font-size值)
  };

if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*
* 时间戳格式化
*/
Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
/*
*扩展删除数组某个元素的方法
 */
Array.prototype.removeByValue = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
};
/*
* 公共变量
* */
var allVariable = {
    num: 0, // 切换导航置顶
};
var setUserId = function(value){
    window.android.back( value );
};
var getFromAndroid = function(){
    var top = $('#optionList').offset().top;
    setUserId(top);
    // if (allVariable.num === 0) {
    //   $('.details-container').animate({'scrollTop':top},300);
    //   allVariable.num = 1;
    // } else {
    //   $('.details-container').animate({'scrollTop':0},300);
    //   allVariable.num = 0;
    // }
};
var ctx = 'http://api.zizhengjiankang.com';
var ctxs = 'http://api.zizhengjiankang.com/kk-api-v112';
// var ctx = 'http://www.xinguad.com';
// var ctxs = 'http://www.xinguad.com/kk-api-v112';
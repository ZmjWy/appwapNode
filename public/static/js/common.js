'use strict';

var toast = function toast(str) {
    var m = document.createElement('div');
    m.innerHTML = str;
    m.style.cssText = 'font-size:15px;width:70%; min-width:150px; background:#000; opacity:0.8; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; top:40%; left:15%; z-index:99999999; ';
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m);
        }, d * 1000);
    }, 2000);
};
// 获取地址栏参数
var GetQueryString = function GetQueryString() {
    var value;
    var str = location.href;
    var num = str.indexOf('?');
    str = str.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]
    var arr = str.split('&'); // 各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=');
        if (num > 0) {
            var name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
};
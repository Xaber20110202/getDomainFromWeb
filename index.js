'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 利用cookie特性 获取页面主域名
// 参考来源
// https://www.zhihu.com/question/20994750?sort=created
var getDomain = function getDomain() {
    var domain = window.location.host.split(':').shift(),
        arr = domain.split('.'),
        len = arr.length,
        tempCookie = '_temp_' + new Date().getTime();

    if (len <= 2) {
        return domain;
    }

    for (; len > 2; len--) {
        domain = arr.slice(1).join('.');
        _jsCookie2.default.set(tempCookie, tempCookie, {
            path: '/',
            domain: domain
        });
        if (_jsCookie2.default.get(tempCookie)) {
            _jsCookie2.default.remove(tempCookie);
            return domain;
        }
        arr.shift();
    }
};

exports.default = getDomain;
module.exports = exports['default'];

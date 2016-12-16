import cookie from 'js-cookie';

// 利用cookie特性 获取页面主域名
// 参考来源
// https://www.zhihu.com/question/20994750?sort=created
const getDomain = () => {
    let domain = window.location.host.split(':').shift(),
        arr = domain.split('.'),
        len = arr.length,
        tempCookie = `_temp_${new Date().getTime()}`;

    if (len <= 2) {
        return domain;
    }

    for (; len > 2; len--) {
        domain = arr.slice(1).join('.');
        cookie.set(tempCookie, tempCookie, {
            path: '/',
            domain: domain
        });
        if (cookie.get(tempCookie)) {
            cookie.remove(tempCookie);
            return domain;
        }
        arr.shift();
    }
};

export default getDomain;
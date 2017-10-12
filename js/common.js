new Vue({
    el: "#header",
    data: {
        iter_nav: null,
        nav: [
            { "href": "./index.html", "name": "Home" },
            { "href": "./note.html", "name": "Note" },
            { "href": "./demo.html", "name": "Demo" },
            { "href": "./more.html", "name": "More" },
        ]
    }
});

new Vue({
    el: "#footer",
    data: {
        foot: [{
                "title": "Entertainment",
                "contents": [
                    { "href": "https://www.zhihu.com/", "content": "知乎" },
                    { "href": "http://fanyi.baidu.com/", "content": "百度翻译" },
                    { "href": "http://www.csdn.net/", "content": "CSDN" },
                    { "href": "https://gold.xitu.io/", "content": "掘金" },
                ]
            },
            {
                "title": "Profession",
                "contents": [
                    { "href": "http://stackoverflow.com/", "content": "Stack Overflow" },
                    { "href": "https://github.com/", "content": "Github" },
                    { "href": "https://segmentfault.com/", "content": "Segmentfault" },
                    { "href": "https://zhidao.baidu.com/", "content": "百度知道" },
                ]
            },
            {
                "title": "Dictionary",
                "contents": [
                    { "href": "https://developer.mozilla.org/zh-CN/", "content": "MDN" },
                    { "href": "http://cn.vuejs.org/", "content": "Vue" },
                    { "href": "http://jquery.com/", "content": "jQuery" },
                    { "href": "http://www.jb51.net/onlineread/JavaScript-Garden-CN/", "content": "JS秘密花园" },
                ]
            },
            {
                "title": "More",
                "contents": [
                    { "href": "https://www.v2ex.com/?tab=jobs", "content": "V2EX" },
                ]
            },
        ]
    }
});


// 平滑滚动
function scroll(el, num) {
    $(el).click(() => {
        $("body").animate({ scrollTop: num }, 500);
    });
}

// 节流函数
function delayFn(fn, delay) {
    var timer = false;
    $(window).scroll(function() {
        timer = true;
    });
    setInterval(function() {
        if (timer) {
            timer = false;
            fn();
        }
    }, delay);
}
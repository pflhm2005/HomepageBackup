new Vue({
    el: "#tip",
    data: {
        iter_tip: null,
        tips: [
            { "href": "tip_header", "src": "images/arrow.png" },
        ]
    }
});

new Vue({
    el: "#content",
    computed: {
        translate() {
            var iter = this.iter_demo === null ? 1 : this.iter_demo;
            return "transform:translateX(" + (-50 * (iter - 1)) + "px)";
        }
    },
    data: {
        iter_demo: null,
        iter_demo2: null,
        demos: [
            { "href": "./demo/cart/index.html", "name": "淘宝购物车" },
            { "href": "./demo/comment/index.html", "name": "微博评论" },
            { "href": "./demo/yhd/index.html", "name": "一号店移动端" },
            // { "href": "./demo/xckoo/index.html", "name": "炫彩静态主页" },
        ],
        details: [{
                "pic1": 'images/cart01.png',
                "pic2": 'images/cart02.png',
                "pic3": 'images/cart03.png',
                "pic4": 'images/cart04.png',
            },
            {
                "pic1": 'images/comment01.png',
                "pic2": 'images/comment02.png',
                "pic3": 'images/comment03.png',
                "pic4": 'images/comment04.png',
                "pic5": 'images/comment05.png',
            },
            {
                "pic1": 'images/yhd01.png',
                "pic2": 'images/yhd02.png',
                "pic3": 'images/yhd03.png',
                "pic4": 'images/yhd04.png',
            },
            // {
            //     "pic1": 'images/xckoo01.png',
            //     "pic2": 'images/xckoo02.png',
            // }
        ]
    }
});

$(function() {
    scroll(".tip_header", 0);
});
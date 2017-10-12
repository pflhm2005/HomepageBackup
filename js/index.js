new Vue({
    el: "#tip",
    data: {
        iter_tip: null,
        tips: [
            { "href": "tip_banner", "str": "Rogue" },
            { "href": "tip_work", "str": "work" },
            { "href": "tip_skill", "str": "skill" },
            { "href": "tip_footer", "str": "foot" },
            { "href": "tip_header", "src": "images/arrow.png" },
        ]
    }
});

new Vue({
    el: "#banner",
    data: {
        data: {
            "date": "2017-02-20",
            "results": [{
                "currentCity": "深圳市",
                "pm25": "46",
                "index": [{ "title": "穿衣", "zs": "舒适", "tipt": "穿衣指数", "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。" }],
                "weather_data": [{ "date": "周一 02月20日 (实时：17℃-24℃)", "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png", "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png", "weather": "多云", "wind": "微风", "temperature": "25 ~ 15℃" }]
            }]
        },
        date: null,
        location: null,
        tips: null,
        pm: null,
        des: null,
        tipt: null,
        title: null,
        zs: null,
        weather: null,
        temp: null,
        wind: null
    },
    methods: {
        Initialization: function() {
            this.date = this.data.date;
            this.location = this.data.results[0].currentCity;
            this.des = this.data.results[0].index[0].des;
            this.tipt = this.data.results[0].index[0].tipt;
            this.title = this.data.results[0].index[0].title;
            this.zs = this.data.results[0].index[0].zs;
            this.pm = this.data.results[0].pm25;
            this.temp = this.data.results[0].weather_data[0].date;
            this.weather = this.data.results[0].weather_data[0].weather;
            this.wind = this.data.results[0].weather_data[0].wind;
        }
    },
    created() {
        //垃圾 不让我请求
        // this.$http.get("https://api.jirengu.com/weather.php?callback=getWeather").then((result) => {
        //     this.data = result.data;
        //     this.Initialization();
        // }, (err) => {
        //     console.log(err);
        this.Initialization();
        // });
    }
});

//挂载工作经历
new Vue({
    el: "#work",
    data: {
        works: [{
                "src": "images/icon2.png",
                "title": "开心网实习运营",
                "content": "负责开心网一统天下台湾方的运营 做了一段时间客服后转的运营 月流水在1200万左右"
            },
            {
                "src": "images/icon3.png",
                "title": "一口科技",
                "content": "同学的创业公司 带我入门前端 接外包练习页面 自学前沿技术"
            },
            {
                "src": "images/icon4.jpg",
                "title": "???",
                "content": "找份前端工作 养家糊口"
            },
            {
                "src": "images/icon5.jpg",
                "title": "???",
                "content": "未来可能要做个全栈"
            },
        ]
    }
});

//挂载技能树
new Vue({
    el: "#skill",
    data: {
        trees: [{
                "name": "HTML(5)",
                "percentage": "60%",
                "color": "linear-gradient(to right,#eee, #999, #66FFFF, #66FF66)",
                "tips": "熟悉HTML5新标签、表单输入类型与API，了解本地储存"
            },
            {
                "name": "CSS(3)",
                "percentage": "60%",
                "color": "linear-gradient(to right,#eee, #999, #66FFFF, #66FF66)",
                "tips": "熟悉伪元素、伪类选择器，阴影，渐变过渡与2D变换，了解伸缩布局"
            },
            {
                "name": "bootstrap",
                "percentage": "20%",
                "color": "linear-gradient(to right,#eee, #999)",
                "tips": "了解栅格系统与响应式原理，不怎么喜欢用bootstrap，一般样式都自己写"
            },
            {
                "name": "less",
                "percentage": "60%",
                "color": "linear-gradient(to right,#eee, #999, #66FFFF, #66FF66)",
                tips: "能熟练运用less特殊语法与变量书写css样式"
            },
            {
                "name": "JS",
                "percentage": "60%",
                "color": "linear-gradient(to right,#eee, #999, #66FFFF, #66FF66)",
                "tips": "深入阅读jQuery源码，理解Sizzle引擎与链式调用原理，阅读过vue源码，了解vue单绑原理，熟悉原生JS"
            },
            {
                "name": "jQuery",
                "percentage": "60%",
                "color": "linear-gradient(to right,#eee, #999, #66FFFF, #66FF66)",
                "tips": "熟练运用jQuery相关方法，了解原理，并能造一个简单的轮子"
            },
            {
                "name": "Vue2",
                "percentage": "70%",
                "color": "linear-gradient(to right,#eee,  #999,#66FFFF, #66FF66,#66FF00)",
                "tips": "熟练运用vue相关发方法，熟悉内置指令、模板语法"
            },
            {
                "name": "Angular1",
                "percentage": "20%",
                "color": "linear-gradient(to right,#eee, #999)",
                "tips": "jQ后钻研的第一个框架，上手比较慢，熟悉后转学vue入门很快，目前仅熟悉相关语法，较少使用"
            },
            {
                "name": "Webpack",
                "percentage": "20%",
                "color": "linear-gradient(to right,#eee, #999)",
                "tips": "学习.vue组件学过一段时间，熟悉配置过程，较少使用"
            },
            {
                "name": "Node.js",
                "percentage": "30%",
                "color": "linear-gradient(to right,#eee, #999,#66FFFF)",
                "tips": "学node主要了解后台工作原理，可以搭建一个简易后台处理请求"
            },
            {
                "name": "express",
                "percentage": "40%",
                "color": "linear-gradient(to right,#eee, #999,#66FFFF)",
                "tips": "熟悉nodeAPI后学的后台框架，刷了express in action英文版，能自己搭建前后端进行请求响应，对后台了解帮助很大"
            },
            {
                "name": "mongodb",
                "percentage": "40%",
                "color": "linear-gradient(to right,#eee, #999,#66FFFF)",
                "tips": "能使用express框架的mongoose模块进行数据库的增删改查"
            },
        ]
    }
});

$(function() {
    var didScroll = false;
    scroll(".tip_header", 0);
    scroll(".tip_banner", 100);
    scroll(".tip_work", 710);
    scroll(".tip_skill", 1650);
    scroll(".tip_footer", 2200);

    // 只是动画效果 并没有动态加载
    function showDetail() {
        var px = $(this).scrollTop(),
            work = $('.wel-list');

        if (px > 500) {
            work.css('opacity', 1);
        }
        if (px > 1400) {
            $('.progress').css({ 'fontSize': '14px', 'width': '90%' });
        }
    }

    delayFn(showDetail, 300);
});
new Vue({
    el: "#tip",
    data: {
        iter_tip: null,
        tips: [
            { "href": "tip_header", "src": "images/arrow.png" },
        ]
    }
});


//挂载轮播图
new Vue({
    el: "#plugin",
    data: {
        guide: [{
                "p": "一个模仿自定义的轮子 参考了jQuery 支持简单选择 animate函数 简易轮播图(当然没jQ那么厉害就是了)"
            },
            {
                "p": "轮播图：css样式已经在js文件中定义 唯一需要的只是设置图片路径",
            },
            {
                "p": "使用时调用下面代码：",
                "pre": "$('父元素').slide(options)"
            },
            {
                "p": "可接受参数：",
                "pre": "{ width：宽度(纯数字或'*px'), height：高度, arrow：两侧箭头(false不显示), dot：右下方圆点(略), autoplay：自动轮播(false不显示、数字为轮播间隔) }"
            },
            {
                "p": "默认参数为：",
                "pre": "{ width : 400px, height : 530px, dot : true, arrow : true, autoplay : 2000 }"
            },
            {
                "p": "格式非常简单 请保持一致"
            },
        ],
        slides: [
            { "src": "images/1.jpg" },
            { "src": "images/2.jpg" },
            { "src": "images/3.jpg" },
            { "src": "images/4.jpg" },
            { "src": "images/5.jpg" },
            { "src": "images/6.jpg" },
            { "src": "images/7.jpg" },
            { "src": "images/8.jpg" },
            { "src": "images/9.jpg" },
        ]
    }
});

$(function() {
    scroll(".tip_header", 0);
});
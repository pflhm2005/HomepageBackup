import Vue from 'vue'
import vueRouter from 'vue-router'
import $ from 'jq'
require('./css/common.css')
require('./css/note.css')
require('./js/common')
import HTML5_index from './vue/HTML5-index.vue'
import HTML5_1 from './vue/HTML5-1.vue'
import HTML5_2 from './vue/HTML5-2.vue'
import HTML5_3 from './vue/HTML5-3.vue'
import CSS3_index from './vue/CSS3-index.vue'
import CSS3_1 from './vue/CSS3-1.vue'
import CSS3_2 from './vue/CSS3-2.vue'
import CSS3_3 from './vue/CSS3-3.vue'
import CSS3_4 from './vue/CSS3-4.vue'
import CSS3_5 from './vue/CSS3-5.vue'
import JS_index from './vue/js-index.vue'
import JQ_index from './vue/jQ-index.vue'
import jQ_method from './vue/jQ_method.vue'
import jQ_Sizzle from './vue/jQ_Sizzle.vue'
import Sizzle from './vue/Sizzle.vue'
import Selector from './vue/Selector.vue'
import tokenize from './vue/tokenize.vue'
import compile from './vue/compile.vue'

Vue.use(vueRouter);

const str1 = '<div><h5>';
const str2 = '</h5><router-view></router-view></div>';
const arr = ["HTML5", "CSS3", "JS", "jQuery"];
const HTML5 = { template: str1 + arr[0] + str2 };
const CSS3 = { template: str1 + arr[1] + str2 };
const JS = { template: str1 + arr[2] + str2 };
const JQ = { template: str1 + arr[3] + str2 };

//组件 => 路径的路由映射
var router = new vueRouter({
    routes: [{
            path: "/",
            component: { template: "<h1>点击左侧列表即可浏览</h1>" }
        },
        {
            path: "/HTML5/",
            component: HTML5,
            children: [
                { path: "", component: HTML5_index },
                { path: "part-1", component: HTML5_1 },
                { path: "part-2", component: HTML5_2 },
                { path: "part-3", component: HTML5_3 },
                { path: "part-4", component: { template: "#HTML5-4" } },
                { path: "part-5", component: { template: "#HTML5-5" } },
            ]
        },
        {
            path: "/CSS3/",
            component: CSS3,
            children: [
                { path: "", component: CSS3_index },
                { path: "part-1", component: CSS3_1 },
                { path: "part-2", component: CSS3_2 },
                { path: "part-3", component: CSS3_3 },
                { path: "part-4", component: CSS3_4 },
                { path: "part-5", component: CSS3_5 },
            ]
        },
        {
            path: "/JS/",
            component: JS,
            children: [
                { path: "", component: JS_index },
                { path: "JS1", component: { template: "<div>JS1</div>" } },
                { path: "JS2", component: { template: "<div>JS2</div>" } },
                { path: "JS3", component: { template: "<div>JS3</div>" } },
                { path: "JS4", component: { template: "<div>JS4</div>" } },
                { path: "JS5", component: { template: "<div>JS5</div>" } },
            ]
        },
        {
            path: "/jQuery/",
            component: JQ,
            children: [
                { path: "", component: JQ_index },
                { path: "method", component: jQ_method },
                { path: "Sizzle", component: jQ_Sizzle }
            ]
        },
        //嵌套路由在x-template中无法渲染 也不知道怎么写 重新定义
        //锚跳转不会回到顶部 僵硬
        { path: "/jQuery/Sizzle/Sizzle", component: Sizzle },
        { path: "/jQuery/Sizzle/Selector", component: Selector },
        { path: "/jQuery/Sizzle/tokenize", component: tokenize },
        { path: "/jQuery/Sizzle/compile", component: compile }
    ]
});

//模板地址的渲染
new Vue({
    el: "#contents",
    router: router,
    data: {
        iter: null,
        asides: [{
                "href": "/HTML5",
                "title": "HTML5",
                "list": [
                    { "list": "HTML5简介", "href": "/HTML5/part-1" },
                    { "list": "标签", "href": "/HTML5/part-2" },
                    { "list": "表单", "href": "/HTML5/part-3" },
                ]
            },
            {
                "href": "/CSS3",
                "title": "CSS3",
                "list": [
                    { "list": "CSS3简介", "href": "/CSS3/part-1" },
                    { "list": "CSS3选择器", "href": "/CSS3/part-2" },
                    { "list": "颜色与阴影", "href": "/CSS3/part-3" },
                    { "list": "边框与背景", "href": "/CSS3/part-4" },
                    { "list": "渐变与2D转换", "href": "/CSS3/part-5" },
                ]
            },
            {
                "href": "/JS",
                "title": "Javascript",
                "list": [
                    { "list": "js1", "href": "/JS/JS1" },
                    { "list": "js2", "href": "/JS/JS2" },
                    { "list": "js3", "href": "/JS/JS3" },
                    { "list": "js4", "href": "/JS/JS4" },
                    { "list": "js5", "href": "/JS/JS5" },
                ]
            },
            {
                "href": "/jQuery",
                "title": "jQuery",
                "list": [
                    { "list": "jQuery实用方法", "href": "/jQuery/method" },
                    { "list": "Sizzle引擎", "href": "/jQuery/Sizzle" },
                ]
            },
        ],
        HTML1: [
            { "href": "./", "name": "Jimmy" },
            { "href": "./note.html#/", "name": "Note" },
            { "href": "./note.html#/HTML", "name": "HTML" },
            { "href": "./ote.html#/HTML/HTML1", "name": "HTML1" },
        ]
    },
});

new Vue({
    el: "#tip",
    data: {
        iter_tip: null,
        tips: [
            { "href": "tip_header", "src": "images/arrow.png" },
        ]
    }
});

//jQ做点小特效
$(function() {
    var _ = $(".aside-title");
    _.click(function() {
        var len = _.length;
        while (len--) {
            $(_[len]).next().stop().slideUp();
        }
        $(this).next().stop().slideToggle();
    });
    scroll(".tip_header", 0);
});
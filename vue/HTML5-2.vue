<template>
<div id="template">
     <div class="path">
        <span>当前位置：</span>
        <span>/</span>
        <a href="./">Jimmy</a>
        <span>/</span>
        <a href="./note.html#/">Note</a>
        <span>/</span>
        <a href="./note.html#/HTML5">HTML5</a>
        <span>/</span>
        <a href="./note.html#/HTML5/part-2">新标签</a>
    </div>
    <h1>HTML5-part2</h1>
    <div class="box">
        <h2>语义化标签</h2>
        <p class="title">优点</p>
        <p class="quote">
            <span>便于SEO优化</span>
            <span>便于维护修改</span>
            <span>方便屏幕阅读器解析</span>
        </p>
        <p class="title">常见新标签</p>
        <p class="quote">
            <span>header => 头部</span>
            <span>nav => 导航</span>
            <span>main => 主要区域</span>
            <span>aside => 侧边栏</span>
            <span>section => 独立段</span>
            <span>footer => 底部</span>
        </p>
        <p class="title">不见新标签</p>
        <p class="quote">
            <span>mark => 标记</span>
            <span>progress => 进度条</span>
            <span>meter => 度量器</span>
            <span>detail => 详细信息</span>
            <span>summary => 标题</span>
        </p>
        <div class="title">表单输入类型</div>
        <div class="quote">
            <span>email => 邮箱</span>
            <span>url => 网址</span>
            <span>search => 搜索</span>
            <span>tel => 电话号码</span>
            <span>number => 数字</span>
            <span>range => 范围</span>
            <span>time => 时间(xx-xx)</span>
            <span>date => 日期(xxxx-xx-xx)</span>
            <span>color => 颜色(value="#xxxxxx")</span>
        </div>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
<template>
<div id="template">
     <div class="path">
        <span>当前位置：</span>
        <span>/</span>
        <a href="./">Jimmy</a>
        <span>/</span>
        <a href="./note.html#/">Note</a>
        <span>/</span>
        <a href="./note.html#/CSS3">CSS3</a>
        <span>/</span>
        <a href="./note.html#/CSS3/part-4">边框与背景</a>
    </div>
    <h1>CSS3-part4</h1>
    <div class="box">
        <h2>边框</h2>
        <p class="title">边框扩展</p>
        <p class="quote">
            <span>border-radius:x x x x/y y y y</span>
            <span>左上-右上-右下-左下/X轴-Y轴</span>
            <span>border-radius:50% 正圆</span>
        </p>
        <h2>背景</h2>
        <p class="title">背景尺寸</p>
        <p class="quote">
            <span>background-size：cover | contain</span>
            <span>cover：图片自调整覆盖父元素 可能会有拉伸</span>
            <span>contain：图片原尺寸放入父元素 默认值</span>
        </p>
        <p class="title">多重背景</p>
        <p class="quote">
            <span>background-image：url("") ... , url("") ... , ...</span>
        </p>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
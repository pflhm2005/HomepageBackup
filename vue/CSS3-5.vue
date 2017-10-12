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
        <a href="./note.html#/CSS3/part-5">渐变与2D转换</a>
    </div>
    <h1>CSS3-part5</h1>
    <div class="box">
        <h2>渐变</h2>
        <p class="title">线性(linear)渐变</p>
        <p class="quote">
            <span>background-image:linear-gradient(dir,color,color,...)</span>
            <span>dir:(to top|left|right|bottom)|(*deg)</span>
            <span>color:[color position(%|px)]</span>
        </p>
        <p class="title">径向(radial)渐变</p>
        <p class="quote">
            <span>background-image:radial-gradient(position,color,color,...)</span>
            <span>position:circle(圆)|ellipse(椭圆) at *px *px</span>
            <span>color:[color position(%|px)]</span>
        </p>
        <h2>2D转换(transform)</h2>
        <p class="title">位移</p>
        <p class="quote">
            <span>translate(X|Y|Z):*px|*%</span>
            <span>向X轴(右)、Y轴(下)、Z轴(指脸)发生位移</span>
        </p>
        <p class="title">旋转</p>
        <p class="quote">
            <span>rotate(X|Y|Z)(*deg)</span>
            <span>向X/Y/Z轴旋转一定角度</span>
        </p>
        <p class="title">缩放</p>
        <p class="quote">
            <span>scale(0-∞)</span>
            <span>参数代表缩放倍数</span>
        </p>
        <p class="title">倾斜</p>
        <p class="quote">
            <span>skew(X|Y)(*deg)</span>
            <span>向X/Y轴倾斜一定角度</span>
        </p>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
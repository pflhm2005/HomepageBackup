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
        <a href="./note.html#/CSS3/part-3">颜色与阴影</a>
    </div>
    <h1>CSS3-part3</h1>
    <div class="box">
        <h2>颜色</h2>
        <p class="title">5种颜色表示方式</p>
        <p class="quote">
            <span>默认单词：red,blue,aqua等</span>
            <span>rgb(,,)：rgb(0-255,0-255,0-255)</span>
            <span>十六进制#***：#xxx(相当于#xxxxxx)或#xxxxx</span>
            <span>rbga(,,,)：rbga(,,,0-1) 最后一个参数为透明度</span>
            <span>hsl(,,)：H(色调) => 0(360)红120绿240蓝,S(饱和) => 0%-100%,
                L(亮度) => 0%-100%</span>
        </p>
        <h2>阴影</h2>
        <p class="title">盒子阴影</p>
        <p class="quote">
            <span>box-shadow : *px *px (0-∞) (-∞-∞) color (inset)</span>
            <span>水平位移、垂直位移、模糊程度、扩展半径、阴影颜色、内嵌阴影(可选)</span>
        </p>
        <p class="title">盒子阴影</p>
        <p class="quote">
            <span>text-shadow : *px *px (0-∞) color</span>
            <span>水平位移、垂直位移、模糊程度、阴影颜色</span>
        </p>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
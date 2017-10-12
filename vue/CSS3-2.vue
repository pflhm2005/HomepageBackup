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
        <a href="./note.html#/CSS3/part-2">CSS3选择器</a>
    </div>
    <h1>CSS3-part2</h1>
    <div class="box">
        <h2>CSS3选择器</h2>
        <p class="title">属性选择器</p>
        <p class="quote">
            <span>a[attr = value] => 选择attr等于value的元素</span>
            <span>a[attr ^= value] => 选择以value开头的元素</span>
            <span>a[attr $= value] => 选择以value结尾的元素</span>
            <span>a[attr *= value] => 选择含有value的元素</span>
            <span>a[attr] => 选择含有attr属性的元素 </span>
        </p>
        <p class="title">伪类选择器</p>
        <p class="quote">
            <span>e: first-child => 选择第一个子元素</span>
            <span>e: last-child => 选择最后一个子元素</span>
            <span>e: nth-child(n) => 选择第n个子元素</span>
            <span>e: nth-last-child(n) => 选择倒数第n个子元素</span>
            <span>e: empty => 选择空元素</span>
            <span>e: target => 选择空元素</span>
            <span>e: not => 选择空元素</span>
        </p>
        <p class="title">伪元素选择器</p>
        <p class="quote">
            <span>e: before => 元素前添加元素</span>
            <span>e: after => 元素后添加元素</span>
            <span>tip: 1.必须有content:"" 2.默认行内元素 3.是真实元素</span>
        </p>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
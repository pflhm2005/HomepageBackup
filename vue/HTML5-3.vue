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
        <a href="./note.html#/HTML5/part-3">表单</a>
    </div>
    <h1>HTML5-part3</h1>
    <div class="box">
        <h2>表单</h2>
        <p class="title">表单输入类型</p>
        <div class="quote">
            <span>email => 邮箱地址</span>
            <span>便于维护修改</span>
            <span>方便屏幕阅读器解析</span>
        </div>
        <p class="title">表单元素datalist</p>
        <div class="quote">
            <span>用法</span>
            <div class="tag">
                <span>&lt;input type=&quot;text&quot; list=&quot;&quot;/&gt;</span>
                <span>&lt;datalist id = &quot;&quot; &gt;</span>
                <span class="t-in1">&lt;option value = &quot;&quot; &gt;&lt;/option&gt;</span>
                <span> &lt;/datalist&gt;</span>
            </div>
            <span>注意：input中的list值必须与datalist的id值一样</span>
        </div>
        <p class="title">表单属性</p>
        <div class="quote">
            <span>placeholder => 提示输入信息</span>
            <span>autofocus => 自动焦点</span>
            <span>autocomplete => 输入提交后 再次输入相同内容自动填充表单 依赖name属性</span>
            <span>required => 必须输入选项</span>
            <span>pattern => 正则验证</span>
            <span>multiple => ???</span>
        </div>
        <div class="title">表单事件</div>
        <div class="quote">
            <span>oninput => 输入事件</span>
            <span>oninvalid => 验证失败事件</span>
            <span>setCustomValidity() => 改变默认错误提示内容</span>
        </div>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
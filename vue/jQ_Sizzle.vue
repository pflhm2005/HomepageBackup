<template>
<div id="template">
     <div class="path">
        <span>当前位置：</span>
        <span>/</span>
        <a href="./">Jimmy</a>
        <span>/</span>
        <a href="./note.html#/">Note</a>
        <span>/</span>
        <a href="./note.html#/jQuery">jQuery</a>
        <span>/</span>
        <a href="./note.html#/jQuery/Sizzle">Sizzle</a>
    </div>
    <h1>Sizzle引擎</h1>
    <div class="box">
        <h2>-总体流程：</h2>
        <ul class="num_list">
            <li>
                <p>1. Sizzle主函数：</p>
                <span>入口函数，进行简单正则进行匹配， 优先使用原生方法(getElementBy*)并返回， 或者使用高级查询方法querySelector(All)，如果原生方法不支持或者返回有误，进入Selector()函数。</span>
            </li>
            <li>
                <p>2. Selector过滤函数：</p>
                <span>该函数首先会调用词法解析函数tokenize()，随后进行判断是否是多个选择器(类似$('div,span'))，进行搜索范围优化。</span>
                <span>-如果传进来的第一个词法解析元素是ID(类似$('#id>div')，将id对应的节点设为上下文，进入下一个环节</span>
                <span>-将最后一个数组对象作为种子seed用来过滤</span>
                <span>进入预编译函数compile()，传入词法解析参数并返回最后匹配结果</span>
            </li>
            <li>
                <p>3. tokenize词法解析</p>
                <span>优先调用缓存，没有缓存进行解析。调用正则对selector进行匹配，根据TAG,CLASS,ID等不同类型进行对象包装，解析完加入缓存并返回结果。</span>
            </li>
            <li>
                <p>4. compile编译</p>
                <span>查询缓存，并检查是否有进行词法解析。</span>
                <span>如果是第二种方法过滤，调用matcherFromTokens()进行原子匹配，返回原子匹配器。</span>
                <span>调用matchFromGroupMatchers()进行整体匹配并返回参数给compilerCache()进行编译并返回缓存结果。</span>
            </li>
            <li>
                <p>tips：</p>
                <span>原子匹配和编译函数还未理解，待完善，点击右侧查看函数源码。</span>
            </li>
        </ul>
        <ul class="Sizzle">
            <li><a href="./note.html#/jQuery/Sizzle/Sizzle">=>Sizzle</a></li>
            <li><a href="./note.html#/jQuery/Sizzle/Selector">=>Selector</a></li>
            <li><a href="./note.html#/jQuery/Sizzle/tokenize">=>tokenize</a></li>
            <li><a href="./note.html#/jQuery/Sizzle/compile">=>compile</a></li>
        </ul>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
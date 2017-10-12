<template>
    <div id="template">
        <div>
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
                <span>/</span>
                <a href="./note.html#/jQuery/Sizzle/tokenize">tokenize</a>
            </div>
            <h1>jQuery源码方法</h1>
            <div class="box">
                <h2>词法解析tokenize</h2>
                <pre>
        Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type,
                soFar, groups, preFilters,
                cached = tokenCache[selector + " "];
            <span>//有缓存直接返回</span>
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }

            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            <span>//如果soFar还有内容</span>
            while (soFar) {
                <span>//rcomma = /^ , */</span>
                <span>//!matched检测是否第一次运行或者还没有等待解析的字符串</span>
                <span>//在这里soFar是解析后的字符串</span>
                <span>//举例soFar = " ,span" 则match = " ,"</span>
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        //匹配后删除match匹配的内容 soFar="span"
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    <span>//第一次运行时tokens = [] 然后将tokens弹入groups</span>
                    groups.push((tokens) = []);
                }
                matched = false;

                <span>//关系匹配符 >+~空格</span>
                <span>//rcombinators = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/</span>
                <span>//举例:rcombinators.exec(" >div"))会匹配到[" >",">"]</span>
                if ((match = rcombinators.exec(soFar))) {
                    <span>//此表达式执行后matched = " >" match = [">"] </span>
                    matched = match.shift();
                    <span>//tokens = [{value:" >",type:">"}]</span>
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ");
                    });
                    <span>//获取到关系符后面的字符串 soFar = "div"</span>
                    soFar = soFar.slice(matched.length);
                }

                <span>//type = ["TAG","CLASS","ATTR","CHILD","PSEUDO"]</span>
                for (type in Expr.filter) {
                    <span>//matchExpr对象包含ID,CLASS等选择器的正则</span>
                    if ((match = matchExpr[type].exec(soFar)) &&
                        <span>//是否存在type类型的预过滤函数</span>
                        <span>//preFilters对象只对ATTR,CHILD,PSEUDO进行过滤</span>
                        (!preFilters[type] ||
                            <span>//进行预过滤并重新赋值</span>
                            <span>//预过滤举例 soFar = :nth-of-type(n)</span>
                            <span>//1. 正则匹配后 match = [":nth-of-type(n)","nth","of-type","n","(0)","undefined(n)","undefined","","1"]</span>
                            <span>//2. 过滤会对第4,5个数组元素进行设置 0,(n)</span>
                            <span>//3. 如果是nth-child(odd/even) 第4,5会设置为2,1(0)</span>
                            (match = preFilters[type](match)))) {
                        <span>//如果是无需过滤的 比如CLASS:(".div") TAG("div")</span>
                        <span>//那么CLASS: match = [".div","div"] TAG: match = ["div","div"]</span>
                        matched = match.shift();
                        tokens.push({
                            value: matched, //matched就是原匹配字符串
                            type: type, //type是匹配类型CLASS,TAG等
                            matches: match //match数组
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                <span>//如果匹配完了 就退出</span>
                if (!matched) {
                    break;
                }
            }
            <span>//soFar应该被解析完了 加入缓存</span>
            return parseOnly ? soFar.length :
                soFar ? Sizzle : error(selector):
                tokenCache(selector, groups).slice(0);
        }
                    </pre>
                <ul class="Sizzle">
                    <li><a href="./note.html#/jQuery/Sizzle/Sizzle">=>Sizzle</a></li>
                    <li><a href="./note.html#/jQuery/Sizzle/Selector">=>Selector</a></li>
                    <li><a href="./note.html#/jQuery/Sizzle/tokenize">=>tokenize</a></li>
                    <li><a href="./note.html#/jQuery/Sizzle/compile">=>compile</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
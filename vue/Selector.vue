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
                <a href="./note.html#/jQuery/Sizzle/Selector">Selector</a>
            </div>
            <h1>jQuery源码方法</h1>
            <div class="box">
                <h2>过滤函数Selector</h2>
                <pre>
        Sizzle.select = function select(selector, context, results, seed) {
            var i, tokens, token, type, find,
                <span>//如果selector是function类型 compiled = selector</span>
                compiled = typeof selector === "function" && selector,
                <span>//如果没有提供seed 调用tokenize(selector)</span>
                match = !seed && tokenize((selector = compiled.selector || selector));

            results = results || [];
            <span>//selector只有一个分组(tokenize函数中的soFar没有逗号)</span>
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);

                <span>//如果传进来的解析字符串对象数组tokens第一个元素type是ID</span>
                if (tokens.length > 2 && (token = token[0]).type === "ID" &&
                    <span>//context是document且文档是HTML</span>
                    context.nodeType === 9 && documentIsHTML &&
                    <span>//第二个字符是关系选择符</span>
                    Expr.relative[tokens[1].type]) {
                    <span>//范围指定为该节点</span>
                    context = (Expr.find["ID"](token.match[0].replace(runescape, funescape), context) || [])[0];
                    <span>//如果ID找不到直接返回</span>
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }
                    <span>//去除第一个ID</span>
                    selector = selector.slice(tokens.shift().value.length);
                }
                <span>//配合上面的if缩小范围</span>
                <span>//ID开头且第二个为关系运算符[>+~]则i置0</span>
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

                <span>//第二种缩小范围方式</span>
                while (i--) {
                    <span>//取出最后一个数组对象</span>
                    token = tokens[i];
                    <span>//Expr.relative包含4个关系运算符对象 " " + > ~</span>
                    <span>//最后一个是符号就出错了 直接返回</span>
                    if (Expr.relative[(type = token.type)]) {
                        break;
                    }
                    <span>//Expr.find包含三个类型函数对象 TAG ID CLASS</span>
                    <span>//只是简单的调用对应的getElementBy...返回对应的匹配标签</span>
                    <span>//这里find代表一个函数fn find(*){return getElementBy...(*)}</span>
                    if ((find = Expr.find[type])) {
                        if ((seed = find(
                                token.matches[0].replace(runescape, funescape),
                                <span>//rsibling是关系正则 /[+~]/</span>
                                rsibling.test(token[0].type) &&
                                <span>//context是document返回false</span>
                                testContext(context.parentNode) || context
                            ))) {
                            <span>//去掉已经解析出来的数组对象</span>
                            tokens.splice(i, 1);
                            <span>//seed长度为0  即上面find方法找不到对应标签 返回</span>
                            <span>//seed不为0 把tokens对象中的value拼接成字符串赋值给selector</span>
                            selector = seed.length && toSelector(tokens);
                            <span>//解析完了就返回</span>
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            <span>//跳出while</span>
                            break;
                        }
                    }
                }
            }
            <span>//break到这里 开始懵逼...</span>
            (compiled || compile(selector, match))(
                seed,
                context, !documentIsHTML,
                results, !context || rsibling.test(selector) &&
                testContext(context.parentNode) || context
            );
            return results;
        };
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
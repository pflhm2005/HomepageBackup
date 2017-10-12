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
                <a href="./note.html#/jQuery/Sizzle/Sizzle">Sizzle</a>
            </div>
            <h1>jQuery源码方法</h1>
            <div class="box">
                <h2>Sizzle主函数</h2>
                <pre>
        <span>//selector:css选择器 context:上下文或document results:结果 seed:初始集合</span>
        <span>//主函数优先调用浏览器默认解析方法 否则返回select方法继续解析</span>
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector,
                newContext = context && context.ownerDocument,
                nodeType = context ? context.nodeType : 9;
            
            <span>//初始化结果集</span>
            results = results || [];

            <span>//如果selector是非法字符 直接返回结果</span>
            if (typeof selector !== "string" ||
                !selector || nodeType !== 1 &&
                nodeType !== 9 && nodeType !== 11) {
                return results;
            }

            if (!seed) {
                if ((context ? context.ownerDocument ||
                        context : preferredDoc) !== document) {
                    setDocument(context);
                }
                <span>//上下文不设定就设置为全局</span>
                context = context || document;
            }
            <span>//documentIsHTML = !isXML(document)</span>
            if (documentIsHTML) {
                <span>//requickExpr为快速匹配简单ID/CLASS/TAG选择器的正则</span>
                <span>///^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/</span>
                <span>//1：ID 2：TAG 3：CLASS</span>
                if (nodeType !== 11 && (match = requickExpr.exec(selector))) {
                    <span>//匹配到#()*</span>
                    if (m = match[1]) {
                        <span>//节点类型为document对象</span>
                        if (nodeType === 9) {
                            if ((elem = context.getElementById(m))) {
                                <span>//elem是标签 m是对应标签的ID 相等说明匹配成功</span>
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                } else {
                                    return results;
                                }
                            }
                        }
                        <span>//如果传入的context不是document</span>
                        else {
                            if (newContext &&
                                (elem = newContext.getElementById(m)) &&
                                contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } /* match[1] */
                    <span>//匹配到标签div,span等等</span>
                    else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    }
                    <span>//匹配到.*</span>
                    else if ((m = match[3]) && support.getElementByClassName && context.getElementByClassName) {
                        push.apply(results, context.getElementByClassName(m));
                        return results;
                    }
                }
                <span>//如果支持高级查询querySelectorAll</span>
                if (support.qsa &&
                    <span>//且缓存中没有</span>
                    !compilerCache[selector + " "] &&
                    <span>//rbuggQSA = /:enabled|:disabled/</span>
                    (!rbuggQSA || !rbuggyQSA.test(selector))) {
                    if (nodeType !== 1) {
                        newContext = context;
                        newSelector = selector;
                    }
                    <span>//上下文不是document的情况 没见过</span>
                    else if (context.nodeName.toLowerCase() !== "object") {
                        if ((nid = context.getAttribute("id"))) {
                            nid = nid.replace(rcessescape, fcssescape);
                        } else {
                            context.setAttribute("id", (nid = expando));
                        }
                        groups = tokenize(selector);
                        i = groups.length;
                        while (i--) {
                            <span>//toSelector</span>
                            group[i] = "#" + nid + " " + toSelector(groups[i]);
                        }
                        newSelector = groups.join(",");
                        <span>//扩展context为下一个选择器?</span>
                        newContext = rsibling.test(selector) &&
                            testContext(context.parentNode) || context;
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            <span>//返回jQuery对象</span>
                            return results;
                        } catch (qsaError) {}
                        <span>//这个是应付上面的else</span>
                        finally {
                            if (nid === expando) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            <span>//原生方法搞不定 进入select函数</span>
            <span>//正则替换(" div ") --> ("div")</span>
            return select(selector.replace(rtrim, "$1"), context, results, seed);
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
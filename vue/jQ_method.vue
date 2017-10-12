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
            <a href="./note.html#/jQuery/method">method</a>
        </div>
        <h1>jQuery源码方法</h1>
        <div class="box">
            <h2>each遍历</h2>
            <pre>
        <span>//遍历类数组或对象的元素</span>
        <span>//第一个参数为对象 第二个参数为回调函数</span>
        <span>//回调函数第一个参数为索引 第二个为索引对应的值</span>
        function each(obj,callback){
            var length, i = 0;
            <span>//类数组</span>
            if(isArrayLike(obj)){
                length = obj.length;
                <span>//将索引和对应的值作为参数传入回调函数callback</span>
                for(; i < length ; i++ ){
                    if( callback.call( obj[i], i, obj[i] ) === false ){
                        break;
                    }
                }
            }
            <span>//对象</span>
            else{
                for( i in obj ){
                    if( callback.call( obj[i], i, obj[i]) === false ){
                        break;
                    }
                } 
            } 
            return obj;
        }
                    </pre>
            <h2>Duplicate去重</h2>
            <pre>
        var uniqueSort = function(results) {
            var elem, duplicates = [],
                j = 0,
                i = 0;
            while ((elem = results[i++])) {
                if (elem === results[i]) {
                    j = duplicates.push(i);
                }
            }
            while (j--) {
                results.splice(duplicates[j], 1);
            }
            sortInput = null;
            return results;
        };
                    </pre>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style src="../css/template.css"></style>
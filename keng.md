1.  框架引入配置`resolve => alias => xx:xx/dist/xx.common.js` 方便`import`引入
2.  四大模块加载 `vue-loader(.vue) => babel-loader(.js) => file-loader(.png...) => style-loader!css-loader(.css)`
3.  在需要`Vue`或`$`的地方单独`import`框架`.js`文件
4.  路由记得调用`Vue.use(vueRouter)`
5.  `vue`单文件的`css`样式冲突有两个解决方案 1.根元素使用`id`选择器  2.使用`scoped`
6.  变量命名不可用`-`，以后尽量用下划线`_`命名
7.  把路由配置和实例挂载丢到入口文件 不然乱得要死
8.  npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4 单独分离css的需要安装beta版才能跟webpack2匹配
9.  新版extract-text-webpack-plugin实例只接受一个参数

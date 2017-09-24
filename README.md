## 使用vue2开发一个商城 ##

使用webpack3+vue2+router2+mock开发一个商城创建项目

### 需求分析 ###

该商城由 首页、商品详情页、购物车、结算页组成

## 初始化 Vue 项目 ##

### 创建项目 ###

新建项目目录 vue-mail，在目录下执行 npm init --y 来创建一个 package.json，在 package.json 中添加以下必备的模块：


    "devDependencies": { 
	    "vue": "^2.4.4",
	    "vue-loader": "^13.0.5",
	    "vue-router": "^2.7.0",
	    "vue-template-compiler": "^2.4.4",
	    "webpack": "^3.6.0",
	    "webpack-dev-server": "^2.8.2",
	    "css-loader": "^0.28.7",
	    "file-loader": "^0.11.2",
	    "less": "^2.7.2",
	    "less-loader": "^4.0.5",
	    "stylus": "^0.54.5",
	    "stylus-loader": "^3.0.1",
	    "url-loader": "^0.5.9",
    	"mockjs": "^1.0.1-beta3"
    }

#### 创建目录结构如下 ####

	vueproject
		|-- package.json
		|-- index.html
		|-- webpack.config.js
		|--src
			|-- main.js
			|-- router.js
			|-- app.vue
			|-- assets
			|-- views
				|-- index.vue
				|-- details.vue
				|-- sort.vue
				|-- cart.vue
				|-- mine.vue
			|-- mock
				|-- mock.js
			|-- components
				|-- header.vue
				|-- toolbar.vue
				|-- module-1.vue
				|-- module-2.vue
				|-- module-3.vue


**webpack.config.js** 代码如下

	module.exports = {
		entry: './src/main.js',
		output: {
			path: __dirname,
			publicPath: '/dist/',
			filename: 'build.js'
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: ["vue-loader"]
				},
				{
					test: /\.css$/,
					use: ["vue-style-loader", "css-loader"]
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					use:[
							{
								loader: "url-loader",
								options: 'images/[name].[hash:7].[ext]'
							}
					]
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					use: [
							{
							loader: 'url-loader',
							options: {
								limit: 1000,
								name: 'fonts/[name].[hash:7].[ext]'
							}
						}
					]
				},
				{
				    test: /\.styl$/,
				    use: ["vue-style-loader", "css-loader", "stylus-loader"]
				}
			]
		}
	}

配置 webpack-dev-server，在 package.json 添加如下代码：

	"scripts": {
		"dev": "webpack-dev-server --inline --hot --open"
	}



**index.vue**

	<template>
		<div>
			这是 {{page}} 页面
		</div>
	</template>
	<script>
		export default {
			data: function () {
				return {
					page: 'index'
				}
			}
		}
	</script>


### 配置路由 ###

将 vue-router 实例化传入参数 **new VueRouter(参数)** 提取到 router.js 形成路由配置文件

router.js 添加代码如下：

	import index from './views/index.vue'

	export default {
		routes: [
			{
				path: '/',
				redirect: '/index'
			},
			{
				path: '/index',
				component: index
			}
		]
	}

### index.html ###

修改 index.html 代码如下：

	<body>
	<div id="app"></div>
	<script src="/dist/build.js"></script>
	</body>

### main.js ###

添加 main.js 代码如下

	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueResource from 'vue-resource';

	import App from './app.vue';
	import routerConfig from './router';

	Vue.use(VueRouter);
	Vue.use(VueResoure);

	var router = new VueRouter(routerConfig);

	new Vue({
		el: '#app',
		router: router,
		render: h => h(App)
	})

### app.vue ###

app.vue 添加代码如下：

	<template>
	<div>
		<div>
			<router-link to="/index">Home</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
	</template>

### 添加组件代码 ###

在 components 下创建以下组件:

header.vue、toolbar.vue、module-1.vue、module-2.vue、module-3.vue

**header.vue**
	
	<template>
		<div class="header">
			header 组件
		</div>
	</template>

**toolbar.vue**

	<template>
		<div class="toolbar">
			toolbar 组件
		</div>
	</template>

**module-1.vue**

	<template>
		<div class="module-1">
			module-1 组件
		</div>
	</template>

**module-2.vue**

	<template>
		<div class="module-2">
			module-2 组件
		</div>
	</template>

**module-3.vue**

	<template>
		<div class="module-3">
			module-3 组件
		</div>
	</template>

**mock.js**
	var Mock = require('mockjs');
	var data = Mock.mock('/mock',function(){
	    return{
	        data: ['a','b']
	    }
	})

##项目开始##
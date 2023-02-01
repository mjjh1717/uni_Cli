# uni_app 基础架构
# 注意事项
## 语法相关
### uni-app虽然支持div的写法，但是还是推荐使用view来编写代码，div会影响编译速度,并且div不是跨平台的

### uni-app中虽然支持wx.xxx的api写法，但是为了兼容性，建议使用uni.xxx的api来替代

### 如果需要多平台编译不同的代码，推荐使用条件编译的形式 [条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
​```
<!-- #ifdef APP-PLUS -->
	代码块
<!-- #endif -->
​```
### 常用内置组件
#### div -> view
#### span -> text
#### img -> image
#### scrollview 滚动

### 调试用屏幕大小 以 iphone 6 为准 开发使用长度单位 rpx

### 图片，当图片小于40kb时，uni-app会默认将图片打包成为base64，大于40kb时，需要将图片转换成在线链接引用或自己转成base64
#### 图片引用推荐使用以~@开头的绝对路径
#### 如果需要自动转换，则需要将图片路径放置到static根路径下

### 字体图标，导入到本地后，导入到公共Css中，然后直接添加class使用

## 组件相关
### 使用uni-ui组件库,具体使用哪个组件可以uni官网查看api [uni官网](https://ext.dcloud.net.cn/plugin?id=55)

#### 需要重写对应组件样式，请找到对应组件的class，然后如下代码修改，必须带上!important 不然属性不会生效
​```
:deep(.uni-forms-item__label){
	color: pink !important
}
​```
## 通讯相关
### 在uni-app中常用页面通讯的方式有以下几种
#### 1.使用url查询字符串和EventChannel
#### 2.使用事件总线
#### 3.全局数据globalData
#### 4.本地存储数据
#### 5.使用vuex或pinia,状态管理库

### 在uni-app中可以使用两种生命周期，一种是组件的生命周期，一种是页面的生命周期，在使用setup语法时，组件的生命周期由vue中导入，页面的生命周期由@dcloudio/uni-app中导入


## 代码格式化
### 关于样式格式化，请安装 eslint-js eslint-vue prettier插件，并将hbuilder中工具-设置-插件 修改为对应文件
#### eslint-js
​```
// 详细配置教程请参考：http://eslint.cn/docs/user-guide/configuring
module.exports = {
	"plugins": [
		"html"
	],
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		},
		"allowImportExportEverywhere": false
	},
	"rules": {
		"no-alert": 0,
		"eqeqeq": ["error", "always"], // 用强等于做判断
		"semi": ["error", "never"], // 结尾不分号
		"no-multi-spaces": "error",
		"quotes": ["error", "single"], // 使用单引号
		"arrow-parens": ["error", "as-needed"], // 简略箭头函数
		"object-curly-newline": ["error", { "multiline": true }], // 在属性内部或属性之间有换行符，就要求有换行符
		"object-curly-spacing": ["error", "always"] // 要求花括号内有空格 (除了 {})
	}
};
​```

#### eslint-vue
​```
//更详细的配置文档请参考：https://github.com/vuejs/eslint-plugin-vue#gear-configs
module.exports = {
    "extends": "plugin:vue/base",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": 'module'
    },
    'settings': {
        'html/html-extensions': [
          ".erb",
          ".handlebars",
          ".hbs",
          ".htm",
          ".html",
          ".mustache",
          ".nunjucks",
          ".php",
          ".tag",
          ".twig",
          ".wxml",
          ".we",
        ]
    },
    "rules":{
				/*
				"off" 或 0 - 关闭规则
				"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
				"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
				*/
				"camelcase": 2,           //强制驼峰法命名
				"id-match": 0,            //命名检测  
				"init-declarations": 1,   //声明时必须赋初值  
				"no-undef": 1,            //不能有未定义的变量 
				"no-alert": 0,
				"semi": [1, 'never'], // 要求或禁止使用分号代替 ASI
				"no-extra-semi":1, //禁止不必要的分号
				'space-before-function-paren': [2, 'always'], // 函数前面加上空格
				'indent': ["off", 2], // 相同的缩进2
				'eqeqeq': 2, // 使用全等
				"no-multi-spaces": "error", //禁止使用多个空格
				"quotes": ["error", "single"],
				"no-multiple-empty-lines":["warn", { "max": 1, "maxEOF": 1 }], //禁止出现多行空行
				"no-trailing-spaces":1,//禁用行尾空格
				"no-dupe-keys":'error', //禁止对象字面量中出现重复的 key
				"key-spacing":[ // 强制在对象字面量的属性中键和值之间使用一致的间距
					"warn", 
					{ "afterColon": true },
				],
				"comma-dangle": ["error", "never"], //要求或禁止末尾逗号
        //在computed properties中禁用异步actions
        'vue/no-async-in-computed-properties': 'error',
        //不允许重复的keys
        'vue/no-dupe-keys': 'error',
        //不允许重复的attributes
        'vue/no-duplicate-attributes': 'warn',
        //在 <template> 标签下不允许解析错误
        'vue/no-parsing-error': ['error',{
            'x-invalid-end-tag': false,
        }],
        //不允许覆盖保留关键字
        'vue/no-reserved-keys': 'error',
        //强制data必须是一个带返回值的函数
        // 'vue/no-shared-component-data': 'error',
        //不允许在computed properties中出现副作用。
        'vue/no-side-effects-in-computed-properties': 'error',
        //<template>不允许key属性
        'vue/no-template-key': 'warn',
        //在 <textarea> 中不允许mustaches
        'vue/no-textarea-mustache': 'error',
        //不允许在v-for或者范围内的属性出现未使用的变量定义
        'vue/no-unused-vars': 'warn',
        //<component>标签需要v-bind:is属性
        'vue/require-component-is': 'error',
        // render 函数必须有一个返回值
        'vue/require-render-return': 'error',
        //保证 v-bind:key 和 v-for 指令成对出现
        'vue/require-v-for-key': 'error',
        // 检查默认的prop值是否有效
        'vue/require-valid-default-prop': 'error',
        // 保证computed属性中有return语句 
        'vue/return-in-computed-property': 'error',
        // 强制校验 template 根节点
        'vue/valid-template-root': 'error',
        // 强制校验 v-bind 指令
        'vue/valid-v-bind': 'error',
        // 强制校验 v-cloak 指令
        'vue/valid-v-cloak': 'error',
        // 强制校验 v-else-if 指令
        'vue/valid-v-else-if': 'error',
        // 强制校验 v-else 指令 
        'vue/valid-v-else': 'error',
        // 强制校验 v-for 指令
        'vue/valid-v-for': 'error',
        // 强制校验 v-html 指令
        'vue/valid-v-html': 'error',
        // 强制校验 v-if 指令
        'vue/valid-v-if': 'error',
        // 强制校验 v-model 指令
        'vue/valid-v-model': 'error',
        // 强制校验 v-on 指令
        'vue/valid-v-on': 'error',
        // 强制校验 v-once 指令
        'vue/valid-v-once': 'error',
        // 强制校验 v-pre 指令
        'vue/valid-v-pre': 'error',
        // 强制校验 v-show 指令
        'vue/valid-v-show': 'error',
        // 强制校验 v-text 指令
        'vue/valid-v-text': 'error',
        'vue/comment-directive': 0
    }
};
​```
#### 打开保存自动格式化 工具-设置-编辑器配置-保存时自动格式化



## 项目目录结构
### api - 请求接口文件
### components - 组件文件
### pages - 页面文件
### static - 静态资源
### uni_modules uni-ui组件仓库
### unpackage - 打包生成文件
### utils - 工具类
### App.vue - 入口组件
#### 小程序应用的生命周期函数
#### 全局的样式配置
#### 定义全局的数据
### index.html - 入口的html文件
### main.js - 入口文件
### manifest.json -  清单配置文件
#### 配置名称，版本号，图标等
### pahes.json -  等同于小程序中的app.json
#### 配置页面，基础配色，标题等
### README.MD - 说明文档
### uni.scss - uniapp内置的样式变量
#### 全局的样式声明
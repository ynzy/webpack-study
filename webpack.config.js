const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: path.join(__dirname,'./src/main.js'), //入口,表示使用webpack打包哪个文件
  output: { //输出文件相关配置
    path: path.join(__dirname, './dist'), //指定打包好的文件,输出到哪个目录中去
    filename: 'bundle.js' //指定 输出文件的名称
  },
  devServer: { //这是配置 dev-server 命令参数,相对来说,这种方式麻烦一些
    //webpack-dev-server --open --port 3000 --contentBase src --hot
    open: true, //自动打开浏览器
    port: 3000, //设置启动时候的运行端口
    contentBase: 'src', //指定托管的根目录
    hot: true //启动热更新
  },
  plugins:[//配置插件的节点
    new webpack.HotModuleReplacementPlugin(), //new 一个热更新的模块对象
    new htmlWebpackPlugin({//创建一个 在内存中 生成html 页面的插件
      template: path.join(__dirname, './src/index.html'), //指定模板页面,将来会根据指定的页面路径,去生成内存中的 页面
      filename: 'index.html' //指定生成页面的名称
    }),
    new VueLoaderPlugin(),  //配置vueloader插件
  ],
  module: { //配置 所有第三方模块 加载器
    rules: [ //所有第三方模块的 匹配规则
      { test: /\.css$/, use:['style-loader', 'css-loader']}, //处理.css文件的第三方loader 规则
      { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']}, //处理.less文件
      { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}, //处理.scss文件
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=92,569.6&name=[hash:8]-[name].[ext]'}, //处理图片图片路径    ]
      //limit 给定的值是图片的大小,单位是byte,如果我们引用的图片,大于或等于给定的值,则不会被转为base64格式的字符串,
      //如果小于给定的limit的值,则会转为base64格式的字符串
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'}, //处理字体文件 
      { test: /\.js$/, use:'babel-loader', exclude:/node_modules/ }, //处理.js文件,`exclude`排除文件
      { test: /\.vue$/, use:'vue-loader'}, //处理.vue文件
    ]
  },
  resolve: {
    alias: { //设置 vue 被导入时候包的路径
      "vue$":'vue/dist/vue.js'
    }
  }
}

// webpack 要打包的文件的路径  打包好的输出文件的路径

// 当我们在 控制台,直接输入 webpack 命令执行的时候,webpack 做了以下几步:
/** 
 * 1. 首先,`webpack`发现,我们并没有通过命令形式,给它指定入口和出口
 * 2. webpack 就会去 项目的根目录中,查找一个叫做 `webpack.config.js` 的配置文件
 * 3. 当找到配置文件后,webpack 会去解析执行这个配置文件,当解析执行完配置文件后,就得到了配置文件中导出的配置对象.
 * 4. 当webpack 拿到配置对象后,就拿到了配置对象中,指定的入口和出口,然后进行打包构建.
 * 
*/

// 使用 webpack-dev-server这个工具,来实现自动打包编译的功能
/** 
 * 1. 运行 `yarn add webpack-dev-server -D` 把这个工具安装到项目的本地开发依赖
 * 2. 安装完毕后,这个工具的用法,和webpack命令的用法,完全一样
 * 3. 由于,我们是在项目中,本地安装的 `webpack-dev-server`,所以,无法把它当做脚本命令,
 * 在poweshell 终端中直接执行(只有那些安装到 全局 -g 的工具,才能在终端中正常执行)
 * 4. 注意: webpack-dev-server 这个工具,如果想要正常运行,要求在本地项目中,必须安装webpack
 * 5. webpack-dev-server帮我们打包生成的bundle.js 文件,并没有存放到实际的物理磁盘上;
 * 而是,直接托管到电脑的内存中,所以,我们在项目根目录中找不到这个打包好的bundle.js
 * 6. 我们可以认为, webpack-dev-server 把打包好的文件,以一种虚拟的形式,托管到了项目的根目录中,
 * 虽然我们看不到它,但是,可以认为,和 dist src node_modules 平级,有一个看不见的文件.叫做 bundle.js
*/

// 在内存中生成html的插件`html-webpack-plugin`
/** 
 * 1. 导入在内存中生成页面的插件`html-webpack-plugin`
 * 2. 在webpack.config.js中引入html-webpack-plugin
 * 3. new htmlWebpackPlugin()创建一个生成页面的插件
 * 作用:
 * (1)自动在内存中根据指定页面生成一个内存的页面
 * (2)自动把打包好的bundle.js追加到页面中去
*/

// webpack,默认只能默认打包处理js类型文件,无法处理 其他的 非js类型文件
// 如果要处理非js类型的文件,我们需要手动安装一些合适的第三方loader加载器
/**
 * 1. 如果想要打包处理css文件,需要安装 `npm i style-loader css-loader -D`
 * 2. 在webpack.config.js中新增一个配置节点,`module`对象,
 * 在module对象上,有一个`rules`属性,这个属性是一个数组,这个数组中存放了所有第三方文件的匹配和处理规则
 */

 // 注意: webpack 处理第三方文件类型的过程:
 /**
  * 1. 发现这个 要处理的文件不是js文件,然后去配置文件中,查找有没有对应的第三方loader规则
  * 2. 如果能找到对应的规则,就对调用对应的loader处理这种文件类型;
  * 3. 在调用loader 的时候,是从后往前调用的(从右到左);
  * 4. 当最后的一个loader调用完毕,会把处理的结果,直接交给webpack进行打包合并,最终输出到bundle.js中去
  */

//复习
/**
 * 1. `npm init` 初始化package.json
 * 2. `yarn add webpack -D`安装本地webpack
 * 3. `webpack .\src\main .\dist\bundle.js`打包目标文件输出到dist文件夹下
 * 4. `yarn add webpack-der-server -D`安装webpack-der-server进行项目实时打包
 * 5. 配置`webpack.config.js` 文件
    ```js
    var path = require('webpack')
    module.exports = {
      entry: 入口文件
      output: 输出文件
      devServer: 配置 dev-server 命令参数
      plugins: 配置插件
      module: 配置 所有第三方模块 加载器
    }
    ```
 * 6. `yarn add html-webpack-plugin -D`在内存中 生成html 页面的插件,在plugins中进行配置
 * 7. `yarn add style-loader css-loader less less-loader node-sass sass-loader -D`
      安装第三方模块 加载器,在module中进行rules的配置
 */

 // 默认情况下,webpack 无法处理 css文件中的url地址,不管是图片还是字体库,主要是url地址都处理不了
 /**
  * 1. `yarn add url-loader file-loader -D`
  * 2. 配置相应规则
  */

/**
 * 在webpack中,默认只能处理一部分 ES6的新语法,一些更高级的es6语法或者es7语法,
   webpack是处理不了的,这时候需要 借助第三方的loader, 来帮助webpack处理这些高级的语法.
   当第三方loader 把 高级语法 转为 低级语法之后,会把结果交给webpack 去打包到 bundle.js.
   通过 Babel,可以帮我们将 高级的语法 转换为 低级的语法
   1. 在 webpack中,可以运行如下两套命令,安装两套包,去安装 Bable 相关的loader功能;
      第一套包: `npm i babel-core babel-loader plugin-transform-runtime -D`
      第二套包: `npm i babel-preset-env babel-preset-stage-0 -D`
   2.在webpack.config.js中,module节点下的rules数组中,添加规则 
      { test: /\.js$/, use:'babel-loader', exclude:/node_modules/ }, //处理.js文件,`exclude`排除文件
      注意:在配置bable的loader规则的时候,必须把 node_module目录,通过 exclude选项排除掉.
          原因: (1)如果不排除node_module,则babel会把node_module中所有的第三方js文件打包编译,会非常消耗cup,打包速度非常慢
                (2)最终babel把所有的node_modules中的js转换完毕了,项目也无法正常运行.
   3.在项目的根目录中,新建一个 `.babelrc` 的babel配置文件,这个配置文件,属于JSON格式,必须符合JSON语法规范
      在 `.babelrc` 配置如下:
      {
        "presets": ["env","stage-0"],
        "plugins": ["transform-runtime"]
      }
 */

/** 
 * webpack 中使用vue
 * 1. 安装vue包: `yarn add vue -S`
 * 2. 由于 在webpack中,推荐使用.vue这个组件模板文件定义组件,所以需要安装能解析这种文件的loader
 * 3. `yarn add vue-loader vue-template-compiler -D`安装相应loader
 * 4. 在配置文件中,新增loader配置项 `{ test: /\.vue$/, use:'vue-loader'}`
 * 5. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的.
 * `const VueLoaderPlugin = require('vue-loader/lib/plugin')`;
 * `new VueLoaderPlugin(),  //配置vueloader插件`;
 * 6. 导入app组件 `import app from './app.vue'`
 * 7. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: h => h(app)})
 * 8. 在页面中创建一个 id 为 app 的div 元素,作为我们vm实例要控制的区域
*/
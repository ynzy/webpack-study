// 在webpack中 尝试使用vue:
/** 
 * 在webpack中,使用 import { Vue } from "vue" 导入的vue构造函数,功能不完整,只提供了
 * runtime-only 的方式,并没有提供像网页那样的使用方式
 * 需要在webpack中配置resolve的alias属性`"vue$":'vue/dist/vue.js'`
 * */ 

/** 
 * 包的查找规则:
 * 1. 找项目根目录中有没有 node_modules 的文件夹
 * 2. 在 node_modules中 根据包名,找对应的vue文件夹
 * 3. 在vue文件夹中,找一个叫做 package.json的包配置文件
 * 4. 在package.json文件中,查找一个main 属性[main属性指定了这个包被加载的时候的入口文件]
 * 
*/

import Vue  from "vue";
import app from './app.vue';
import router from './router.js'

var vm = new Vue({
  el: '#app',
  router, //挂载路由对象
  // render: (createElements) => { //在 webpack中,如果想要通过vue,把一个组件放到页面中去展示,vm实例中的render函数可以实现
  //   return createElements(login)
  // }
  // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  render: h => h(app)
})

/** 
 * 注意:
 * 这个app组件,是通过vm实例的render函数,渲染出来的,render函数如果要渲染组件,
 * 渲染出来的组件,只能放到el:'#app' 所指定的元素中;
 * login和register组件,是通过 路由匹配监听到的,所以这两个组件,只能展示到属于路由的`router-view`中
*/
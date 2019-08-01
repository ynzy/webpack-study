// 这是main.js 是我们项目的js入口文件

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Person {
  info = {name: 'zhansasdf', age: 23}
}

let user = new Person()
console.log(user.info)
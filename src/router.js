import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import header from './view/header.vue'
import login from './view/user/login.vue'
import register from './view/user/register.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/header' },
    {
    path: '/header',
    component: header,
    children: [
      { path: '/header', redirect: 'login' },
      { path: 'login', component: login },
      { path: 'register', component: register },
    ]
  },


  ]
})

export default router
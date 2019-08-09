import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import header from './view/header.vue'
import login from './view/user/login.vue'
import register from './view/user/register.vue'
import communication from './view/communication'

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
      { path: 'communication', component: communication },
    ]
  },


  ]
})

export default router
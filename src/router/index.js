import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/personal'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/login.vue'], resolve)
    },
    {
      path: '/personal',
      name: 'login',
      component: resolve => require(['../views/personal/index.vue'], resolve)
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: resolve => require(['../views/signIn/signIn.vue'], resolve)
    }
  ]
})

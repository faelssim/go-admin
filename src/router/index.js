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
    },
    {
      path: '/certification/index',
      name: 'certification',
      component: resolve => require(['../views/personal/certification/index.vue'], resolve)
    },
    {
      path: '/certification/face',
      name: 'certification_face',
      component: resolve => require(['../views/personal/certification/face.vue'], resolve)
    },
    {
      path: '/certification/phone',
      name: 'certification_phone',
      component: resolve => require(['../views/personal/certification/modifyPhone.vue'], resolve)
    },
    {
      path: '/shoppingcart/index',
      name: 'shoppingcart',
      component: resolve => require(['../views/shoppingcart/index.vue'], resolve)
    }
  ]
})

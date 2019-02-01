// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/common.css'

Vue.config.productionTip = false

import Cube from 'cube-ui'
Vue.use(Cube)
// 自定义全局组件
import avatar from './components/avatar/index'
import copyRight from './components/copyright/index'
Vue.use(avatar)
Vue.use(copyRight)

import './service/directive'

import './service/filter'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

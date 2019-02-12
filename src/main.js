// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

//global function
import util from './service/util'
import './assets/css/common.css'
//global directive and filter
import './service/directive'
import './service/filter'

Vue.config.productionTip = false

import Cube from 'cube-ui'
Vue.use(Cube)
// 自定义全局组件
import {_Radio,_Button,_Avatar,_Nulltip,_Copyright,_Text,_Image} from './components/index'
Vue.use(_Avatar)
Vue.use(_Copyright)
Vue.use(_Nulltip)
Vue.use(_Button)
Vue.use(_Radio)
Vue.use(_Text)
Vue.use(_Image)

Vue.prototype.$store=store
Vue.prototype.$util=util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

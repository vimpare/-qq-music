// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './store'

import './assets/yinyuecss/reset.css'
import './assets/yinyuecss/index.css'
import './assets/bofangcss/index.css'
import './assets/paihangcss.css'
import './assets/paihangxiang.css'
import './assets/geshou.css'
import './assets/swiper.min.css'
import './assets/gedanxiang.css'
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

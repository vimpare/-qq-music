// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './store'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

import { Progress } from 'mint-ui';

import utils from './utils/utils'
Vue.use(utils);

Vue.component(Progress.name, Progress);
import 'mint-ui/lib/style.css'
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
  MintUI,
  template: '<App/>',
  components: { App }
})

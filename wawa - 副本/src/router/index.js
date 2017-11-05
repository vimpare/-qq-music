import Vue from 'vue'
import Router from 'vue-router'
import Bofang from '@/components/bofang'
import Gen from '@/components/gen'
import Paihang from '@/components/paihang'
import Paihangxiang from '@/components/paihangxiang'
import Gedanx from '@/components/gedanxiang'
import Geshou from '@/components/geshou'
import Geshoux from '@/components/geshoux'
import App from '../App'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',  // 路径
      component:Gen  // 对应的组件
    },
    {
      path: '/bofang',  // 路径
      component: Bofang // 对应的组件
    },
    {
      path: '/paihang',  // 路径
      component: Paihang // 对应的组件
    },
    {
      path: '/paihangx',  // 路径
      component: Paihangxiang // 对应的组件
    },
    {
      path: '/geshou',  // 路径
      component: Geshou // 对应的组件
    },
    {
      path: '/gedanx',  // 路径
      component: Gedanx // 对应的组件
    },
    {
      path: '/geshoux',  // 路径
      component: Geshoux // 对应的组件
    }
  ]
})

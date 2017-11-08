import Vue from 'vue'
import Vuex from 'vuex'

// 作为vue的插件 整个应用要取vuex中的状态
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    singermid:'',
    singername:''
  },
  mutations: {
   getmid:function(state, obj){
    console.log('我被触发了')
    state.singermid=obj.Fsinger_mid
    state.singername=obj.Fsinger_name
   }
  },
  actions: {
    // getmid:function(state, mid){
    //   console.log('我被触发了')
    //   state.singermid=mid
    //   console.log(state.singermid)
    //  }
    // getmid (context) {
    //   context.commit('getmid')
    // }
  }
})

export default store

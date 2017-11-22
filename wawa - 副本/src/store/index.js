import Vue from 'vue'
import Vuex from 'vuex'

// 作为vue的插件 整个应用要取vuex中的状态
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    singermid:'002J4UUk29y8BY',
    singername:'',
    songid:'',
    albummid:'',
    songState:{
      playingState: 'pause'
    }

  },
  mutations: {
   getmid:function(state, obj){
    console.log('我被触发了')
    state.singermid=obj.Fsinger_mid
    state.singername=obj.Fsinger_name
   },
   pause(state, status) {
    let songid = state.songid;
    state.songState.playingState = status == 'pause' || songid == null ? 'pause' : 'playing' + songid;
  },
    getsongid:function(state, songid){
      state.songid=songid
    }
  },
  actions: {
   
  }
})

export default store

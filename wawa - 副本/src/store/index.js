import Vue from 'vue'
import Vuex from 'vuex'

// 作为vue的插件 整个应用要取vuex中的状态
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    songMsg:{
      data:{}
    },
    singermid:'002J4UUk29y8BY',
    singername:'周杰伦',
    songid:'',
    albummid:'',
    songState:{
      playingState: 'pause',
      playingProgress: 0,
      current:0,
      timing:0,
      currentLyricIndex: '',
      currentLyricDuration: '',
      currentLyricArr: []
    }

  },
  mutations: {
  getmid:function(state, obj){
    console.log('我被触发了')
    state.songMsg.data=obj
    state.singermid=obj.Fsinger_mid
    state.singername=obj.Fsinger_name
    },
  pause(state, status) {
    let songid = state.songid;
    state.songState.playingState = status == 'pause' || songid == null ? 'pause' : 'playing' + songid;
  },
  getsongid:function(state, songid){
      state.songid=songid    
  },
  switchLyricIndex(state, index) {
    console.log(state.songState.currentLyricIndex)
    state.songState.currentLyricIndex = index;
  },
  switchLyricsArr(state, lyricArr) {
    state.songState.currentLyricArr = lyricArr instanceof Array ? lyricArr : [];
  },
  switchLyricDuration(state, duration) {
    state.songState.currentLyricDuration = duration;
  }
  },
  actions: {
    resetProgress({state,commit,dispatch},payload={currentTime: 0, duration: 0}){
      let current = parseInt(payload.currentTime) || 0,
          timing = parseInt(payload.duration) || 0;
          state.songState.playingProgress = current/timing;
					state.songState.current = current;
					state.songState.timing = timing;
   }
  }
})

export default store

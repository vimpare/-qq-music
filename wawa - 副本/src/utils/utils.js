export default{
    install(Vue,options)
    {
      Vue.prototype.playMusic = function (songid) {
        console.log('我是插件中的方法');
        store.commit('getsongid', songid);
      }
    }
  }
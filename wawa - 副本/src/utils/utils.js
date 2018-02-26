export default{
    install(Vue,options)
    {
      Vue.prototype.playMusic = function (obj,songid) {
       
        this.$store.commit('getmid',obj)
        this.$store.commit('getsongid', songid);
      }
    }  
   
  }
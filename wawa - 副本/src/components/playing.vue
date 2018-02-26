<template>
    <router-link 
        class="bofang-icon" 
        :to="getUrl()"         
         ></router-link>
</template>
<script>
    var jsonp = require('jsonp');
    export default { 
        data(){
            return {
                song:[]
            }
        },
       methods:{         
			getUrl(){
                let songid=this.$store.state.songid
                if(songid==''){
                    
                    return '/bofang/'+102636799
                }else{
                    return '/bofang/'+songid
                }
            }
       },
       mounted: function() {
           
            let that = this
            let url='';

            url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1'

            jsonp(url,
            {
                param: 'jsonpCallback'

            },function(err,data){
               console.log(data.data.list[0])
               that.song=data.data.list[0];
                let songid=that.$store.state.songid
                if(songid==''){
                    that.$store.commit('getmid',that.song)
                    that.$store.commit('getsongid',102636799);
                }
                
            });

        }
       
    }
</script>
<style>

</style>
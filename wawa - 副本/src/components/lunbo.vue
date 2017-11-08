<template>

    
   <mt-swipe :auto="4000">
    <mt-swipe-item v-for=" item,index in imgs">  
            <img :src="item.pic_info.url">     
    </mt-swipe-item>
   
    </mt-swipe>
</template>
<script>
    var jsonp = require('jsonp');
    export default { 
        data() {
            return {          
                imgs: []
            }
        },  
       mounted: function() {
            let that = this
            jsonp(`https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"comm":{"ct":24},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}
        `,
            {
            
            },function(err,data){
           
           that.imgs=data.focus.data.content
            
            });

        }
    }
</script>
<style>
.mint-swipe{
    overflow:visible;
    height:31.2rem;
}
.mint-swipe-items-wrap{
    overflow:visible;
}
</style>
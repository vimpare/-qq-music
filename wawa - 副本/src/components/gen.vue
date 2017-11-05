<template>
    <div id="box">
            <div class="header clearfix">
                <div  class="sousuo clearfix">
                    <span class="sousuo-icon"></span>
                    <input type="text" placeholder="搜索音乐" class="sousuo-text">
                </div>
                <span class="bofang-icon"></span>
            </div>
             <Lunbo></Lunbo> 
            <div class="banner">
                <div class="banner-imgs">
                    <img src="../assets/yinyuecss/bnner.png">
                </div>
            </div>
           
            <ul class="list-init clearfix">
                <li>
                    <router-link to="/paihang">
                        <div class="bg"></div>
                        <div class="list-li-name">
                            <p>排行</p>
                            <p class="list-li-name-ying">RADIO</p>
                        </div>
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/geshou">
                        <div class="bg"></div>
                        <div class="list-li-name">
                            <p>歌手</p>
                            <p class="list-li-name-ying">ARTIST</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/geshou">
                        <div class="bg"></div>
                        <div class="list-li-name">
                            <p>分类</p>
                            <p class="list-li-name-ying">MUSIC</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="item">
                <div class="item-title clearfix">
                    <p class="item-title-text">推荐歌单</p>
                    <span class="item-title-icon"></span>
                </div>
                <ul class="gedan clearfix">
                    <li v-for="item,index in articles">
                        <dl class="gedan-item">
                            <dt><img :src="item.cover"></dt>
                            <dd class="gedan-item-title">{{item.title}}</dd>
                            <dd class="gedan-item-liang">播放量：{{(item.listen_num/10000).toFixed(1)+'万'}}</dd>
                        </dl>
                    </li>
                   
                </ul>
            </div>
        </div>
</template>
<script>
     import Lunbo from './lunbo'
    var jsonp = require('jsonp');
    var data={}
    export default {
        
        data() {
            return {          
                articles: {}
            }
        },
        components:{
            Lunbo
        },
        mounted: function() {
            let that = this
            jsonp(`https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer" 
        }}
        `,
            {
            
            },function(err,data){
            console.log(data)
            that.articles=data.recomPlaylist.data.v_hot.splice(0,6);
            console.log(that.articles)
            
            });

        }
    }
</script>
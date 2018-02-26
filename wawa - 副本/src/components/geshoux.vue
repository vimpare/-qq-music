<template>
    <div id="paihangbox">
            <div class="header clearfix">
				<Fullback></Fullback>
				<p class="siner-xiang-name">{{$store.state.singername}}</p>
                <Playing></Playing>
            </div>
			<div class="singer-xiang-image"><img :src="getmid($route.params.id)"></div>
			<div class="singer-xiang-title">最热歌曲</div>
			<ol class="singer-xiang-list">
				<li class="clearfix" 
                    v-for="item,index in song"
                    @touchend="playMusic(item,item.musicData.songid)">
                    <router-link :to="'/bofang/'+item.musicData.songid" >
					<div class="singer-xiang-item">
						<p class=singer-xiang-item-song>{{item.musicData.songname}}</p>
						<p class=singer-xiang-item-zhuanji>{{item.musicData.singer[0].name}}·{{
                        item.musicData.albumname}}{{item.musicData.albumdesc?'·'+item.musicData.albumdesc:''}}</p>                      
					</div>
					<span class="singer-xiang-item-icon"></span>
                    </router-link>
				</li>
				
			</ol>
        </div>
</template>

<script>
     import Fullback from './fallback'
     import Playing from './playing'
    var jsonp = require('jsonp');
    var data={}
    export default {
        data() {
            return {          
                song: [],
                singername:''
            }
        },
         methods:{
            getmid(id){    
                console.log(id)          
                let src='';
                src='https://y.gtimg.cn/music/photo_new/T001R150x150M000'+id+'.jpg?max_age=2592000'
                return src           
            }
			
        },
        components:{
            Fullback,
            Playing
        },
        mounted: function() {
            console.log(this.$route.params.id)
            let singerindex=this.$route.params.id
            let that = this
            let url=''

            url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid='+singerindex+'&order=listen&begin=0&num=30&songstatus=1'

            jsonp(url,
            {
                param: 'jsonpCallback'

            },function(err,data){
               console.log(data.data.list)
               that.song=data.data.list;
               
                
            });

        }
    }
</script>

<style>


</style>

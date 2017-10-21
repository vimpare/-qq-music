<template>
   <div id="paihangbox">
            <div class="header clearfix">
				<span class="fanhui-icon"></span>
                <p>排行榜</p>			
                <span class="bofang-icon"></span>
            </div>
			<div class="singer-xiang-image"><img :src="getmid(paihangx[0].data.albummid)"></div>
			<div class="singer-xiang-title"><span class="paihangbofang"></span>播放全部</div>
			<ol class="singer-xiang-list paihang-list">
				<li class="clearfix" v-for="item,index in paihangx">
                    <div class="singer-xiang-item-image"><img :src="getmid(item.data.albummid)"></div>
					<div class="singer-xiang-item">
						<p class=singer-xiang-item-song>{{item.data.songname}}</p>
						<p class=singer-xiang-item-zhuanji>{{item.data.singer[0].name}}·{{
                        item.data.albumname}}{{item.data.albumdesc?'·'+item.data.albumdesc:''}}</p>
					</div>
					<span class="singer-xiang-item-icon"></span>
				</li>
				
			</ol>
        </div>
</template>

<script>
//https://y.gtimg.cn/music/photo_new/T002R90x90M000002W7K2D0LxJJR.jpg?max_age=2592000
//https://y.gtimg.cn/music/photo_new/T002R90x90M000002Du0Zw2MqqFb.jpg?max_age=2592000
//albummid
    var jsonp = require('jsonp');
    var data={}
    export default {
        
        data() {
            return {          
                paihangx: {}
            }
        },
        methods:{
            getmid(id){              
                let src='';
                src='https://y.gtimg.cn/music/photo_new/T002R90x90M000'+id+'.jpg?max_age=2592000'
                return src           
            }
        },
        computed:{
            singernames(){              
                this.paihang.forEach(function(item){
                    let html='';
                    item.data.singer.forEach(function(item){
                        html+=item.name+'/'
                    })
                   console.log(html)
                   item.miaov=html
                })

              
            }
        },
        mounted: function() {
            console.log(123)
            let that = this
            jsonp(`https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017-10-18&topid=4&type=top&song_begin=0&song_num=100&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
        `,
            {
                param: 'jsonpCallback'

            },function(err,data){
                console.log(data.songlist)
                that.paihangx=data.songlist
            
            });

        }
    }
</script>

<style>


</style>

<template>
    <div id="paihangbox">
            <div class="header clearfix">
				<span class="fanhui-icon"></span>
				<p class="siner-xiang-name">薛之谦</p>
                <span class="bofang-icon"></span>
            </div>
			<div class="singer-xiang-image"><img src=""></div>
			<div class="singer-xiang-title">最热歌曲</div>
			<ol class="singer-xiang-list">
				<li class="clearfix" v-for="item,index in song">
					<div class="singer-xiang-item">
						<p class=singer-xiang-item-song>{{item.musicData.songname}}</p>
						<p class=singer-xiang-item-zhuanji>{{item.musicData.singer[0].name}}·{{
                        item.musicData.albumname}}{{item.musicData.albumdesc?'·'+item.musicData.albumdesc:''}}</p>
                       
					</div>
					<span class="singer-xiang-item-icon"></span>
				</li>
				
			</ol>
        </div>
</template>

<script>
    var jsonp = require('jsonp');
    var data={}
    export default {
        data() {
            return {          
                song: [],
               
            }
        },
        mounted: function() {
            console.log(123)
            let that = this
            jsonp(`https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1
        `,
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

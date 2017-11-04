<template>
    <div>
        <div id="paihangbox">
            <div class="header clearfix">
                <span class="fanhui-icon"></span>
                <span class="bofang-icon"></span>
            </div>
            <div class="mod-song">
				<dl>
					<dt><img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003L8x7x0flFPW.jpg?max_age=2592000"></dt>
					<dd>
						<p class="mod-song-name">静夜思</p>
						<p class="mod-song-singer">白天不亮</p>
					</dd>
				</dl>
				<div class="songlyric">

				</div>
                <audio id="bgMusic"  
					src="http://dl.stream.qqmusic.qq.com/C400003avUdD2Iwk2d.m4a?vkey=4119D8A418A65419C8BF474E5F3AE597862CE06F327BED4526117F6216A83A19385A060047234320E109DD0EC9AE76A66EEE6BC602A55F78&guid=2597215298&uin=0&fromtag=66" type="audio/mp3" controls>
				</audio>
				<div class="song-item-icon clearfix">
					<span class="song-icon-xihuan"></span>
					<span class="song-icon-xiazai"></span>
					<span class="song-icon-pinglun"></span>
					<span class="song-icon-more"></span>
				</div>
				<div class="jindu clearfix">
					<span class="start-time">04:18</span>
					<div class="jindu-tiao"><span class="jindu-bianse"></span></div>
					<span class="jieshu-time">05:47</span>
				</div>

				<div class="song-icon clearfix">
					<span class="song-icon-moshi"></span>
					<span class="song-icon-prev"></span>
					<span class="song-icon-start"></span>
					<span class="song-icon-next"></span>
					<span class="song-icon-list"></span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
	//先把页面滚动禁掉
	var jsonp = require('jsonp');
	document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
	
    export default {
		 data() {
            return {          
                lyric: {}
            }
        },
        mounted: function() {
            let that = this
            jsonp(`https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?pcachetime=1509776220636&songmid=003avUdD2Iwk2d&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
        `,
            {
            
            },function(err,data){
            console.log(data)
           
            
            });

        }
    }
</script>
<style>
audio{
	width:500px;
	height:200px;
}
</style>

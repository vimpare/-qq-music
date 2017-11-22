<template>
    <div>
        <div id="paihangbox">
            <div class="header clearfix">
                <span class="fanhui-icon"></span>
                <span class="bofang-icon"></span>
            </div>
            <div class="mod-song">
				<dl>
					<dt><img :src="imgsrc"></dt>
					<dd>
						<p class="mod-song-name">静夜思</p>
						<p class="mod-song-singer">白天不亮</p>
					</dd>
				</dl>
				<div class="songlyric">

				</div>
                <audio id="bgMusic"  
					ref="audio"
					src="http://dl.stream.qqmusic.qq.com/C400003avUdD2Iwk2d.m4a?fromtag=66" type="audio/mp3" controls>
				</audio>
				<div class="song-item-icon clearfix">
					<span class="song-icon-xihuan"></span>
					<span class="song-icon-xiazai"></span>
					<span class="song-icon-pinglun"></span>
					<span class="song-icon-more"></span>
				</div>
				
				<div class="jindu clearfix">
					<mt-progress :value="60">
						<div slot="start">04:18</div>
						<div slot="end">05:47</div>
					</mt-progress>									
				</div>

				<div class="song-icon clearfix">
					<span class="song-icon-moshi"></span>
					<span class="song-icon-prev"></span>
					<span 
						:class="playingState == 'pause' ? 'song-icon-pause' : 'song-icon-start'"
						@click="pause(playingState == 'pause' ? '' : 'pause')"></span>
					<span class="song-icon-next"></span>
					<span class="song-icon-list"></span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
	//先把页面滚动禁掉
	import { mapState, mapMutations, mapActions } from 'vuex';
	var jsonp = require('jsonp');
	document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
	
    export default {
		 data() {
            return {          
                lyric: {},
				imgsrc:''
            }
        },
		computed:{
			playingState() {
				return this.$store.state.songState.playingState	
			}
		},
		 methods:{
            ...mapMutations(['pause'])
			
        },
		watch:{
			playingState(state){
				console.log(state)
				let audio = this.$refs.audio;
				if (state == 'pause') {
					audio.pause()
				}else {
					audio.play()
				}
			}
			
		},
        mounted: function() {
            let that = this
            jsonp(`https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=003UdczR02zr72&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
        `,
            {
             param: 'jsonpCallback'
            },function(err,data){
           
			that.imgsrc='https://y.gtimg.cn/music/photo_new/T002R300x300M000'+data.data.mid+'.jpg?max_age=2592000'
            
            });

        }
    }
</script>
<style>
audio{
	width:500px;
	height:200px;
}
.song-icon-pause{
  float: left;
  width: 6.75rem;
  height: 6.75rem;
  background-image: url('../assets/bo.png');
  background-size:6.75rem;
}
</style>

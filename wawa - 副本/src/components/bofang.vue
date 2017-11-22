<template>
    <div>
        <div id="paihangbox">
            <div class="header clearfix">
                <span class="fanhui-icon"></span>
                <span class="bofang-icon"></span>
            </div>
            <div class="mod-song">
				<dl>
					<dt>
						<img 
							:src="getImgsrc()"
							:class="{'spin': playingState != 'pause'}">
						
					</dt>
					<dd>
						<p class="mod-song-name">{{$store.state.songMsg.data.musicData.songname}}</p>
						<p class="mod-song-singer">{{$store.state.songMsg.data.musicData.singer[0].name}}</p>
					</dd>
				</dl>
				<div class="songlyric">

				</div>
                <audio id="bgMusic"  
					ref="audio"
					:src="getMedia()" 
					type="audio/mp3"
					@timeupdate="_playProgress"
					>
				</audio>
				<div class="song-item-icon clearfix">
					<span class="song-icon-xihuan"></span>
					<span class="song-icon-xiazai"></span>
					<span class="song-icon-pinglun"></span>
					<span class="song-icon-more"></span>
				</div>
				
				<div class="jindu clearfix">
					<mt-progress :value="playingProgress*100">
						<div slot="start" class="playing-current">{{playingCurrent}}</div>
						<div slot="end" class="playing-timing">{{playingTiming}}</div>
					</mt-progress>									
				</div>

				<div class="song-icon clearfix">
					<span class="song-icon-moshi"></span>
					<span class="song-icon-prev"></span>
					<span 
						:class="playingState == 'pause' ? 'song-icon-pause' : 'song-icon-start'"
						@touchstart="pause(playingState == 'pause' ? '' : 'pause')"></span>
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
			},
			playingCurrent(){
				let current=this.$store.state.songState.current;
				return parseInt(current/60)+':'+current%60
			},
			playingTiming(){
				let timing=this.$store.state.songState.timing
				return parseInt(timing/60)+':'+timing%60
			},
			playingProgress(){
				return this.$store.state.songState.playingProgress
			}

		},
		 methods:{
            ...mapMutations(['pause']),
			getMedia(){
				let songid=this.$store.state.songid
				return 'http://dl.stream.qqmusic.qq.com/'+songid+'.m4a?fromtag=66'
			},
			getImgsrc(){
				let albummid=this.$store.state.songMsg.data.musicData.albummid;	
				 return 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'+albummid+'.jpg?max_age=2592000'
			},
			_playProgress(e) {
				let audio = e.target,
					currentTime = audio.currentTime,
					duration = audio.duration;				
				this.$store.dispatch('resetProgress', {currentTime, duration});
			},
			
        },
		watch:{
			playingState(state){
				console.log(state)
				let audio = this.$refs.audio;
				if (state == 'pause') {
					audio.pause()
				}else {
					audio.play()
					console.log(audio.currentTime,audio.duration)
				}
			}
			
		},
       
			
            
         

        
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
.playing-current{
	font-size:2rem;
	margin-right:1rem;
}
.playing-timing{
	font-size:2rem;
	margin-left:1rem;
}
.spin{
	 animation: spin 30s linear infinite;
}
@keyframes spin{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

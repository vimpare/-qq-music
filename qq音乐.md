# qq音乐

标签（空格分隔）： 未分类

---

1.
 

    <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
     import 'swiper/dist/css/swiper.min.css';
    var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    loop: true,
                    speed: 600,
                    autoplay: 4000,
                    onTouchEnd: function() {
                        swiper.startAutoplay()
                    }
                });

2.
播放专辑信息地址：
https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=003c1gmg2S4HGj&g_tk=5381&jsonpCallback=albuminfoCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
3.
地址：
https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=2597215298&g_tk=5381&jsonpCallback=jsonCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0

    jsonCallback({
        "code": 0,
        "sip": ["http://111.13.137.21/streamoc.music.tc.qq.com/", "http://dl.stream.qqmusic.qq.com/",
                "http://isure.stream.qqmusic.qq.com/"],
        "thirdip": ["http://thirdparty.gtimg.com/abcd1234/", "http://thirdparty.gtimg.com/abcd1234/"],
        "testfile2g": "C100003mAan70zUy5O.m4a",
        "testfilewifi": "C100003mAan70zUy5O.m4a",
        "key": "ADAD1F88255BD4D2EA287E3C5CEBB8836EBBC0585E88AC8D7355647EDE79187B1B7C1B5087F0BE3FBF0540CDDB2BF260B7F7B2BF00B9AECF"
    });
3.
歌词：
不能获取歌词
https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1508562562543&songmid=003P4Xqd31HBmN&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
打开地址拿不到歌词，在控制台响应里复制内容之后，
base64解码：
[ti:回转木马的孤单]
[ar:戚薇]
[al:回转木马的孤单]
[by:]
[offset:0]
[00:00.33]回转木马的孤单 - 戚薇
[00:00.66]词：管启源
[00:00.83]曲：宇珩
[00:00.96]编曲：生命树_小王子
[00:01.29]制作人：陈起贤
[00:01.52]配唱制作人：陈起贤/李昀陵
[00:02.54]和声：Lisa Djaati
[00:02.71]小提琴：小N
[00:02.90]吉他：生命树_小王子
[00:03.23]鼓：朱荣豪
[00:03.40]录音师：陈文骏/生命树_小王子/黄君富
[00:04.03]录音室：强力录音室/植光土壤音创录音室/硬搞录音室
[00:04.85]混音师：赖世凯
[00:05.08]混音室：硬搞录音室
[00:06.05]
[00:17.52]电视机闪耀
[00:18.86]银色的光
[00:20.24]第几个失眠的晚上
[00:24.06]
[00:28.38]我走进厨房
[00:29.72]打开冰箱
[00:31.27]食物都差不多吃完
[00:36.76]
[00:37.73]这空腹感
[00:40.48]
[00:41.77]怎么都填不满
[00:45.82]
[00:48.96]是什么让
[00:51.62]
[00:52.79]这灵魂在流浪
[00:58.77]
[01:01.81]温水和浴缸
[01:03.46]陪我疗伤
[01:04.82]孤单是伤也是解放
[01:08.81]
[01:12.99]人生不圆满
[01:14.40]想要飞翔
[01:15.75]就要学会接受遗憾
[01:21.72]
[01:22.40]有多快乐
[01:24.71]就有多难忘
[01:28.15]是什么让
[01:30.17]我红了眼眶
[01:32.98]
[01:33.52]不管多悲伤
[01:36.80]地球一样自转
[01:42.95]
[01:44.75]寂寞就像回转木马原地转
[01:49.52]
[01:50.03]我们的爱情不过是马戏团
[01:55.88]再热闹的终究也荒凉
[02:00.76]曲终了人散
[02:05.54]谁还在旁观
[02:07.43]回转木马
[02:09.33]绕原地转
[02:12.55]我们的爱情不过是马戏团
[02:18.98]我怎么还倔强
[02:22.07]一个人在拾荒
[02:27.34]
[02:53.65]温水和浴缸
[02:55.07]陪我疗伤
[02:56.28]孤单是伤也是解放
[03:00.67]
[03:04.56]人生不圆满
[03:06.00]想要飞翔
[03:07.37]就要学会接受遗憾
[03:12.73]
[03:14.10]有多快乐
[03:16.29]就有多难忘
[03:19.71]是什么让
[03:21.31]
[03:21.82]我红了眼眶
[03:25.26]不管多悲伤
[03:28.47]地球一样自转
[03:35.32]
[03:36.45]寂寞就像回转木马原地转
[03:41.58]我们的爱情不过是马戏团
[03:46.66]
[03:47.52]再热闹的终究也荒凉
[03:52.37]曲终了人散
[03:57.05]谁还在旁观
[03:59.06]回转木马
[04:00.75]绕原地转
[04:03.31]
[04:04.27]我们的爱情不过是马戏团
[04:10.93]
[04:13.56]我怎么还倔强
[04:16.97]
[04:17.87]一个人在拾荒


4.
歌曲播放
https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid=${mid}&tpl=yqq_song_detail&format=jsonp
《简单的歌》单曲地址：
http://dl.stream.qqmusic.qq.com/C400003avUdD2Iwk2d.m4a?vkey=4119D8A418A65419C8BF474E5F3AE597862CE06F327BED4526117F6216A83A19385A060047234320E109DD0EC9AE76A66EEE6BC602A55F78&guid=2597215298&uin=0&fromtag=66
《简单的歌》图片：
https://y.gtimg.cn/music/photo_new/T002R300x300M000003L8x7x0flFPW.jpg?max_age=2592000
《简单的爱》歌词：
http://music.qq.com/miniportal/static/lyric/10/4900010.xml
4900010为歌曲ID
10为歌曲ID%100的值
205603045
45
http://music.qq.com/miniportal/static/lyric/45/205603045.xml----------不可用

5
router-link 
<router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

    <router-link to="/geshou">
        <div class="bg"></div>
        <div class="list-li-name">
            <p>歌手</p>
            <p class="list-li-name-ying">ARTIST</p>
        </div>
    </router-link>
    
6
歌单地址
https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid=2687351885&format=jsonp&g_tk=5381&jsonpCallback=playlistinfoCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
无法获取
7，
薛之谦：
https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&jsonpCallback=MusicJsonCallbacksinger_track&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1

{
"Farea": "1",
"Fattribute_3": "3",
"Fattribute_4": "0",
"Fgenre": "0",
"Findex": "X",
"Fother_name": "Joker",
"Fsinger_id": "5062",
"Fsinger_mid": "002J4UUk29y8BY",
"Fsinger_name": "薛之谦",
"Fsinger_tag": "541,555",
"Fsort": "1",
"Ftrend": "0",
"Ftype": "0",
"voc": "0"
},

头像地址：
https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000

通过mid关联

--------------
韩国歌手：
https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=k_man_all&pagesize=100&pagenum=1&g_tk=5381&jsonpCallback=GetSingerListCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=k_woman_all&pagesize=100&pagenum=1&g_tk=5381&jsonpCallback=GetSingerListCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
-----------------------------

轮播图：
https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"comm":{"ct":24},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}

--------------------------------
歌词：
 https://api.darlin.me/music/lyric/4900010/?
 -------------------------------------------
 

播放器：
----

 第一次打开，audio标签后面加上autoplay打开网页就自动播放了，再加上controls就会出现默认的控制器，否则页面什么都没有，看上去还以为出问题呢！确认加载无误，就可以删除了。
先完成最基础的功能就是播放/暂停。利用audio.play()和audio.pause()就可以轻松的实现了。注意：不是stop();

**ref="audio"**

**在组件中提交 Mutation**

你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。

    import { mapMutations } from 'vuex'
    
    export default {
      // ...
      methods: {
        ...mapMutations([
          'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    
          // `mapMutations` 也支持载荷：
          'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
        ]),
        ...mapMutations({
          add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        })
      }
    }

---------------------------------------------------
播放暂停按钮根据歌曲播放状态切换
：
    
    <span 
		:class="playingState == 'pause' ? 'song-icon-pause' : 'song-icon-start'"
		@click="pause(playingState == 'pause' ? '' : 'pause')"></span>
		
		
--------------------------------------------

vue挂载全局函数：
----------

//在mian.js中写入函数
Vue.prototype.changeData = function (){
  alert('执行成功');
}
//在所有组件里可调用函数
this.changeData();


方法二:
// 写好自己需要的base.js文件
exports.install = function (Vue, options) {
    Vue.prototype.changeData = function (){
        alert('执行成功');
    };
};
// main.js 引入并使用
import base from './base'
Vue.use(base);
//在所有组件里可调用函数
this.changeData();
----------------------------------------
http://dl.stream.qqmusic.qq.com/C400003avUdD2Iwk2d.m4a?vkey=4119D8A418A65419C8BF474E5F3AE597862CE06F327BED4526117F6216A83A19385A060047234320E109DD0EC9AE76A66EEE6BC602A55F78&guid=2597215298&uin=0&fromtag=66

--------------》》》
去掉vkey
http://dl.stream.qqmusic.qq.com/C400003avUdD2Iwk2d.m4a?fromtag=66

薛之谦 别
http://dl.stream.qqmusic.qq.com/C400003uIckZ4ZP87A.m4a?vkey=4918AF550FF8D068CBE410CE8C0679FF56BD4964AE0C27BE984DCCCF697F4D15BEAB946B078FFC7A945C3672F8C15EB8421FD2C06B73BCFB&guid=2597215298&uin=0&fromtag=66

songid:206379449
http://dl.stream.qqmusic.qq.com/206379449.m4a?vkey=4918AF550FF8D068CBE410CE8C0679FF56BD4964AE0C27BE984DCCCF697F4D15BEAB946B078FFC7A945C3672F8C15EB8421FD2C06B73BCFB&guid=2597215298&uin=0&fromtag=66

    getMedia(){
				let songid=this.$store.state.songid
				console.log(songid)
				return 'http://dl.stream.qqmusic.qq.com/'+songid+'.m4a?fromtag=66'
			}
			
图片地址：
https://y.gtimg.cn/music/photo_new/T002R300x300M0000037qtDt3hxO46.jpg?max_age=2592000

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

进度条：
----

**timeupdate** 事件在音频/视频（audio/video）的播放位置发生改变时触发。
该事件可以在以下情况被调用:
播放音频/视频（audio/video）
移动音频/视频（audio/video）播放位置
提示： timeupdate 事件通常与 Audio/Video 对象的 currentTime 属性一起使用，该属性返回音频/视频（audio/video）的播放位置（以秒计）。
currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。
当设置该属性时，播放会跳跃到指定的位置。
duration 属性返回当前音频的长度，以秒计。

 

    <audio id="bgMusic"  
		ref="audio"
		:src="getMedia()" 
		type="audio/mp3"
		@timeupdate="_playProgress"
		>
	</audio>
	
在methods:{}里：

    _playProgress(e) {
		let audio = e.target,
			currentTime = audio.currentTime,
			duration = audio.duration;				
		this.$store.dispatch('resetProgress', {currentTime, duration});
			}
	
状态管理里：

    actions: {
        resetProgress({state,commit,dispatch},payload={currentTime: 0, duration: 0}){
          let current = parseInt(payload.currentTime) || 0,
              timing = parseInt(payload.duration) || 0;
              state.songState.playingProgress = current/timing;
    					state.songState.current = current;
    					state.songState.timing = timing;
       }
      }
进度条播放位置和全部时间根据vuex里状态渲染

    <div class="jindu clearfix">
		<mt-progress :value="playingProgress*100">
			<div slot="start" class="playing-current">{{playingCurrent}}</div>
			<div slot="end" class="playing-timing">{{playingTiming}}</div>
		</mt-progress>									
	</div>

在script里：

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
}

--------------------------------------------------
**歌手头像随音乐播放转动**
给歌手头像加class类名spin
在style里：

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
spin意思：自旋
rotate:自转
animation:
    as each of the properties of the shorthand:
   

        animation-name: none
        animation-duration: 0s
        animation-timing-function: ease
        animation-delay: 0s
        animation-iteration-count: 1
        animation-direction: normal
        animation-fill-mode: none
        animation-play-state: running
 
 这里存在一个IOS Safari的BUG -webkit-animatin-pause 在IOS下会被完全忽略想请可以查看
	 *		http://stackoverflow.com/questions/27683012/css-animation-play-state-paused-doesnt-work-in-ios
	 *		因而改为直接在封面滚动的动画上改为animation的添加和删除也由此使得头像的滚动动画无法暂停而是重新开始
 ----------------------------------------------
 
**歌词部分：**
歌词：
 https://api.darlin.me/music/lyric/4900010/?



<div class="header clearfix">
                <div  class="sousuo clearfix">
                    <span class="sousuo-icon"></span>
                    <input type="text" placeholder="搜索音乐" class="sousuo-text">
                </div>
                <span class="bofang-icon"></span>
            </div>
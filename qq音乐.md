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

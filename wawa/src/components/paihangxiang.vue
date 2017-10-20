<template>
   <div id="paihangbox">
            <div class="header clearfix">
				<span class="fanhui-icon"></span>				
                <span class="bofang-icon"></span>
            </div>
			<div class="singer-xiang-image"><img src=""></div>
			<div class="singer-xiang-title"><span class="paihangbofang"></span>播放全部</div>
			<ol class="singer-xiang-list paihang-list">
				<li class="clearfix" v-for="item,index in paihangx">
					<div class="singer-xiang-item">
						<p class=singer-xiang-item-song>{{item.data.songname}}</p>
						<p class=singer-xiang-item-zhuanji>{{item.data.singer[0].name}}</p>
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
                paihangx: {}
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

<template>
  <div id="box">
			
            <div class="dianfengbang">QQ音乐巅峰榜</div>
            <div class="item-title ">
                 <p class="item-title-text">推荐榜单</p>
            </div>
            <div class="bangdancontent">
            	<dl class="bangdan-item clearfix">
            		<dt><img src=""/></dt>
            		<dd>
            			<ul class="bangdan-ul">
            				<li class="bangdan-item-title" v-for="item,index in paihang">
            					<span class="bangdan-number">1</span>
            					<a href="#" class="bangdan-geming">{{item.data.songname}}</a>
            					<a href="#" class="gang">-</a>
            					<a href="#" class="bangdan-singer">{{item.miaov}}</a>
            				</li>
            				
            				<li class="jiantou"></li>
            			</ul>
            		</dd>
            	</dl>
            	
            </div>
            <div class="quanqiubang dianfengbang">全球榜</div>
             <div class="quanqiubang-item">
                <ul class="quanqiubang-gedan clearfix">
                    <li>
                        <dl class="quanqiubang-gedan-item">
                            <dt><img src=""></dt>
                            <dd class="quanqiubang-gedan-item-title">耳朵不放假假期都去哪</dd>
                        </dl>                        
                    </li>
                    
                </ul>
            </div>
		</div>
</template>

<script>
    var jsonp = require('jsonp');
    var data={}
    export default {
        
        data() {
            return {          
                paihang: {}
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
            jsonp(`https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1`,
            {
                param: 'jsonCallback'

            },function(err,data){
                console.log(data)       
            });

        }
    }
</script>

<style>


</style>

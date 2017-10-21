<template>
  <div id="box">
			
            <div class="dianfengbang">QQ音乐巅峰榜</div>
            <div class="item-title ">
                 <p class="item-title-text">推荐榜单</p>
            </div>
            <div class="bangdancontent">
            	<dl class="bangdan-item clearfix">
            		<dt><img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_204505031.jpg"/></dt>
            		<dd>
            			<ul class="bangdan-ul">
            				<li class="bangdan-item-title">
            					<span class="bangdan-number">{{}</span>
            					<a href="#" class="bangdan-geming">{{}}</a>
            					<a href="#" class="gang">-</a>
            					<a href="#" class="bangdan-singer">{{}}</a>
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
       
         mounted: function() {
            console.log(123)
            var url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1&jsonCallback=jsonCallback"; 
            $.getJSON(url, function(data){ 
          
                console.log(data)
            });
            

        }
    }
</script>

<style>


</style>

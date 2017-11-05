<template>
   <div id="paihangbox">
            <div class="header clearfix">
				<span class="fanhui-icon"></span>				
                <span class="bofang-icon"></span>
            </div>
			<div class="singer-xiang-image"><img src=""></div>
			<div class="gedan-xiang">
				<p class="gedan-xiang-name">耳朵不放假</p>
				<p class="gedan-xiang-dec">30首</p>
				
			</div>
			<div class="singer-xiang-title"><span class="paihangbofang"></span>播放全部</div>
			<ol class="singer-xiang-list paihang-list">
				<li class="clearfix">
					<div class="singer-xiang-item">
						<p class=singer-xiang-item-song>遇见</p>
						<p class=singer-xiang-item-zhuanji>薛之谦</p>
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
         mounted: function() {
            let that = this
            jsonp(`https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid=2687351885&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
        `,
            {
            
            },function(err,data){
            console.log(data)
           
            
            });

        }
      
    }
</script>

<style>


</style>

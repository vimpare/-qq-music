<template>
  <div id="paihangbox">
            <div class="header clearfix">
				<span class="fanhui-icon"></span>
				<p>歌手</p>
                <span class="bofang-icon"></span>
            </div>
            <ul class="singer-fenlei">
				<li>
					<ul class="clearfix">
						<li><a>全部</a></li>
						<li><a>内地</a></li>
						<li><a>港台</a></li>
						<li><a>欧美</a></li>
						<li><a>日本</a></li>
						<li><a>韩国</a></li>
						<li><a>其他</a></li>
					</ul>
				</li>
				<li>
					<ul class="clearfix">
						<li><a>全部</a></li>
						<li><a>男</a></li>
						<li><a>女</a></li>
						<li><a>组合</a></li>						
					</ul>
				</li>
				<li>
					<ul class="clearfix">
						<li><a>全部</a></li>
						<li><a>流行</a></li>
						<li><a>嘻哈</a></li>
						<li><a>摇滚</a></li>
						<li><a>电子</a></li>
						<li><a>民谣</a></li>
						<li><a>R&B</a></li>
						<li><a>民歌</a></li>						
						<li><a>轻音乐</a></li>
					</ul>
				</li>
			</ul>
			<mt-index-list :show-indicator="false">
			  <mt-index-section :index="itemAll.name" v-for="(itemAll, key) in singerlistAll" >
			  
			  </mt-index-section>
			</mt-index-list>
			<ul class="singer-list">
				<li v-for="item,index in singer" >
					<dl class="clearfix" @touchstart="togeshoux(item)">
						<router-link to="/geshoux">
							<dt class="singer-list-image"><img :src="getmid(item.Fsinger_mid)"></dt>
							<dd class="singer-list-name">{{item.Fsinger_name}}</dd>
							<dd class="singer-list-icon"></dd>
						</router-link>
					</dl>
				</li>
				
				
			</ul>
			
	</div>
</template>

<script>
    var jsonp = require('jsonp');
    var data={}
	const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
	 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	 const loop = function() {
		let arr = [];
		letter.forEach(item => arr.push({
			name: item,
			index: item,
			singerlist: []
		}));
		return arr;
	};
	const singerlistArr = [
		{
			name: '热门',
			index: 'all',
			singerlist: []
		},
		...loop()
	];
    export default {
        
        data() {
            return {          
                singer: {},
				singerlistAll: {}
            }
        },
        methods:{
            getmid(id){              
                let src='';
                src='https://y.gtimg.cn/music/photo_new/T001R150x150M000'+id+'.jpg?max_age=2592000'
                return src           
            },
			togeshoux(item){
				this.$store.commit('getmid', item)
				

			}
        },
        mounted: function() {
            console.log(123)
            let that = this
            jsonp(`https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
        `,
            {
                param: 'jsonpCallback'

            },function(err,data){
               console.log(data.data.list)
                that.singer=data.data.list;
                
            });
			let i = 0,
				self = this,
				len = singerlistArr.length;
			
			this.singerlistAll = singerlistArr;
			
        }
    }
</script>

<style>
.mint-indexlist{
	position:fixed;
	z-index:999;
}

</style>

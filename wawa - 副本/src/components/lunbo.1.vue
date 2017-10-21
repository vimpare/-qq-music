

<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" ><img src="../assets/yinyuecss/bnner.png"></div>
            <div class="swiper-slide"><img src="../assets/yinyuecss/bnner.png"></div>
            <div class="swiper-slide"><img src="../assets/yinyuecss/bnner.png"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>

    import Swiper from 'swiper';
    var jsonp = require('jsonp');
    export default {
        data(){
            return{
               lunboImg:[]
            }
        },
       
        mounted() {
            console.log('mounted', this)
            let that=this
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
             jsonp(`https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={%22focus%22:{%22module%22:%22QQMusic.MusichallServer%22,%22method%22:%22GetFocus%22,%22param%22:{}}}
        `,
            {
               
            },function(err,data){
                console.log(data.focus.data.content)
                that.lunboImg=data.focus.data.content
                console.log(that.lunboImg)
            });
        }
    }
</script>


<style>
    .swiper-container {
        width: 100%;
        height: 100%;
        margin-top:10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
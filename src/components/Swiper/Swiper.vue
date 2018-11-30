<template>
    <div class="swiper-container" @mouseenter="changeBtn" @mouseleave="changeBtn">
      <div class="swiper-wrapper" >
        <div class="swiper-slide"><img src="http://www.8cake.cn/upload/201806/11/201806110926161824.png" alt=""></div>
        <div class="swiper-slide"><img src="http://www.8cake.cn/upload/201806/11/201806110922476811.png" alt=""></div>
        <div class="swiper-slide"><img src="http://www.8cake.cn/upload/201603/11/201603111450575937.jpg" alt=""></div>
      </div>

      <!-- 如果需要导航按钮 -->
      <div v-show="judge" class="swiper-button-prev">
        <div  class="swiper-nav-button"></div>
      </div>
      <div v-show="judge" class="swiper-button-next">
        <div class="swiper-nav-button"></div>
      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination"></div>-->
      <div class="circle">
        <div style="margin-right: 10px;" class="circles" @mouseover="aa(0)">1</div>
        <div style="margin-right: 10px;" class="circles" @mouseover="aa(1)">2</div>
        <div class="circles" @mouseover="aa(2)">3</div>
      </div>

    </div>

</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
    export default {
        name: "Swiper",
      data:function () {
        return {
          judge:false,
          swiper:{}
        }
      },
      mounted(){
        this.swiper=new Swiper ('.swiper-container', {
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          speed:1000,
          effect : 'fade',
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        })
      },
      methods:{
        changeBtn(){
          this.judge = !this.judge;
        },
        aa(index){
            this.swiper.slideToLoop(index, 1000, false);//切换到第一个slide，速度为1秒
            console.log(11);
        }
      }
    }

</script>

<style scoped>
  .swiper-container {
    width: 960px;
    height: 330px;
    /*margin: 20px auto;*/
    position: relative;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .swiper-button-next,.swiper-button-prev{
    /*display: none;*/
    width: 40px;
    height: 100px;
    position: absolute;
    top: 115px;
  }
  .swiper-nav-button{
    width: 100%;
    height: 100%;
    background: rebeccapurple;
    opacity: 0.5;
  }
  .circle{
    width: 105px;
    height: 25px;
    position: absolute;
    left: 15px;
    bottom: 12px;
    z-index: 5;
  }
  .circles{
    width: 25px;
    height: 25px;
    background: black;
    color: white;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 25px;
  }
  .circles:hover{
    background: purple;
  }
</style>

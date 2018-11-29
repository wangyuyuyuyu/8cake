<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "test",
      mounted(){
        new Swiper ('.swiper-container', {
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // 如果需要滚动条
          scrollbar: '.swiper-scrollbar',
        })
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }

</style>

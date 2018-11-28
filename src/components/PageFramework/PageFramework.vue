<template>
    <div>
      <header >
        <div class="head-wrapper">
        <div class="head-content">
          <img class="logo" src="../../assets/images/logo.gif" alt="">
          <div class="head-content-right">
            <div class="site-nav clearfix">
              <div>

                <!--<router-link to="/foods" tag="span" class="goods">商品</router-link>-->
                <router-link to="/login"><span>登录</span></router-link>

                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a href="#"><span>注册</span></a>

              </div>
              <div>
                <a href="">
                  <img src="../../assets/images/cakecart.png" alt="">
                  <span class="cart-num">3</span>
                </a>
              </div>
              <div>
                <a href="">
                  <img src="../../assets/images/ico_wx.gif" alt="">
                </a>
              </div>
              <div>
                <img src="../../assets/images/phone.gif" alt="">
                <span>4006 258 024</span>
              </div>
            </div>
            <ul class="menu clearfix">
              <router-link to="/"><li>首页</li></router-link>
              <span>|</span>
              <a href=""><li>蛋糕名录</li></a>
              <span>|</span>
              <a href=""><li>服务介绍</li></a>
              <span>|</span>
              <a href=""><li>关于我们</li></a>
            </ul>
          </div>
          <div class="swiper-box">
            <!--这里是swiper-->
          </div>
        </div>
        </div>
      </header>
      <div class="centent">
        <router-view></router-view>
      </div>
      <footer class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-item">
            <p class="footer-title">当天制作新鲜直达</p>
            <p>选用新鲜材料当天制作，让您当日就能体验新鲜食材，最快速的让您感受健康品质享受。</p>
          </div>
          <div class="v-line"></div>
          <div class="footer-item">
            <p class="footer-title">精选世界好原料</p>
            <p>选用新鲜材料当天制作，让您当日就能体验新鲜食材，最快速的让您感受健康品质享受。</p>
          </div>
          <div class="v-line"></div>
          <div class="footer-item">
            <p class="footer-title">天然健康</p>
            <p>纯天然食材，不含人工香料，不含色素，不添加防腐剂。只为让您品尝到最健康的美味。</p>
          </div>
          <div class="v-line"></div>
          <div class="footer-item">
            <p class="footer-title">无缝冷链生产与配送</p>
            <p>全面净化的无菌生产环境，无缝对接的冷链过程，确保您的健康与安全。</p>
          </div>
        </div>
        <div class="footer-nav-wrap">
          <div class="h-line"></div>
          <div class="footer-nav">
            <p>
              <span>订购专线：4006 258 024</span>
              <span>地 址：沈阳市太原南街97号</span>
              <span>联系我们</span>
            </p>
            <p>
              辽ICP备14013955号 Copyright © 2014 8cake delight All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
  import HomeContent from "../HomeContent/HomeContent"
  // import Login from "../Login/Login"

  export default {
        name: "PageFramework",
        components:{
          HomeContent,
          // Login
        }
    }
</script>

<style scoped>
  header{
    background:#6a3e4f;
  }
  .head-wrapper{
    background: url("../../assets/images/bg-body.gif") repeat-x center top;
    width: 100%;
    min-width: 960px;
  }
  .head-content{
    width: 980px;
    margin: 0 auto;
  }
  .logo{
    width: 331px;
    margin-left: 10px;
  }
  .head-content-right{
    float: right;
  }
  .centent{

  }
  .site-nav{
    line-height: 30px;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 27px;
    float: right;
    margin-right: 20px;
  }
  .site-nav > div{
    float: left;
  }
  .site-nav > div:nth-of-type(2){
    margin-left: 19px;
    margin-right: 15px;
  }
  .site-nav > div:last-of-type{
    margin-left: 15px;
  }
  .site-nav a{
    color:#864b63;
  }
  .cart-num{
    font-size:14px;
    font-weight: bold;
  }
  .menu{
    color:#864b63;
  }
  .menu span{
    float:left;
    padding-top: 3px;
  }
  .menu a{
    float: left;
    height: 31px;
    padding:5px 12px 6px;
    font-weight: bold;
    border-radius:3px;
    font-size: 14px;
    color: #864b63;
  }
  .menu  a:hover{
    background: #E69EA8;
    color: white;
  }

  .swiper-box{
    width: 980px;
    height: 350px;
    border:10px solid #aa6581;
  }

  .footer-wrapper{
    width: 100%;
    height: 280px;
    background: #703F54;
    overflow: hidden;
    position: relative;
    /*bottom: 0;*/
  }

  .footer-content{
    width: 980px;
    height: 120px;
    margin:30px auto 0px;
    color:white;
    display: flex;
    justify-content: space-between;
  }
  .footer-item{
    width: 200px;
  }
  .footer-title{
    font-size: 16px;
    font-family: "微软雅黑";
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
  }
  .footer-item>p:last-of-type{
    font-size: 13px;
    line-height: 22px;
  }
  .v-line{
    width: 1px;
    height: 100%;
    background: white;
  }
  .footer-nav-wrap{
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    background: #6A3E4F;
  }
  .footer-nav{
    width: 960px;
    margin:20px auto 0px;
    font-size: 12px;
    color:#995870;
    text-align: center;
  }
  .h-line{
    width: 960px;
    margin:0 auto;
    height: 1px;
    background: #995870;
  }
  .clearfix:after{
    content:"";
    display: block;
    clear: both;
  }
  .clearfix{
    zoom:1;
  }
</style>

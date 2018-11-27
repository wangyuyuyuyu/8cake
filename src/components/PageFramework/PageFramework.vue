<template>
    <div>
      <header class="head-wrapper">
        <div class="head-content">
          <img class="logo" src="../../assets/images/logo.gif" alt="">
          <div class="head-content-right">
            <div class="site-nav clearfix">
              <div>
                <a href="#"><span>登录</span></a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a href="#"><span>注册</span></a>
              </div>
              <div>
                <img src="../../assets/images/cakecart.png" alt="">
                <span>3</span>
              </div>
              <div>
                <img src="../../assets/images/ico_wx.gif" alt="">
              </div>
              <div>
                <img src="../../assets/images/phone.gif" alt="">
                <span>4006 258 024</span>
              </div>
            </div>
            <ul class="menu clearfix">
              <li>首页</li>
              <span>|</span>
              <li>蛋糕名录</li>
              <span>|</span>
              <li>服务介绍</li>
              <span>|</span>
              <li>关于我们</li>
            </ul>
          </div>
          <div class="swiper-box">
            <!--这里是swiper-->

          </div>
        </div>
      </header>
      <footer></footer>
    </div>
</template>

<script>
    export default {
        name: "PageFramework"
    }
</script>

<style scoped>
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
  .site-nav{
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 40px;
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
  .menu > li{
    float: left;
  }
  .swiper-box{
    width: 980px;
    height: 437px;
    border:10px solid #aa6581;
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

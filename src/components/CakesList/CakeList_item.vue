<template>
    <div id="CakeList_item">
      <img src="http://www.8cake.cn/upload/201501/21/201501212141440068.jpg" alt="">
      <div class="CakeList_item_content">
        <a href="">绿茶红豆<span class="span2">Green Tea red bean</span></a>
        <span class="span3">总统淡奶油（法国）、芝士、黄油（新西兰) 、抹茶红豆(中国)、细砂糖(韩国)、牛奶（德国）等</span><br>
        <span class="span4">纯正抹茶搭配蜜制红豆香甜淡雅，给心灵送上亲切又怡然的朴实问候，让生活回归简单。</span>
        <label style="top: 30px;right: 40px;"><input type="radio" name="radio">1.5磅：约13×13(cm) <span>【¥168】</span></label>
        <label style="top: 60px;right: 40px;"><input type="radio" name="radio">2.0磅：约17×17(cm) <span>【¥248】</span></label>
        <label style="top: 90px;right: 40px;"><input type="radio" name="radio">3.0磅：约23×23(cm) <span>【¥348】</span></label>
        <p class="p1">了解更多>></p>
        <p class="p2">加入购物车</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CakeList_item",
      data:function () {
        return {
          arr:{}
        }
      },

      // created(){
      //   fetch('/api/0703php05/8cakePhp/Cake_item.php').then(res=>res.json()).then(res=>{
      //       console.log(res);
      //       this.arr = res;
      //       console.log(this.arr);
      //   }).catch(err=>{
      //     console.log(err)
      //   })
      // }
    }
</script>

<style scoped>
  #CakeList_item{
    width: 960px;
    height: 220px;
    border-bottom: 1px dotted #e69ea8;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  img{
    width: 220px;
    height: 216px;
    float: left;
  }
  .CakeList_item_content{
    margin-left: 250px;
    margin-top: 30px;
  }
  a{
    font-family: "微软雅黑";
    font-size: 22px;
    color: #aa6581;
    text-decoration: none;
    height: 40px;
  }
  label{
    display: block;
    font-size: 12px;
    line-height: 28px;
    height: 28px;
    color: #e69ea8;
    text-decoration: none;
    padding: 0px 5px 0px 25px;
    position: absolute;
  }
  label span{
    color:#aa6581;
    margin-left: 15px;
  }
  .span2{
    font-family: Verdana, Geneva, sans-serif;
    font-size: 20px;
    color: #e69ea8;
    text-decoration: none;
  }
  .span3{
    font-family: "微软雅黑";
    font-size: 14px;
    line-height: 24px;
    color: #e69ea8;
    text-decoration: none;
    height: auto;
    width: 430px;
    margin-top: 3px;
    margin-bottom: -15px;
    display: block;
  }
  .span4{
    font-family: "微软雅黑";
    font-size: 12px;
    line-height: 20px;
    color: #b0adad;
    text-decoration: none;
    width: 430px;
    display: block;
    overflow: hidden;
  }
  input{
    width: 10px;
    vertical-align: middle;
  }
  p{
    background: #e69ea8;
    width: 130px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: white;
    position: absolute;
    bottom: 0;
    cursor: pointer;
  }
  p:hover{
    background: #aa6581;
  }
  .p1{
    right:160px;
  }
  .p2{
    right:0px;
  }
</style>

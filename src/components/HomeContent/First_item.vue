<template>
    <div class="first_item">
      <img src="http://www.8cake.cn/upload/201501/21/201501212141440068.jpg" alt="">
      <div class="first_item_div">
        <div style="margin-left: 10px">
          <span class="span1">绿茶红豆</span><br>
          <span class="span2">Green Tea red bean</span><br>
          <span class="span3">总统淡奶油（法国）、芝士、黄油（新西兰)...</span><br>
          <label><input type="radio" name="radio">1.5磅/168元</label>
          <label><input type="radio" name="radio">2.0磅/248元</label>
          <label><input type="radio" name="radio">3.0磅/348元</label>
        </div>
        <div class="first_item_click">
          <span>详情>></span>
          <span style="margin-left: 40px">立即购买</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "First_item",
      data:function(){
        return {
          judge:true
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .first_item{
    width: 158px;
    height: 150px;
    overflow: hidden;
    position: relative;
  }
  .first_item img{
    position: absolute;
    z-index: -1;
    width: 158px;
    height: 160px;
    top: 0;
    left: 0;
  }
  .first_item_div{
    margin-top:150px;
    width: 158px;
    height: 150px;
    color:white;
    background: #e69ea8;
    z-index: 1;
    opacity: 0.8;
    transition: 0.7s;
  }
  .first_item:hover .first_item_div{
    margin-top: 0px;
  }
  .span1{
    font-size: 16px;

  }
  .span2{
    font-size: 12px;

  }
  .span3{
    font-size: 10px;
  }
  .first_item_div label{
    font-size: 12px;
    line-height: 12px;
    margin:0;
    padding: 0;
    vertical-align: middle;
  }
  .first_item_div input{
    width: 8px;
    vertical-align: middle;
  }
  .first_item_click{
    width: 140px;
    border-top: 1px solid white;
    font-size: 10px;
    margin-left: 10px;
  }
  .first_item_click span{
    cursor: pointer;
  }

</style>

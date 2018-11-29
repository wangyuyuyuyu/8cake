<template>
    <div style="overflow: hidden;width: 960px;margin: 0 auto;">
      <p>全部种类</p>
      <p>巧克力</p>
      <p>慕斯</p>
      <p>乳酪</p>
      <p>鲜果</p>
      <p>常温乳脂</p>
      <p>无糖</p>
      <p>儿童蛋糕</p>
      <p>祝寿蛋糕</p>
      <p>蜡烛</p>
    </div>
</template>

<script>
    export default {
        name: "CategoryNav"
    }
</script>

<style scoped>
  p{
    /*background-color:#6a3e4f;*/
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-weight: 200;
    float: left;
    border-right: 1px solid #a2698a;
    color:#6a3e4f;
    text-decoration: none;
    margin-top: 5px;
    cursor: pointer;
  }
  p:hover{
    background-color:#6a3e4f;
    color:white;
  }
</style>

<template>
    <div class="first_item">

        <img :src="obj.img1" alt="">
        <div class="first_item_div">
          <div style="margin-left: 10px">
              <span @click="routerTo(obj)" style="cursor: pointer" class="span1">{{obj.cakeNameCN}}</span><br>
              <span class="span2">{{obj.cakeNameEN}}</span><br>
            <span class="span3">{{obj.describe.substr(0,20)}}...</span><br>
            <label><input type="radio" name="radio">1.5磅/{{obj.price1}}元</label>
            <label style="margin-left: 20px"><input type="radio" name="radio">2.0磅/{{obj.price2}}元</label><br>
            <label><input type="radio" name="radio">3.0磅/{{obj.price3}}元</label>
          </div>
          <div class="first_item_click">
            <span @click="routerTo(obj)">详情>></span>
            <span style="margin-left: 80px">立即购买</span>
          </div>
        </div>

    </div>
</template>

<script>
    export default {
      name: "First_item",
      props:['obj'],
      data:function(){
        return {
          judge:true,
          path:`/detail`
        }
      },
      mounted(){
        console.log(this.props);
      },
      methods:{
        routerTo(obj){
          this.$router.push({path:'/detail',query:{obj:obj}});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration:none;
    out-line: none;
    color:white;
  }
  .first_item{
    width: 210px;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .first_item img{
    position: absolute;
    z-index: -1;
    width: 210px;
    height: 200px;
    top: 0;
    left: 0;
  }
  .first_item_div{
    margin-top:200px;
    width: 210px;
    height: 200px;
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
    font-size: 20px;

  }
  .span2{
    font-size: 14px;

  }
  .span3{
    display: block;
    height: 40px;
    font-size: 14px;
  }
  .first_item_div label{
    font-size: 14px;
    line-height: 14px;
    margin:0;
    padding: 0;
    vertical-align: middle;
  }
  .first_item_div input{
    width: 10px;
    vertical-align: middle;
  }
  .first_item_click{
    width: 200px;
    border-top: 1px solid white;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 10px;
    line-height: 30px;
  }
  .first_item_click span{
    cursor: pointer;

  }

</style>

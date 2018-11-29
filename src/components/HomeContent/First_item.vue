<template>
    <div class="first_item">
      <router-link to="/detail">
        <img :src="obj.img1" alt="">
        <div class="first_item_div">
          <div style="margin-left: 10px">
            <span class="span1">{{obj.cakeNameCN}}</span><br>
            <span class="span2">{{obj.cakeNameEN}}</span><br>
            <span class="span3">{{obj.describe.substr(0,20)}}...</span><br>
            <label><input type="radio" name="radio">1.5磅/{{obj.price1}}元</label>
            <label><input type="radio" name="radio">2.0磅/{{obj.price2}}元</label>
            <label><input type="radio" name="radio">3.0磅/{{obj.price3}}元</label>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: "First_item",
      props:['obj'],
      data:function(){
        return {
          judge:true,

        }
      },
      mounted(){
        // console.log(this.props);
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
    width: 200px;
    border-top: 1px solid white;
    font-size: 10px;
    margin-left: 10px;
  }
  .first_item_click span{
    cursor: pointer;
  }

</style>

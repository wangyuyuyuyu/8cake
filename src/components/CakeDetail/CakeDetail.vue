<template>
    <div>
      <div class="detail-header">
        <div class="detail-header-left">
          <div class="detail-bigimg">
            <img :src="this.judge?this.$route.query.obj.img2:imgPath" v-show="this.$route.query.obj.img2" alt="">
          </div>
          <div class="detail-imgs">
            <img id="img2" @mouseenter="changeImgUrl(2)" :src="this.$route.query.obj.img2" alt="">
            <img id="img3" @mouseenter="changeImgUrl(3)" :src="this.$route.query.obj.img3" alt="">
            <img id="img4" @mouseenter="changeImgUrl(4)" :src="this.$route.query.obj.img4" alt="">
          </div>
        </div>
        <div class="detail-header-right">
          <p class="cake-name">{{this.$route.query.obj.cakeNameCN}}</p>
          <img src="../../assets/images/tt.png" alt="">
          <p class="cake-name">{{this.$route.query.obj.cakeNameEN}}</p>
          <ul class="cake-name-wrapper">
            <li class="cake-price">
              <input type="radio" name="cakePrice" id="weight1"><label for="weight1">1.5磅：约13*13cm</label><span class="price">【￥{{this.$route.query.obj.parce1}}】</span>
            </li>
            <li class="cake-price">
              <input type="radio" name="cakePrice" id="weight2"><label for="weight2">1.5磅：约13*13cm</label><span class="price">【￥{{this.$route.query.obj.parce2}}】</span>
            </li>
            <li class="cake-price">
              <input type="radio" name="cakePrice" id="weight3"><label for="weight3">1.5磅：约13*13cm</label><span class="price">【￥{{this.$route.query.obj.parce3}}】</span>
            </li>
          </ul>
          <div class="btn-wrapper">
            <input class="btns" type="button" value="加入购物车">
            <input class="btns" type="button" value="立即购买">
          </div>
          <div class="v-line"></div>
          <p class="detail-text">
            {{this.$route.query.obj.describe}}
          </p>
        </div>
      </div>
      <div class="goods-detail-wrapper">
        <div class="goods-detail-tag">
          {{this.$route.query.obj.describe}}
        </div>
        <div class="goods-detail-centent">
          <div>
            <span>口味：{{this.$route.query.obj.flavor}}</span>
            <span>适合人群：{{this.$route.query.obj.suitable}}</span>
            <span>{{this.$route.query.obj.fresh}}</span>
          </div>
          <div>
            <span>甜度：{{this.$route.query.obj.score}}</span>
            <span>最佳食温：{{this.$route.query.obj.temperature}}</span>
            <span>原材料：{{this.$route.query.obj.material}}</span>
          </div>
        </div>
        <p class="goods-detail-text">
          {{this.$route.query.obj.describe}}
        </p>
        <div class="goods-detail-tips">
          <p>&nbsp;&nbsp;小提示:</p>
          <p>1、二环内免费送货；</p>
          <p>2、蛋糕在收到后1小时内食用最佳。</p>
          <p>3、如对上述食材有过敏经历者，请选择其它款蛋糕。</p>
          <p>4、蛋糕规格及免费配送餐具 ：</p>
          <p>1.5磅：约14×14(cm) 适合2-4人食用 免费配送4套餐具</p>
          <p>2.0磅：约18×18(cm) 适合4-8人食用 免费配送6套餐具</p>
          <p>3.0磅：约21×21(cm) 适合8-12人食用 免费配送8套餐具</p>
          <p>5.0磅：约28×28(cm) 适合16-20人食用 免费配送10套餐具</p>
          <p>订购5磅及5磅以上规格的蛋糕，请与客服人员联系，订购电话：18240062903  微信手机号13840002717</p>
        </div>
        <div class="recommend-wrapper">
          <p class="recommend-title">八度推荐</p>
          <div class="recommend-imgs-wrapper">
            <img class="recommend-imgs" src="http://www.8cake.cn/upload/201501/21/201501212141440068.jpg"></img>
            <img class="interval-img" src="../../assets/images/jhe_ds.png"></img>
            <img class="recommend-imgs" src="http://www.8cake.cn/upload/201501/21/201501212143464648.jpg"></img>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CakeDetail",
      data:function () {
        return {
          imgPath:'',
          judge:true
        }
      },
      methods:{
        changeImgUrl(index){
          this.judge = false;
          this.imgPath = document.getElementById('img'+index).src;
          console.log(index);
        }
      },
      mounted(){
        // var url= document.getElementById('img2').src;
        // this.imgPath = url;
      },
      computed:{
        imgUrl(){
          // var url = document.getElementById('img2').src;
          // return url
        }
      }
    }
</script>

<style scoped>
  .detail-header{
    width: 980px;
    padding:20px;
    margin: 20px auto 40px;
    overflow:hidden;
  }
  .detail-header-left{
    float: left;
  }
  .detail-bigimg{
    margin-bottom: 10px;
  }
  .detail-bigimg>img{
    width: 500px;
    height: 500px;
  }
  .detail-imgs{
    font-size: 0;
    text-align: center;
  }
  .detail-imgs>img{
    width: 126px;
    height: 126px;
    margin-right: 5px;
  }

  .detail-header-right{
    /*width: 300px;*/
    padding-top: 40px;
    padding-left: 150px;
    overflow: hidden;
    text-align: center;
  }
  .cake-name{
    font-size: 24px;
    font-family: Arial;
    color: #aa6581;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .cake-name:last-of-type{
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .cake-name-wrapper{
    margin-top: 40px;
    margin-bottom: 70px;
  }
  .cake-price{
    color: #e69ea8;
    margin-bottom: 10px;
  }
  .price{
    margin-left: 30px;
  }
  .btn-wrapper{
    margin-bottom: 20px;
  }
  .v-line{
    height: 1px;
    border-bottom: 1px dotted #e69ea8;
    margin-bottom: 30px;
  }
  .btns{
    height: 30px;
    width: 100px;
    background: #e69ea8;
    padding:0;
    border: 0;
    color: white;
  }
  .detail-text{
    font-size: 12px;
    color: #78394e;
    text-align:justify;
  }
  .goods-detail-wrapper{
    width: 980px;
    margin:20px auto;
    color: #78394e;
    line-height: 2;
  }
  .goods-detail-tag{
    width: 110px;
    height: 37px;
    line-height: 37px;
    background: #aa6581;
    text-align: center;
    color:white;
  }
  .goods-detail-centent{
    border-top: 2px solid #aa6581;
    border-bottom: 1px dotted #e69ea8;
    font-size: 12px;
  }
  .goods-detail-centent>div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .goods-detail-centent>div>span{
    width: 300px;
  }
  .goods-detail-text{
    margin: 40px auto 60px;
  }
  .recommend-wrapper{
    width: 948px;
    height: 232px;
    background: url("../../assets/images/ewa.gif") 0 0/948px 232px no-repeat;
    margin:30px auto;
    overflow: hidden;
  }
  .recommend-title{
    margin-top: 25px;
    text-align: center;
  }
  .recommend-imgs-wrapper{
    width: 860px;
    margin:20px auto;
  }
  .interval-img{
    margin-left: 30px;
    margin-right: 30px;
  }
  .recommend-imgs{
    width: 110px;
    height: 110px;
  }
</style>

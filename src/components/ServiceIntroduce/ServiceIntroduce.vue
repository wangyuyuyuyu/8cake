<template>
    <div>
      <div class="content">
        <div class="boxwrap">
          <div class="header">
            <div class="item-wrap" @click="isShow(0)" :class= "this.arr[0]?'active':'unactive'"><div>会员服务</div><span>Membership Service</span></div>
            <div class="item-wrap" @click="isShow(1)" :class= "this.arr[1]?'active':'unactive'"><div>订购帮助</div><span>Help To Order</span></div>
            <div class="item-wrap" @click="isShow(2)" :class= "this.arr[2]?'active':'unactive'"><div>包装显示</div><span>Packaging Show</span></div>
            <div class="item-wrap" @click="isShow(3)" :class= "this.arr[3]?'active':'unactive'"><div>配送服务</div><span>Distribution Service</span></div>
            <div class="item-wrap" @click="isShow(4)" :class= "this.arr[4]?'active':'unactive'"><div>联系我们</div><span>Contact Us</span></div>
          </div>
          <!--会员服务分页-->
          <div class="server-item" v-if="arr[0]">
            <p class="title">八度蛋糕（沈阳味滋美商贸有限公司）旨在为人们提供优质的饮食品味享受。所有蛋糕均为优质进口原料，冷链物流无缝配送，快速方便的服务让您享受新鲜美味无需等待。</p>
            <div class="vip-pic">
              <img src="http://www.8cake.cn/upload/201409/13/201409131251577968.JPG" alt="">
            </div>
            <div class="vip-score"><span>会员积分</span></div>
            <div class="vip-item">
              <div><span>1</span><span>、首次订购产品即可免费申请办理会员卡，当次消费便开始积分</span></div>
              <div><span>2</span><span>、每消费一元即可相应获得一分的积分回馈</span></div>
              <div><span>3</span><span>、如进行会员卡充值，充值金额为元的倍数，并获得充值金额的双倍积分</span></div>
              <div><span>4</span><span>、因充值已获得双倍积分，充值后的消费将不予以重复积分</span></div>
              <div><span>5</span><span>、若发生退货，将按退货款金额收回所产生的积分</span></div>
              <div><span>6</span><span>、会员可随时查看账户下的“现金余额”和“可兑换积分”，并按相关规定使用</span></div>
              <div><span>7</span><span>、会员不可把积分转让给其他会员或任何第三方，不同账户下积分不能合并使用</span></div>
              <div><span>8</span><span>、积分不能折算成现金或者应用于规定活动范围以外的项目</span></div>
              <div><span>9</span><span>、积分可以用来兑换</span></div>
              <div><span class="one">10</span><span>、全额积分兑换，不足积分不可以使用信用卡或现金等方式补充积分兑换</span></div>
            </div>
          </div>
          <!--订购帮助页面-->
          <div class="help" v-if="arr[1]">{{arr[1]}}
            <div><span class="order">下单流程</span></div>
            <div>注册会员</div>
            <div class="MsoNormal">↓</div>
            <div><span>会员登陆（提示：如果在</span><span>20:30-08:30</span><span>之间下单，送货时间最早为</span><span>11</span><span>时）</span></div>
            <div><span>进入蛋糕目录</span><span>/</span><span>挑选商品</span></div>
            <div class="MsoNormal">↓</div>
            <div>放入购物车</div>
            <div class="MsoNormal">↓</div>
            <div>结算/确认订单信息（提示：注册会员卡，充值可获得双倍积分）</div>
            <div class="MsoNormal">↓</div>
            <div><span>选择支付方式（提示：线上支付可享受</span><span>9.8</span>折优惠）</div>
            <div class="MsoNormal">↓</div>
            <div><span>生成订单（提示：提前</span><span>24</span><span>小时订购享受</span><span>9.8</span>折优惠）</div>
            <div class="MsoNormal">↓</div>
            <div><span>客服联系</span><span>/</span><span>安排送货（提示：修改商品或送货时间，将根据修改内容延后</span><span>3</span><span>小时</span></div>
            <div class="hint"><span>温馨提示：</span><span>8°CAKE</span><span>沈阳市二环以内免费配送，如您的位置在此范围外需额外支付相应费用</span></div>
          </div>
          <!--包装展示分页-->
          <div class="packging" v-if="arr[2]">
            <img src="../../assets/images/packingshow.jpg" alt="" class="pack-pic">
            <img src="../../assets/images/packingshowtwo.jpg" alt="" class="pack-pic">
          </div>
          <!--配送服务-->
          <div class="Distribution" v-if="arr[3]">
            <span>本店产品需提前一天订购，免费送货上门。</span>
          </div>
          <!--联系我们-->
          <div class="" v-if="arr[4]">
            <div class="us-img">
              <img src="../../assets/images/Uscakes.jpg" alt="" class="Uscakes">
              <img src="../../assets/images/Ussweet.jpg" alt="">
              <img src="../../assets/images/UsworldCake.jpg" alt="">
            </div>
            <div>
              <p>	8CAKE 回归食物本有的健康和口感，</p>
              <p>精选世界优质材料的心意美味蛋糕，</p>
              <p>与身边的亲人、爱人、友人共同分享美味.......</p>
              <p>八度蛋糕地址：沈阳市惠工店 惠工街121-5号；沈阳市太原街店</p>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceIntroduce",
      data:function () {
        return{
            arr:[true,false,false,false,false],
            newArr:[true,false,false,false,false]
        }
      },
      methods:{
          isShow(index){
            for (let i =0; i<this.arr.length; i++){
              this.arr[i] = false;
            }
            this.$set(this.arr,index,true);
            console.log(this.arr);
          },
      }
    }
</script>

<style scoped>
  .content{
    background: #ffffff;
    margin: 0 auto;
  }
  .boxwrap{
    margin: 0 auto;
    width: 978px;
    min-height: 400px;
    background: #fff;
    text-align: left;
  }
  .header{
    height: 46px;
    width: 980px;
    border-bottom: 1px dotted #ecaba7;
    margin: 30px auto;
    display: flex;
  }
  .item-wrap{
    width: 140px;
    height: 41px;
    border-right: 1px dotted #ecaba7;
    text-align: center;
    /*padding: 5px 6px 0 5px;*/
    font-size: 14px;
    color: #aa6581;
  }
  .item-wrap:hover{
    background: pink;
  }
  .server-item{
    font-size: 12px;
  }
  .title{
    margin-left: 10px;
  }
  .vip-pic{

  }
  .vip-item{
    font-size: 12px;
    color: #78394e;
  }
  .vip-score{
    margin-top: 35px;
    font-size: 12px;
    color: #6a3e4f;
    font-weight: bold;
    text-align: left;
  }
  .vip-item div{
    margin-top: 5px;
  }
  .one{
    margin-left: -3px;
  }
  .help{
    font-size: 12px;
    line-height: 24px;
    height: auto;
    width: 980px;
    margin: auto;
    padding-bottom: 30px;
    margin-bottom: 50px;
    color: #78394e;
  }
  .order{
    font-weight: bold;
  }
  .MsoNormal{
    margin-left: 50px;
  }
  .hint{
    color: red;
  }
  .Distribution{
    font-size: 12px;
    line-height: 24px;
    height: auto;
    width: 980px;
    margin: auto;
    padding-bottom: 30px;
    margin-bottom: 50px;
    color: #78394e;
  }
  .Uscakes{
    border: 1px solid #78394e;
  }
  .us-img{
    text-align: center;
  }
  .active{
    background-color: #e69ea8;
  }
  .unactive{
    background-color: white;
  }
</style>

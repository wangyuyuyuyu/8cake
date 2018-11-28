<template>
    <div>
      <div class="background-line"></div>
      <div class="content">
        <div class="box-wrap">
          <div class="main-box">
            <div class="reg-box">
              <div class="reg-top">
                  <div class="step1"><span class="num">1</span><span>填写会员信息</span></div>
              </div>
              <div class="reg-content">
                <form action="">
                  <div class="reg-list">
                    <div class="list-wrap">
                      <div class="list-item">
                        <span class="xing">*</span><span>手机号码：</span>
                        <input type="text" class="inputs">
                      </div>
                      <div class="list-items"><span>（填写正确的手机号码！）</span></div>
                    </div>

                    <div class="list-wrap">
                      <div class="list-item"><span class="xing">*</span><span>密码：</span><input type="text" class="inputs"></div>
                      <div class="list-items"><span>（为了您的帐户安全，强烈建议您的密码使用字符+数字等多种不同类型的组合，并且密码长度大于6位。）</span></div>
                    </div>

                    <div class="list-wrap">
                      <div class="list-item"><span class="xing">*</span><span>确认密码：</span><input type="text" class="inputs"></div>
                      <div class="list-items"><span>（确保密码输入正确。）</span></div>
                    </div>

                    <div class="list-wrap">
                      <div class="list-item"><span class="xing">*</span><span>昵称：</span><input type="text" class="inputs"></div>
                      <div class="list-items"><span>（填写您的昵称或姓名。）</span></div>
                    </div>

                    <div class="list-wrap">
                      <div class="list-item"><span class="xing">*</span><span>Email：</span><input type="text" class="inputs"></div>
                      <div class="list-items"><span>（填写正确的邮箱地址，忘记密码时可以通过邮箱找回！）</span></div>
                    </div>

                    <div class="list-wrap">
                      <div class="list-item-yz"><span class="xing">*</span><span>验证码：</span><input type="text" class="inputs-yz"></div>
                      <div class="list-items"><span>（单击显示验证码，不区别大小写！）</span></div>
                    </div>

                    <button class="zc-btn">注册</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register"

    }
</script>

<style scoped>
  .background-line{
    background: #aa6581;
    height: 20px;
    width: 100%;
  }
  .content{
    background: #ffffff;
    height: auto;
  }
  .box-wrap{
    margin: 0 auto;
    width: 978px;
    height: auto;
    background: #fff;
    text-align: left;
  }
  .main-box{
    padding: 20px;
    background: #fff;
  }
  .reg-box{
    margin: 0 auto;
    padding: 30px;
    border: 1px solid #e69ea8;
  }
  .reg-top{
    padding: 10px 0 10px;
    height: 44px;
    border-bottom: 1px solid #e69ea8;
  }
  .step1{

    font: bold 18px "Microsoft Yahei";
    color: #a2698a;
  }
  .num{
    color: white;
    font-size: 12px;
    background-color: #a2698a;
    padding: 2px 5px;
    margin-right: 5px;
  }
  .reg-content{
    margin-top: 10px;
  }
  .reg-list{
    margin-left: 50px;
  }
  .list-item{
    width: 350px;
    /*padding: 5px;*/
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .inputs{
    width: 250px;
    height: 30px;
    border: 1px solid #e69ea8;
    margin-left: 5px;
    border-radius: 4px;
  }
  .xing{
    color: red;
  }
  .list-items{
    margin-left: 95px;
    color: #999;
    font-size: 12px;
    /*padding: 8px 0;*/
  }
  .zc-btn{
    width: 200px;
    height: 36px;
    background-color: #a4627d;
    border: none;
    border-radius: 5px;
    margin-left: 100px;
    color: white;
  }
  .list-wrap{
    padding: 13px 0;
  }
  .inputs-yz{
    width: 60px;
    height: 30px;
    border: 1px solid #e69ea8;
    margin-left: 5px;
    border-radius: 4px;
  }
  .list-item-yz{
    width: 350px;
    /*padding: 5px;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 35px;
  }
</style>

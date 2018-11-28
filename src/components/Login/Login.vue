<template>
    <div>
      <div class="background-line" v-if=""></div>
      <div class="content">
        <div class="box-wrap">
          <div class="box-bg">
            <div class="login-title">
              <span>会员登录</span><span>Sing</span><span>In</span>
            </div>
            <div class="login-left">
              <form action="">
                <table>
                  <tbody>
                  <tr>
                    <td width="112" height="20" align="right" class="user">用户名：</td><td><input type="text" class="username" v-model="result.username"><span class="phone">（手机号码）</span></td>
                  </tr>
                  <tr>
                    <td width="112" height="20" align="right" class="pwd">密码：</td><td><input type="text" class="password" v-model="result.password"></td>
                  </tr>
                  <tr>
                    <td>&nbsp</td><td width="376" height="34"><input type="submit" class="up-btn" @click="login"></td>
                  </tr>
                  <tr>
                    <td></td><td><span></span></td>
                  </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div class="login-right">
                <table width="75%">
                  <tbody>
                  <tr><td height="40" align="center">没有8cake官方账户？</td></tr>
                  <tr><td height="36" align="center"><img src="../../assets/images/zc-btn.gif" alt="注册按钮"></td></tr>
                  <tr><td height="40" align="center" class="change-pwd">如果您忘记了登录密码，<span>点击这里</span>重设一个新密码。</td></tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data:function () {
        return{
          result:{
            username:"",
            password:"",
            tishi:""
          }
        }
      },
      methods:{
          login(){
            if (this.result.username=="" || this.result.password=="" ){
              alert("请输入用户名密码")
            }else{

            }
          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .background-line{
    background: #aa6581;
    width: 100%;
    height: 20px;
  }
  .content{
    background: #ffffff;
    height: auto;
    padding: 20px;
  }
  .box-wrap{
    margin: 0 auto;
    width: 978px;
    height: auto;
    background: #fff;
    text-align: left;
  }
  .box-bg{
    background-image: url(../../assets/images/login-bg.jpg);
    background-repeat: no-repeat;
    height: 413px;
    width: 978px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 60px;
  }
  .login-title{
    font: bold 18px "Microsoft Yahei";
    color: #aa6581;
    text-decoration: none;
    height: 50px;
    width: 930px;
    display: block;
    margin: auto;
    margin-bottom: 60px;
  }
  .login-left{
    float: left;
    height: auto;
    width: 400px;
    display: inline;
    margin-left: 50px;
  }
  .user{
    font-size: 14px;
    font-family: "微软雅黑";
  }
  .username{
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    height: 24px;
    border: 1px solid #e69ea8;
    width: 194px;
    font-family: "微软雅黑";
    margin: 10px 5px;
  }
  .phone{
    font-family: "微软雅黑";
    font-size: 14px;
  }
  .password{
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    height: 24px;
    border: 1px solid #e69ea8;
    width: 194px;
    font-family: "微软雅黑";
    margin: 10px 5px;
  }
  .login-right{
    float: right;
    height: auto;
    width: 400px;
    display: inline;
    padding-top: 30px;
  }
  .change-pwd{
    padding:10px 26px;
    line-height:150%;
    text-align:left;
    font-size: 12px;
  }
  .up-btn{
    background-color: #a4627d;
    width: 196px;
    height: 35px;
    border: 1px solid white;
    margin-left: 4px;
    border-radius: 3px;
  }
</style>

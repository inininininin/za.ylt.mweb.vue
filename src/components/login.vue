<template>
  <div class="login">
    <div class="nav">
      <img src="../assets/beijing.png" alt="">
    </div>
    <div class="center">
      <div class="account">
        <div class="account_tel">
          <img src="../assets/iphone@2x.png" alt="">
          <input type="test" v-model="account.tel" name="account" placeholder="输入手机号" @keyup.enter="loginFn">
          <img src="../assets/XCopy@2x.png" alt="" v-if="account.tel" @click="account.tel = ''">
        </div>
        <div class="account_pwd">
          <img src="../assets/mima@2x.png" alt="">
          <input type="password" v-model="account.pwd" ref="pwd" name="pwd" placeholder="输入密码" @keyup.enter="loginFn">
          <img src="../assets/XCopy@2x.png" alt="" v-if="account.pwd" @click="account.pwd = ''">
          <img :src="account.pwdImg" alt="" v-if="account.pwd" @click="eyeFn">
        </div>
      </div>
      <div class="agreementClass">
        <div class="agreementRadio">
          <input type="checkbox"
      		    class="input_check"
      		    :checked="account.agreementValue"
      		    @change="changeFn"/>
        </div>
        <p>
          我已经阅读并同意
          <router-link :to="{path:'/agreementPage'}">
            《应用服务条款》
          </router-link>
        </p>
      </div>
      <button class="loginButtonClass" type="submit" value="医院登录" @click="loginFn()">登录</button>
      <div class="forgotPassword"> 
        <router-link :to="{path:'/forgetPwd'}">
          <span>修改密码</span>
          <img src="../assets/wenhao@2x.png" alt="">
        </router-link>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account:{
        tel:'',
        pwd:'',
        agreementValue:true,
        pwdImg : require('../assets/close-eye@2x.png')
      }
    }
  },
  mounted(){

  },
  methods:{
    eyeFn(){
      if(this.$refs.pwd.type == 'password'){
        this.$refs.pwd.type = 'text'
        this.account.pwdImg = require('../assets/open-eye@2x.png')
        }else{
          this.$refs.pwd.type = 'password'
          this.account.pwdImg = require('../assets/close-eye@2x.png')
      }
    },
    loginFn(){

    },
    changeFn(_value){
      // 
    	this.checked = _value.target.checked;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  height: 100%;
  width: 100%;
}
.nav{
  width: 100%;
  height: 207px;
  object-fit: cover;
  overflow: hidden;
}
.nav>img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.center{
  width: 100%;
  height: calc(100% - 207px);
  padding: 48px 33px 0px;
  box-sizing: border-box
}
.account{
  width: 100%;
}
.account_tel,.account_pwd{
  width: 100%;
  height: 43px;
  line-height: 43px;
  border-radius: 23px;
  border: 1px solid #E5E5E5;
  margin-bottom: 21px;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
}
.account_tel>input,.account_pwd>input{
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  padding:0px 45px 0px 57px;
  box-sizing: border-box 
}
.account_pwd>input{
  padding-right: 68px;
}
.account_tel>img:first-child{
  position: absolute;
  top: 0;
  left: 28px;
  right: 0;
  bottom: 0px;
  margin: auto 0px;
  width: 13px;
  height: 20px;
  object-fit: cover;
}
.account_pwd>img:first-child{
  position: absolute;
  top: 0;
  left: 25px;
  right: 0;
  bottom: 0px;
  margin: auto 0px;
  width: 18px;
  height: 18px;
  object-fit: cover;
}
.account_tel>img:last-child,.account_pwd>img:nth-child(3){
  margin: auto 0px;
  position: absolute;
  top: 0;
  right: 28px;
  bottom: 0px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  object-fit: cover;
}
.account_pwd>img:last-child{
  margin: auto 0px;
  position: absolute;
  top: 0;
  right: 48px;
  bottom: 0px;
  width: 15px;
  height: 11px;
  cursor: pointer;
  object-fit: cover;
}

.agreementRadio input[type=checkbox] {
  width: 17px;
  height: 17px;
  -webkit-appearance: none;
  background-color: transparent;
  border: 0;
  outline: 0 !important;
  color: #d8d8d8;
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0px;
}
.agreementRadio input[type=checkbox]:before{
  content: "";
  display:inline-block;
  width: 17px;
  height: 17px;
  background: url('../assets/Not-checkbox@2x.png');
  box-sizing:border-box;
  border-radius: 3px;
  position: absolute;
  background-size: cover;
}

.agreementRadio input[type=checkbox]:disabled:before{
  content: "";
  display:inline-block;
  width: 17px;
  height: 17px;
  background-color: #333;
  box-sizing:border-box;
  border-radius: 3px;
  position: absolute;
}
.agreementRadio input[type=checkbox]:checked:before{
  content: "";
  display:inline-block;
  width: 17px;
  height: 17px;
  border: 1px dotted #D2A47E;
  background-image: url('../assets/select.png');
  background-size: 17px 17px;
  box-sizing:border-box;
  border-radius: 3px;
  position: absolute;
}
.agreementRadio input[type=checkbox]:checked:after{
  content: "";
  display:inline-block;
  width: 17px;
  height:17px;
  border-left: 0px dotted #fff;
  border-top: 0px dotted #fff;
  box-sizing:border-box;
  position: absolute;
  transform: rotate(-135deg) translate(-70%, 25%);
}
.agreementRadio{
  position: relative;
  height: 41px;
  width: 17px;
  float: left;
}

.agreementClass{
  height: 41px;
  line-height: 41px;
}
.agreementClass p{
  display: inline-block;
	height: 41px;line-height: 41px;
  font-size: 12px;
  margin: 0px 0px 0px 10px;
  padding: 0px;
  font-weight: 400;
}
.agreementClass p a{
	color: #5ab5fc;
}
.loginButtonClass{
  background: linear-gradient(270deg,#f75178, #ed2828);
  border-radius: 45px;
	width: 100%;
  height: 45px;
	margin-top: 80px;
	color: #FFFFFF;
	border: none;
	font-size: 16px;
  font-weight: 500;
}
.forgotPassword{
  width: 100%;
  margin-top: 13px;
}
.forgotPassword span{
  font-size: 15px;
  color: #2b77ef;
  font-weight: 400;
}
.forgotPassword img{
  width: 15px;
  height: 15px;
}
</style>

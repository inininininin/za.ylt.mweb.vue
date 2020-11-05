<template>
    <div class="forgetPwd">
        <topNav>
            <img draggable="false" slot="leftImg" src="../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
        </topNav>
        <div class="center">
            <div class="center_title">
                <h1>修改密码</h1>
                <p>修改后的新密码将替换原密码</p>
            </div>
            <div class="center_account">
                <div class="center_account_tel">
                    <img draggable="false" src="../assets/iphone@2x.png" alt="">
                    <input type="test" v-model="account.tel" @keyup="account.tel=account.tel.replace(/[^\d]/g,'')" name="account" placeholder="输入手机号" @keyup.enter="forgetFn">
                    <img draggable="false" src="../assets/XCopy@2x.png" alt="" v-if="account.tel" @click="account.tel = ''">
                </div>
                <div class="center_account_verification">
                    <div class="center_account_verification_left">
                        <img draggable="false" src="../assets/yanzhengma@2x.png" alt="">
                        <input type="test" @keyup="account.verification=account.verification.replace(/[^\d]/g,'')" name="" id="" v-model="account.verification">
                        <img draggable="false" src="../assets/XCopy@2x.png" alt="" v-if="account.verification" @click="account.verification    = ''">
                    </div>
                    <div class="center_account_verification_right" @click="verificationFn">
                        <div v-if="!account.verificationState">获取验证码</div>
                        <div v-if="account.verificationState">{{account.verificationTime}} S</div>
                    </div>
                </div>
                <div class="center_account_pwd">
                    <img draggable="false" src="../assets/mima@2x.png" alt="">
                    <input type="password" v-model="account.pwd" ref="pwd" name="pwd" placeholder="输入密码" @keyup.enter="forgetFn">
                    <img draggable="false" src="../assets/XCopy@2x.png" alt="" v-if="account.pwd" @click="account.pwd = ''">
                    <img draggable="false" :src="account.pwdImg" alt="" v-if="account.pwd" @click="eyeFn">
                </div>
            </div>
            <button class="loginButtonClass" type="submit" @click="forgetFn">确认</button>
        </div>
    </div>
</template>
<script>    
export default {
    name:'forgetPwd',
    data () {
        return {
            account:{
                tel:'',
                verification:'',
                verificationTime:60,
                verificationState:false,
                pwd:'',
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
        verificationFn(){
            console.log(this.account.tel.length)
            if(this.account.verificationState != false){
                this.$toast('获取验证码频繁')
                return
            }
            if(this.account.tel && this.account.tel.length>=11){
                this.account.verificationState = true;
                this.account.verificationTime = 60;
                this.$publicRequest.getVerificationData(res=>{
                    if(res.codeMsg){
                        this.$toast(res.codeMsg)
                    }
                },res =>{
                    this.account.verificationState = false;
                    this.account.verificationTime = 60;
                    window.clearInterval(verificat_setInterval);
                    if(!res.codeMsg){
                        this.$toast('操作失败，请重试')
                    }else{
                        this.$toast(res.codeMsg)
                    }
                    return
                },{
                    // phone:this.account.tel
                })
                let verificat_setInterval = setInterval(()=>{
                    this.account.verificationTime -- 
                    if(this.account.verificationTime == 0){
                        this.account.verificationState = false;
                        this.account.verificationTime = 60;
                        window.clearInterval(verificat_setInterval);
                    }
                },1000)
            }
        },
        forgetFn(){
            this.$publicRequest.getForgetPwdData(res=>{
                if(res.data == 0){
                    this.$toast('操作成功')
                }
            },res=>{    
                if(res.codeMsg){
                    this.$toast(res.codeMsg);
                }
            },{
                phone: this.account.tel,
                smsvcode: this.account.verification,
                newpwd: this.account.pwd
            })
        }
        
    }
}
</script>
<style scoped>
.forgetPwd{
    height: 100%;
    width: 100%;
}
.center{
    width: 100%;
    padding: 14px 30px 0px 30px;
    box-sizing: border-box; 
}
.center_title>h1{
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    display: block;
    margin-top: 14px;
    margin-bottom: 10px
}
.center_title>p{
    font-size: 17px;
    color: #666666;
    letter-spacing: .5px;
    margin-block-start: 0px;
    margin-block-end: 0px;
}
.center_account{
    width: 100%;
    padding: 20px 3px 38px 3px;
    box-sizing: border-box;
}
.center_account_tel,.center_account_verification,.center_account_pwd{
    width: 100%;
    height: 43px;
    line-height: 43px;
    border-radius: 23px;
    border: 1px solid #E5E5E5;
    margin-bottom: 21px;
    position: relative;
    overflow: hidden;
}
.center_account_tel>input,.center_account_verification_left>input,.center_account_pwd>input{
    border: 0px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    padding:0px 45px 0px 57px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
}
.center_account_pwd>input{
    padding-right: 68px;
}
.center_account_tel>img:first-child{
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
.center_account_pwd>img:first-child{
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

.center_account_tel>img:last-child,.center_account_verification_left>img:last-child,.center_account_pwd>img:nth-child(3){
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
.center_account_verification_left{
    width: 62%;
    height: 100%;
    position: relative;
    display: inline-block;
}
.center_account_verification_left>input{
    float: right;
    font-size: 16px;
    font-weight: 400;
}
.center_account_verification_left>img:first-child{
    width: 16px;
    height: 18px;
    position: absolute;
    left: 28px;
    top: 0;
    bottom: 0;
    margin: auto 0px;
}
.center_account_pwd>img:last-child{
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
.center_account_verification_right{
    width: calc(38% - 1px);
    height: 100%;
    position: relative;
    float: right;
    font-size: 16px;
    font-weight: 400;
    height: 23px;
    margin: 10px 0px;
    border-left: 1px solid #E5E5E5;
    cursor: pointer;
}
.center_account_verification_right>div{
    height: 23px;
    width: 100%;
    line-height: 23px;
    text-align: center;
    color: #2B77EF;
}
.loginButtonClass{
    background: linear-gradient(270deg,#f75178, #ed2828);
    border-radius: 45px;
	width: 100%;
    height: 45px;
	color: #FFFFFF;
	border: none;
	font-size: 16px;
    font-weight: 500;
}
</style>
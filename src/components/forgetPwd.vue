<template>
    <div class="forgetPwd">
        <topNav>
            <img slot="returnImg" src="../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
        </topNav>
        <div class="center">
            <div class="center_title">
                <h1>修改密码</h1>
                <p>修改后的新密码将替换原密码</p>
            </div>
            <div class="center_account">
                <div class="center_account_tel">
                    
                </div>
                <div class="center_account_Verification">

                </div>
                <div >
                    <img src="../assets/mima@2x.png" alt="">
                    <input type="password" v-model="account.pwd" ref="pwd" name="pwd" placeholder="输入密码" @keyup.enter="loginFn">
                    <img src="../assets/XCopy@2x.png" alt="" v-if="account.pwd" @click="account.pwd = ''">
                    <img :src="account.pwdImg" alt="" v-if="account.pwd" @click="eyeFn">
                </div>
            </div>
        </div>
    </div>
</template>
<script>    
export default {
    name:'forgetPwd',
    data () {
        return {

        }
    },
    mounted(){

    },
    methods:{

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
    padding: 78px 3px 80px 3px;
    box-sizing: border-box;
}
</style>
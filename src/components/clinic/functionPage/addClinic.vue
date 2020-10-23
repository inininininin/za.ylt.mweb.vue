<template>
    <div class="addClinic">
        <div class="mandatory">
            <div class="mandatory_title">
                <img src="../../../assets/bitian@2x.png" alt="">
                <span>必填项</span>
            </div>
            <div class="mandatory_form">
                <div class="mandatory_form_line">
                    <span>病患姓名</span>
                    <input type="text" placeholder="请填写">
                </div>
                <div class="mandatory_form_line">
                    <span>联系方式</span>
                    <input type="text" placeholder="请填写">
                </div>
                <div class="mandatory_form_line">
                    <span>身份证号码</span>
                    <input type="text" placeholder="请填写">
                </div>
            </div>
        </div>
        <div class="optional">
            <div class="optional_title">
                <img src="../../../assets/xuantian@2x.png" alt="">
                <span>选填项</span>
            </div>
            <div class="optional_form">
                <div class="optional_form_line">
                    <span>备注</span>
                    <input type="text" placeholder="请填写">    
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'addClinic',
    data(){
        return{
            
        }
    },
}
</script>
<style scoped>
.addClinic{
    width: 100%;
    padding: 22px 16px 0px;
    box-sizing: border-box; 
}
.mandatory{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.mandatory_title,.optional_title{
    width: 100%;
    height: 21px;
    line-height: 21px;
    margin-bottom: 12px;
}
.mandatory_title>img{
    height: 19px;
    width: 18px;
    object-fit: cover;
    position: static;
    vertical-align: middle;
}
.optional_title>img{
    height: 19px;
    width: 15px;
    object-fit: cover;
    vertical-align: middle;
}
.mandatory_title>span,.optional_title>span{
    font-size: 15px;
    font-weight: 400;
    color: #FF951B;
    margin-left: 5px;
}
.mandatory_form_line,.optional_form_line{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #D8D8D8;
    font-size: 0px;
    margin-bottom : 10px;
}
.mandatory_form_line>span,.optional_form_line>span{
    width: 90px;
    font-size: 15px;
    text-align: left;
    display: inline-block;
    padding-left: 15px;
    box-sizing: border-box;
}
.mandatory_form_line>input,.optional_form_line>input{
    height: 21px;
    width: calc(100% - 90px);
    border: none;
    font-size: 15px;
    line-height: 21px;
    text-align: right;
    display: inline-block;
    padding: 12px 15px;
    box-sizing: border-box;
}
.mandatory_form_line>input::-webkit-input-placeholder,.optional_form_line>input::-webkit-input-placeholder{
    color: #999999;
}
.mandatory_form_line:last-child,.optional_form_line:last-child{
    margin-bottom: 0px;
}
</style>
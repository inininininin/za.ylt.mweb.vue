import axiosRequest from './axiosRequest.js'
import Vue from 'vue';
let vue = new Vue();
//获取用户协议接口
function getAgreementData(doFunction){
    axiosRequest.request.public_requests("get","/oss/page/user-protocol.html",'',false,'application/x-www-form-urlencoded',res=>{
        doFunction(res)
    },()=>{})
}
// 获取验证码
function getVerificationData(doFunction,_data){
    axiosRequest.request.public_requests("post","/ylt/sendsmsvcode",_data,true,'application/x-www-form-urlencoded',res=>{
        doFunction(res)
    },()=>{})
}
//修改账号密码
function getForgetPwdData(doFunction,_data){
    axiosRequest.request.public_requests("post","/ylt/hospital/set-pwd-by-phone",_data,true,'application/x-www-form-urlencoded',res=>{
        doFunction(res)
    },()=>{})
}
//修改账号密码
function getLoginData(doFunction,_data){
    axiosRequest.request.public_requests("post","/ylt/login",_data,true,'application/x-www-form-urlencoded',res=>{
        doFunction(res)
    },()=>{})
}
//修改账号密码
function getLoginRefreshData(doFunction){
    axiosRequest.request.public_requests("post","/ylt/login-refresh",'',true,'application/x-www-form-urlencoded',res=>{
        doFunction(res)
    },()=>{})
}
export default {
    getAgreementData,
    getVerificationData,
    getForgetPwdData,
    getLoginData,
    getLoginRefreshData
};
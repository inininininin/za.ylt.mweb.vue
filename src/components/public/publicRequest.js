import axiosRequest from './axiosRequest.js'
import Vue from 'vue';
let vue = new Vue();
//获取用户协议接口
function getAgreementData(successFunction){
    axiosRequest.request.public_requests("get","/oss/page/user-protocol.html",'',false,'application/x-www-form-urlencoded',res=>{
        successFunction(res)
    },()=>{},()=>{})
}
// 获取验证码
function getVerificationData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/sendsmsvcode",_data,true,'application/x-www-form-urlencoded',res=>{
        successFunction(res)
    },res => {
        failFunciton(res)
    },()=>{})
}
//修改账号密码
function getForgetPwdData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/hospital/set-pwd-by-phone",_data,true,'application/x-www-form-urlencoded',res=>{
        successFunction(res)
    },res=>{
        failFunciton(res)
    },()=>{})
}
//账号登录
function getLoginData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/login",_data,true,'application/x-www-form-urlencoded',res=>{
        successFunction(res)
    },res=>{
        failFunciton(res)
    },()=>{})
}
//获取账号登录数据
function getLoginRefreshData(successFunction,failFunciton){
    axiosRequest.request.public_requests("post","/ylt/login-refresh",'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}

/*医院端*/
//获取广告图片及其路径数据
function getAdsData(successFunction,failFunciton){
    axiosRequest.request.public_requests("get","/ylt/hospital/hospital-ads",'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取文章数据
function getArticleData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/c2/article/items",_data,true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}

/*门诊端*/
//获取病源列表
function getPathogenicData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/c2/patient/items",_data,true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
/*经理端*/
//获取该用户下的医院列表
function getHospitalData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/clientend2/manageend/hospitals",_data,true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取全部医院列表
function getAllHospitalData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/clientend2/manageend/allhospitals",_data,true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
export default {
    //获取用户协议接口
    getAgreementData,
    // 获取验证码
    getVerificationData,
    //修改账号密码
    getForgetPwdData,
    //账号登录
    getLoginData,
    //获取账号登录数据
    getLoginRefreshData,
    
    /*医院端*/
    //获取广告图片及其路径
    getAdsData,
    //获取文章数据
    getArticleData,

    /*门诊端*/
    //获取病源列表
    getPathogenicData,

    /*经理端*/
    //获取医院列表
    getHospitalData,
    //获取全部医院列表
    getAllHospitalData
};
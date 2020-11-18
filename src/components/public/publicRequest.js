import axiosRequest from './axiosRequest.js'
import qs from 'qs';
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
//账号退出登录
function getLoginoutData(successFunction,failFunciton){
    axiosRequest.request.public_requests("post","/ylt/logout",'',true,'application/x-www-form-urlencoded',res=>{
        successFunction(res)
    },res=>{
        failFunciton(res)
    },()=>{})
}
//获取文章数据
function getArticleData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/c2/article/items?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取基因检测列表数据
function getGeneListData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/client2/geneTest/samplePacks",_data,true,'application/x-www-form-urlencoded',
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

//获取门诊列表数据
function getClinicListData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/hospital/admin/hospital-clinics?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取门诊列表总数
function getClinicSumData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/hospital/admin/hospital-clinics-sum?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取推送通知总数
function getPatientPushSumData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("post","/ylt/c2/patient/newpatientcount",_data,true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取运营手册父级目录
function getOperatingManualFatherData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/operating-manual/items?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取运营手册子级目录
function getOperatingManualChildernData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/operating-manual/sections?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
    res=>{
        successFunction(res)
    },
    res =>{
        failFunciton(res)
    },()=>{})
}
//获取运营手册服务内容列表
function serviceContentListData(successFunction,failFunciton,_data){
    axiosRequest.request.public_requests("get","/ylt/operating-manual/section-tracks?"+qs.stringify(_data),'',true,'application/x-www-form-urlencoded',
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
    //账号退出登录
    getLoginoutData,
    //获取文章数据
    getArticleData,
    //获取基因检测列表数据
    getGeneListData,
    


    /*医院端*/
    //获取广告图片及其路径
    getAdsData,    
    //获取门诊列表数据
    getClinicListData,
    //获取门诊列表总数
    getClinicSumData,
    //获取推送通知总数
    getPatientPushSumData,
    //获取运营手册父级目录
    getOperatingManualFatherData,
    //获取运营手册子级目录
    getOperatingManualChildernData,
    //获取运营手册子级目录
    serviceContentListData,

    /*门诊端*/
    //获取病源列表
    getPathogenicData,
    //获取文章列表数据

    /*经理端*/
    //获取医院列表
    getHospitalData,
    //获取全部医院列表
    getAllHospitalData
};
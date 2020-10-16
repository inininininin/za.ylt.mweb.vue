import axiosRequest from './axiosRequest.js'
import axios from 'axios'
import Vue from 'vue';
let vue = new Vue();
//获取用户协议接口
function getAgreementData(doFunction){
    axiosRequest.request.public_requests("get","/oss/page/user-protocol.html",'',false,'application/x-www-form-urlencoded',res=>{
        // console.log(res)
        doFunction(res)
    },()=>{})
}
export default {
	getAgreementData
};
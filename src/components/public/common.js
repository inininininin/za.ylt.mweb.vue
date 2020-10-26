import Vue from 'vue';
import router from '../../router'
import store from '../../store'
import publicRequest from './publicRequest.js' 

let vue = new Vue();
function loginRefreshFn(checkState,successFunction,failFunciton){
  publicRequest.getLoginRefreshData(res => {
    store.state.user.loginRefreshData = res.data
    successFunction();
    // console.log(store.state.user.loginRefreshData)
    if(checkState)
      return
    let typeNum = parseInt(res.data.hospitalIs) + parseInt(res.data.clinicIs) + parseInt(res.data.hospitalOperateIs) + 
    parseInt(res.data.operateIs)
    if(typeNum > 1){
      router.replace({path:'/selectPort',query:{time: new Date().getTime().toString()}})
      return
    }else{
      if(res.data.hospitalIs){
        router.replace({path:'/hospital/index',query:{time: new Date().getTime().toString()}})
      }
      if(res.data.clinicIs){
        router.replace({path:'/clinic/index',query:{time: new Date().getTime().toString()}})
      }
      if(res.data.hospitalOperateIs){
        router.replace({path:'/'})
      }
      if(res.data.operateIs){
        router.replace({path:'/operating/index',query:{time: new Date().getTime().toString()}})
      }
    }
  },res => {
    let a = failFunciton(res)
    if(a){
      return
    }
    vue.$toast({message:'请登录',onClose:()=>{
      router.replace({path:'/login'})
    }})
  })
}
function backFn(){
  router.back()
}
export default {
  loginRefreshFn,
  backFn
};
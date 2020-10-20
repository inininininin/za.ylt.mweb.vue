import Vue from 'vue';
import router from '../../router'
import store from '../../store'
import publicRequest from './publicRequest.js' 

let vue = new Vue();
function loginRefreshFn(checkState){
  publicRequest.getLoginRefreshData(res => {
    if(res.code == 0){
      store.state.user.loginRefreshData = res.data
      console.log(store.state.user.loginRefreshData)
      if(checkState)
        return
      let typeNum = parseInt(res.data.hospitalIs) + parseInt(res.data.clinicIs) + parseInt(res.data.hospitalOperateIs) + 
      parseInt(res.data.operateIs)
      if(typeNum > 1){
        router.replace({path:'/selectPort'})
        return
      }else{
        if(res.data.hospitalIs){
          router.replace({path:'/hospital/index'})
        }
        if(res.data.clinicIs){
          router.replace({path:'/clinic/index'})
        }
        if(res.data.hospitalOperateIs){
          router.replace({path:'/'})
        }
        if(res.data.operateIs){
          router.replace({path:'/operating/index'})
        }
      }
      
    }else{
      debugger
      vue.$toast({message:'请登录',onClose:()=>{
        router.replace({path:'/login'})
      }})
    }
  })
}
function backFn(){
  router.back()
}
export default {
  loginRefreshFn,
  backFn
};
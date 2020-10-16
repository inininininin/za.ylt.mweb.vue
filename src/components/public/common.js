import axios from 'axios'
import Vue from 'vue';
import router from '../../router'
import store from '../../store'
let vue = new Vue();
function checkLogin(_hospitalId){
    axios.post('/ypt/user/login-refresh')
    .then(res=>{
      if(res.data.codeMsg){
        vue.$toast(res.data.codeMsg);
      }
      if(res.data.code == 0){
        store.state.user.account = res.data.data;
        console.log(store.state.user.account)
      }else{
        vue.$toast({
          message:'暂未登录！',
          duration:1240,
          onClose:()=>{
            if(_hospitalId){
              router.push({path:'/login',query:{hospitalId:_hospitalId}})
            }else{
              router.push({path:'/login'})
            }
          }
        })
      }
    })
}
function backFn(){
  router.back()
}
export default {
  checkLogin,
  backFn
};
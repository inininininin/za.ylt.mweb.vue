// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import Vant from 'vant';
import App from './App'
import router from './router'
import qs from 'qs';  
import common from './components/public/common.js'
import './components/public/common.css'
import publicRequest from './components/public/publicRequest.js' 
import registeredModel from './components/public/registeredModel.js' 
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
// import 'vant/lib/index.css';

registeredModel()
Vue.use(vant);
moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.config.productionTip = false
Vue.prototype.$publicRequest = publicRequest
Vue.prototype.$qs = qs
Vue.prototype.$common = common
Vue.prototype.$store = store



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
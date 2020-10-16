// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs';  
import common from './components/public/common.js'
import publicRequest from './components/public/publicRequest.js' 
import registeredModel from './components/public/registeredModel.js' 
import Vant from 'vant';
import 'vant/lib/index.css';

registeredModel()
moment.locale('zh-cn');
Vue.use(Vant);
Vue.prototype.moment = moment;
Vue.config.productionTip = false
Vue.prototype.$publicRequest = publicRequest
Vue.prototype.$qs = qs
Vue.prototype.$common = common

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})  

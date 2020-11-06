// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
/*vat组件导入*/
//toast
import 'vant/lib/toast/style';
import toast from 'vant/lib/toast'
//swipe
import 'vant/lib/swipe/style';
import swipe from 'vant/lib/swipe'
import 'vant/lib/swipe-item/style';
import swipeItem from 'vant/lib/swipe-item'
//tabbar
import 'vant/lib/tabbar/style';
import tabbar from 'vant/lib/tabbar'
import 'vant/lib/tabbar-item/style';
import tabbarItem from 'vant/lib/tabbar-item'
// list
import 'vant/lib/list/style';
import list from 'vant/lib/list'
// dialog
import 'vant/lib/dialog/style';
import dialog from 'vant/lib/dialog'
// popup
import 'vant/lib/popup/style';
import popup from 'vant/lib/popup'
// datetimePicker
import 'vant/lib/datetime-picker/style';
import datetimePicker from 'vant/lib/datetime-picker'
// popup
import 'vant/lib/dropdown-menu/style';
import dropdownMenu from 'vant/lib/dropdown-menu'
import 'vant/lib/dropdown-item/style';
import dropdownItem from 'vant/lib/dropdown-item'

Vue.use(toast).use(swipe).use(swipeItem).use(tabbar).use(tabbarItem).use(list).use(dialog).use(popup).use(datetimePicker).use(dropdownMenu)
.use(dropdownItem)
Vue.prototype.$toast = toast
Vue.prototype.$dialog = dialog


//自定义组件注册
registeredModel()
// Vue.use(vant);

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
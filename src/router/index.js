import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)
// const _import = require('./_import_' + process.env.NODE_ENV + '.js')
// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require("./_import_" + process.env.NODE_ENV+ '.js');
console.log(process.env.NODE_ENV)
//登录及其全局页面
const globalRoutes = [
  { path:'/' , redirect:'/login',},
  { path: '/login' , name: '/login' , component: _import( 'login')},
  { path: '/agreementPage', name: '/agreementPage', component:  _import( 'agreementPage')},
  { path: '/forgetPwd', name: '/forgetPwd', component:  _import( 'forgetPwd')},
  { path: '/selectPort', name: '/selectPort', component:  _import( 'selectPort')},
]
//其他路由
const otherRoutes = [
  { path: '/tihuan', name: '/tihuan', component:  _import( 'tihuan')},
]
//页面
const mainRoutes = [
  { path: '/hospital', name: 'hospital', component: _import( 'hospital/hospital'), redirect:'/hospital/index',
    children:[
      { path: 'index',  name: 'index', component: _import( 'hospital/page/index')},
      { path: 'clinic', name: 'clinic', component: _import( 'hospital/page/clinic')},
      { path: 'gene', name: 'gene', component: _import( 'hospital/page/gene')},
      { path: 'user', name: 'user', component: _import( 'hospital/page/user')},
      { path: 'channelsClinic', name: 'channelsClinic', component: _import( 'hospital/page/channelsClinic')},
      { path: 'sourceManagement', name: 'sourceManagement', component: _import( 'hospital/page/sourceManagement')},
      { path: 'operatingCenter', name: 'operatingCenter', component: _import( 'hospital/page/operatingCenter')},
      { path: 'operatingManual', name: 'operatingManual', component: _import( 'hospital/page/operatingManual')},
      { path: 'operatingManualChildern', name: 'operatingManualChildern', component: _import( 'hospital/page/operatingManualChildern'),},
      { path: 'operatingCenterDetails', name: 'operatingCenterDetails', component: _import( 'hospital/page/operatingCenterDetails')},
    ],
  },
  { path: '/clinic', name: 'clinic', component: _import( 'clinic/clinic'), redirect:'/clinic/index',
    children:[
      { path: 'index',  name: 'index', component: _import( 'clinic/page/index')},
      { path: 'hospital', name: 'hospital', component: _import( 'clinic/page/hospital')},
      { path: 'gene', name: 'gene', component: _import( 'clinic/page/gene')},
      { path: 'user', name: 'user', component: _import( 'clinic/page/user')},
    ]
  },
  { path: '/operating', name: 'operating', component: _import( 'operating/operating'), redirect:'/operating/index',
    children:[
      { path: 'index', name: 'index', component: _import( 'operating/page/index')},
      { path: 'clinic', name: 'clinic', component: _import( 'operating/page/clinic')},
      { path: 'user', name: 'user', component: _import( 'operating/page/user')},
    ]
  },
]
var _router = globalRoutes.concat(otherRoutes)
const router = new Router({
  routes: _router.concat(mainRoutes)
})
router.afterEach((to,from) =>{
  fatherRouterDirection(to,from);
  hospitalBottomNav(to,from);
  console.log(to.path);
  console.log(from.path);
})
//医院端的底部导航栏的显示与过度效果处理复写
function hospitalBottomNav(_to,_from){
  switch(_to.path){
    case  '/hospital/index':
      store.state.common.transitionName = 'slide-left'
      store.state.common.bottomNav = true
      break;
    case  '/hospital/clinic':
      store.state.common.bottomNav = true
      switch(_from.path){
        case  '/hospital/gene':
          store.state.common.transitionName = 'slide-left'
          break;
        case  '/hospital/user':
        store.state.common.transitionName = 'slide-left'
        break;
      }
      break;
    case  '/hospital/gene':
      store.state.common.bottomNav = true
      switch(_from.path){
        case  '/hospital/user':
          store.state.common.transitionName = 'slide-left'
          break;
      }
      break;
    case  '/hospital/user':
      store.state.common.bottomNav = true
      // store.state.common.transitionName = 'slide-left'
      break;
    default:
      store.state.common.bottomNav = false
  }
}
//路由重定向及其页面过度效果处理
function fatherRouterDirection(_to,_from){
  let toQuery = _to.query;
  let fromQuery = _from.query;
  if(_to.path == '/tihuan'){
    toQuery = toQuery.query
  }
  if(_to.path == _from.path){ 
    router.replace({path:'/tihuan',query:{query:toQuery,path:_to.path}})
  }else{
    if(_to.path != '/tihuan' && _from.path != '/tihuan'){
      if(toQuery.time > _from.query.time){
        console.log("前进")
        store.state.common.transitionName = 'slide-right'
      }else{
        console.log("后退")
        store.state.common.transitionName = 'slide-left'
      }
    }
  }
}

export default router

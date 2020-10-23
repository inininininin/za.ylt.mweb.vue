import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'
Vue.use(Router)
// const _import = require('./_import_' + process.env.NODE_ENV + '.js')
// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require("./_import_" + process.env.NODE_ENV+ '.js');
console.log(process.env.NODE_ENV)
//登录及其全局页面
const globalRoutes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: '/login',
    component: _import( 'login')
  },
  {
    path: '/tihuan',
    name: '/tihuan',
    component:  _import( 'tihuan'),
  },
  {
    path: '/agreementPage',
    name: '/agreementPage',
    component:  _import( 'agreementPage'),
  },
  {
    path: '/forgetPwd',
    name: '/forgetPwd',
    component:  _import( 'forgetPwd'),
  },
  {
    path: '/selectPort',
    name: '/selectPort',
    component:  _import( 'selectPort'),
  },
  
]
//页面
const mainRoutes = [
  {
    path: '/tihuans',
    name: '/tihuans',
    component:  _import( 'tihuan'),
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: _import( 'hospital/hospital'),
    meta: {auth:true},
    redirect:'/hospital/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: _import( 'hospital/page/index'),
        meta: {auth:true,indexHide:true},
      },
    ]
  },
  {
    path: '/clinic',
    name: 'clinic',
    component: _import( 'clinic/clinic'),
    meta: {auth:true},
    redirect:'/clinic/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: _import( 'clinic/page/index'),
        meta: {auth:true,indexHide:true},
      },
    ]
  },
  {
    path: '/operating',
    name: 'operating',
    component: _import( 'operating/operating'),
    meta: {auth:true},
    redirect:'/operating/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: _import( 'operating/page/index'),
        meta: {auth:true,indexHide:true},
      },
    ]
  },
]
// console.log(_import( 'view'))
const router = new Router({
  routes: globalRoutes.concat(mainRoutes)
})

router.afterEach((to,from) =>{
  debugger
  if(to.path == from.path){
    router.push({path:'/tihuan',query:{query:JSON.stringify(to.query),path:to.path}})
  }
})


export default router

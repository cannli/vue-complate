import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { data } from './breadcrumb.js'

Vue.use(Router)
const home = resolve => require(['../components/layout/home.vue'], resolve)
const projectIndex = resolve => require(['../components/pages/index/index.vue'], resolve)
// 富文本
const tinymce = resolve => require(['../components/pages/overview/tinymce.vue'], resolve)
// 回到顶部
const toTop = resolve => require(['../components/pages/overview/toTop.vue'], resolve)

// 权限查询
const userPrivilege = resolve => require(['../components/pages/userPrivilege/user_privilege.vue'], resolve)

// 注册
const register = resolve => require(['../components/pages/register/register.vue'], resolve)
// 分润
const incomeDistribution = resolve => require(['../components/pages/financialManagement/incomeDistribution.vue'], resolve)

const router = new Router({
  // mode: 'history',
  // mode: 'history',
  // hashbang: false,
  // history: true,
  // base: __dirname,
  // transitionOnLoad: true,

  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: register
    },
    {
      path: '/',
      component: home,
      name: '首页',
      children: [
        {path: '', redirect: 'projectIndex'},
        {path: 'projectIndex', component: projectIndex, name: '项目', meta: {nameHide: true, breadcrumb: true}}
      ]
    },
    {
      path: '/overview/',   // 项目概况
      component: home,
      name: '项目概况',
      children: [
        {path: '', redirect: 'tinymce'},
        {path: 'tinymce', component: tinymce},
        {path: 'toTop', component: toTop, name}
      ]
    },
    {
      path: '/userPrivilege/',
      component: home,
      name: '系统配置',
      children: [
        {path: '', redirect: 'userPrivilege'},
        {path: 'userPrivilege', component: userPrivilege, name: '用户权限', meta: {nameHide: true, breadcrumb: false}}
      ]
    },
    /* 分润 */
    {
      path: '/financialManagement/',
      component: home,
      name: '财务管理',
      children: [
        {path: '', redirect: 'incomeDistribution'},
        {path: 'incomeDistribution', component: incomeDistribution, name: '收入分配管理'},
      ]
    },
    /* 机构设置 */
    {path: '/register', component: register}
  ],
  scrollBehavior: () => ({y: 0})
})
// 全局路由配置
// 路由开始之前的操作
/*router.beforeEach((to, from, next) => {

  let toName = to.name
  // let fromName = from.name
  let is_login = store.state.user_info.login
  console.log(toName, is_login, '6565656565656565656565')
  if (!is_login && toName !== 'login') {

    next({
      name: 'login'
    })
  } else {
    if (is_login && toName === 'login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})*/
export default router

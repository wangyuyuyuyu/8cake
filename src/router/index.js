import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '../components/HomeContent/HomeContent'
import Login from '../components/Login/Login'
import CakesList from '../components/CakesList/CakesList'

import CakeDetail from '../components/CakeDetail/CakeDetail'

import Register from '../components/Register/Register'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HomeContent',
      component: HomeContent
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/CakesList',
      name: 'CakesList',
      component: CakesList
    },
    {
      path:'/detail',
      name:'CakeDetail',
      component:CakeDetail
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    }
  ]
})

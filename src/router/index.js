import Vue from 'vue'
import Router from 'vue-router'
// import PageFramework from '../components/PageFramework/PageFramework'
import HomeContent from '../components/HomeContent/HomeContent'
import Login from '../components/Login/Login'
import CakesList from '../components/CakesList/CakesList'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Content',
    //   component: Content
    // },
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
      path:'/CakesList',
      name:'CakesList',
      component:CakesList
    }
  ]
})

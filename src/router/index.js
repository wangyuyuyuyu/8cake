import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content'
import HomeContent from '../components/HomeContent/HomeContent'

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
    }
  ]
})

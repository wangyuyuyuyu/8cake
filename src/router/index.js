import Vue from 'vue'
import Router from 'vue-router'
import PageFramework from '../components/PageFramework/PageFramework'
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
      name: 'PageFramework',
      component: PageFramework
    }
  ]
})

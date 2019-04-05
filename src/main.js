// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'swiper/dist/css/swiper.css';
import axios from 'axios';
Vue.prototype.$http = axios;
// import $ from 'jquery'
Vue.config.productionTip = false
Vue.prototype.$api='/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    postData()
    {
      this.$http({
        method: 'post',
        url: '/user',
        data: {
          name: 'xiaoming',
          info: '12'
        }
      })
    }
  }
})


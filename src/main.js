import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import './assets/css/main.scss'
import './assets/css/page-animation.scss'

Vue.config.errorHandler = function (err, vm) {
  // handle error
  console.log(err, vm);
}

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})










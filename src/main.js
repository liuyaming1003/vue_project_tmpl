import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import './assets/css/main.scss'
import './assets/css/page-animation.scss'

// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';

// Raven
//     .config('https://e2264d2f5b9b4319b7f41c5e8ce30f0e@sentry.io/149386')
//     .addPlugin(RavenVue, Vue)
//     .install();

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










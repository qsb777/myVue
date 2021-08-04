import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {From, FromItem, Input, Notice} from '@/components';

Vue.config.productionTip = false

Vue.use(FromItem)
Vue.use(From)
Vue.use(Input)
Vue.use(Notice)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from './qvuex'
import user from './user';


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store

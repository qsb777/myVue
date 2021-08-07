import Link from './link'
import View from './view'
let Vue;

class QRouter {
  constructor(options) {
    this.$options = options
    this.routerMap = {}
    this.$options.routes.map(route => {
      this.routerMap[route.path] = route
    })
    Vue.util.defineReactive(this, 'current', '/')
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }
  onHashChange() {
    this.current = window.location.hash.slice(1)
  }
}

QRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default QRouter

let Vue
class Store {
  constructor(options) {
    console.log(options)
    let state = {...options.state}
    this.mutations = {...options.mutations}
    this.actions = {...options.actions}
    this.getters = {...options.getters}
    // 如果存在modules，就循环
    if ('modules' in options) {
      for (const key in options.modules) {
        state[key] = options.modules[key].state
        this.eachMethods(options.modules[key].mutations,this.mutations,key)
        this.eachMethods(options.modules[key].actions,this.actions,key)
        this.eachMethods(options.modules[key].getters,this.getters,key)
      }
    }
    const vm = new Vue({
      data: {
        state
      }
    })
    this.state = vm.state
    const {commit, dispatch} = this
    const store = this
    this.commit = function boundCommit(type, payload) {
      commit.call(store, type, payload)
    }
    this.dispatch = function boundCommit(type, payload) {
      dispatch.call(store, type, payload)
    }
  }
  // 循环modules里的方法
  eachMethods(data,method,key) {
   for (const i in data) {
    method[key+'/'+i] = data[i]
   }
  }
  commit(type, payload) {
    console.log(this,type)
    this.mutations[type](this.calcState(type), payload)
  }
  dispatch(type, payload) {
    console.log('dispatch',this.actions[type])
    this.actions[type](this, payload)
  }
  calcState(type) {
    let state = this.state
    let reg = /(\w+)\/\w+/
    let match = reg.exec(type)
    if (match) {
      state = this.state[match[1]]
    }
    return state
  }
}

function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default {
  Store,
  install
}
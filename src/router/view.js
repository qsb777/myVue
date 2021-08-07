export default {
  render(h) {
    let component = null
    const {routerMap, current} = this.$router
    component = routerMap[current].component
    return h(component)
  }
}
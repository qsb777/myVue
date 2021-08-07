export default {
  add({commit}, e) {
    setTimeout(() => {
      commit('add', e)
    }, 1000);
  }
}

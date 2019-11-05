const state = {
  active: true
}

const actions = {
  reverseState ({ commit }) {
    console.log('aaaa')
    commit('reverseState')
  }
}

const mutations = {
  reverseState (state) {
    // console.log(state.active)
    state.active = !state.active
    // console.log(state.active)
  }
}

export default {
  state,
  actions,
  mutations
}

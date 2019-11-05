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
    state.active = !state.active
  }
}

export default {
  state,
  actions,
  mutations
}

import * as api from '../../api'
const state = {
  category: []
}
const mutations = {
  category: (state, data) => {
    state.category = data
  }
}
const actions = {
  category: async ({ commit }) => {
    const res = await api.category()
    commit('category', res.data)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

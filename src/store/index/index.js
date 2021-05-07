import * as api from '../../api'
const state = {
  category: [],
  goods: []
}
const mutations = {
  category: (state, data) => {
    state.category = data
  },
  goods: (state, data) => {
    const banner = {}
    const name = {}
    state.category.forEach(item => {
      banner[item.id] = item.img_url
      name[item.id] = item.name
    })
    for (const key in data) {
      data[key] = {
        banner: banner[key],
        name: name[key],
        data: data[key]
      }
    }
    state.goods = data
  }
}
const actions = {
  category: async ({ commit }) => {
    const res = await api.category()
    commit('category', res.data)
    return res
  },
  goods: async ({ commit }, data) => {
    const res = await api.goods(data)
    commit('goods', res.data)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import Vue from 'vue'
import Vuex from 'vuex'
import { getNewsList } from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    SET_TOKEN: (state, name) => {
      state.name = name
    }
  },
  actions: {
    setTokenName ({ commit }, name) {
      commit('SET_TOKEN', name)
    },
    getNewsList ({ commit }) {
      return new Promise((resolve, reject) => {
        getNewsList().then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})

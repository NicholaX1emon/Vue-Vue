import Vue from 'vue'
import Vuex from 'vuex'
import lazydog from './lazydog'
import uglydog from './uglydog'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({ 
  modules: {
    lazydog,
    uglydog,
  },
  state: {
    count: 3,
    topic_list: []
  },
  getters: { // cached global computed state
    totalDogCount(state) {
      return state.count + state.lazydog.count + state.uglydog.count // root state combined with module state
    }
  },
  mutations: { // reducer
    globalIncreaseDog(state, payload) {
      state.lazydog.count += payload.amount
      state.uglydog.count += payload.amount
    },
    globalDecreaseDog(state, { amount }) {
      state.lazydog.count -= amount
      state.uglydog.count -= amount
    },
    getTopicListSuccess(state, payload) {
      state.topic_list = payload.data
    }
  },
  actions: { // async logic here, use store.dispatch() to call async method, finally call store.commit() to update state
    async callAnotherAction(context_store, timeout) {
      const { dispatch } = context_store
      console.log('--- before async operation ---')
      await dispatch('getTopicList', timeout) // call another action inside one action, continue if it's done
      console.log('--- after async operation ---')
    },
    async getTopicList({commit}, payload) {
      console.log('timeout ---', payload)
      try {
        const res = await axios.get('/mock/data.json', {
          timeout: payload,
        })
        commit('getTopicListSuccess', res)
      } catch(err) {
        console.log('err ---', err)
      }
    },
  },
})

export default store

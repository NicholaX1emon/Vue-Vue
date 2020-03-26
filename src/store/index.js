import Vue from 'vue'
import Vuex from 'vuex'
import lazydog from './lazydog'
import uglydog from './uglydog'


Vue.use(Vuex)

const store = new Vuex.Store({ 
  modules: {
    lazydog,
    uglydog,
  },
  state: {
    count: 3
  },
  getters: { // cached global computed state
    totalDogCount(state) {
      return state.count + state.lazydog.count + state.uglydog.count // root state combined with module state
    }
  },
  mutations: { // reducer
  },
  actions: { // async logic here, use store.dispatch() to call async method, finally call store.commit() to update state
  },
})

// store.commit('increaseLazyDogBy', {amount: 5})
// store.commit('increaseUglyDogBy', {amount: 5})
// console.log('lazydog state count ---', store.state.lazydog.count)
// console.log('ugly state count ---', store.state.uglydog.count)
// console.log('rootState getters totalDogCount ---', store.getters.totalDogCount)

// store.commit('increaseLazyDogBy', {amount: 5})
// console.log('lazydog mutation increaseLazyDogBy 5 ---', store.state.count)
// console.log('lazydog getter handsomeLazyDog---', store.getters.handsomeLazyDog)
// console.log('lazydog getter handsomeLazyDogCount ---', store.getters.handsomeLazyDogCount)

export default store

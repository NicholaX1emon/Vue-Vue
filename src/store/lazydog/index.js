// module state shouldn't be new Vuex.Store({...}) but a plain object
const store = {
  namespace: false, // this is set to false as default, therefore its getters, mutations and actions is globally registerd
  state: {
    dogs: [
      {name: 'quin', type: 'handsome', age: 33},
      {name: 'weitian', type: 'handsome', age: 24},
      {name: 'xiaoqin', type: 'ugly', age: 18},
    ],
    count: 0,
  },
  getters: { 
    handsomeLazyDog: state => {
      return state.dogs.filter(dog => dog.type === 'handsome')
    },
    handsomeLazyDogCount(state, getters) {
      return getters.handsomeLazyDog.length
    }
  },
  mutations: { 
    increaseLazyDogBy(state, { amount }) {
      state.count += amount
    },
    decreaseLazyDogBy(state, { amount }) {
      state.count -= amount
    }
  },
  actions: {
    // getLazyDogList(context) {

    // },
    // getLazyDogListSuccess({state, commit, rootState}) {

    // },
  },
}

export default store

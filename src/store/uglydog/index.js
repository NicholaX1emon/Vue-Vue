const store = {
  namespaced: true, // namespace needed as prefix to access inner attributes
  state: {
    dogs: [
      {name: 'quin', type: 'clever', age: 33},
      {name: 'weitian', type: 'clever', age: 24},
      {name: 'xiaoqin', type: 'foolish', age: 18},
    ],
    count: 0,
  },
  getters: {
    // cleverUglyDog(state) {
    //   return state.dogs.filter(dog => dog.type === 'clever')
    // },
    // cleverAndYoungUglyDog(state, getters) {
    //   return getters.cleverUglyDog.filter(dog => dog.age < 25)
    // }
  },
  mutations: {
    increaseUglyDogBy(state, {amount}) {
      state.count += amount
    },
    decreaseUglyDogBy(state, {amount}) {
      state.count -= amount
    }
  },
  actions: {
    getUglyDogList() {
      
    },
    getUglyDogListSuccess() {

    }
  },
}

export default store

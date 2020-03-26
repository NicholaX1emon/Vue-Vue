<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class="greetings">{{ greetings }}</div>
    <div>
      <span>懒狗数量： {{lazydogCount}}</span>
      <button @click='increaseLazyDogBy({amount: 1})'>懒狗 + 1</button>
      <button @click='decreaseLazyDogBy({amount: 1})'>懒狗 - 1</button>
    </div>
    <div>
      <span>丑狗数量： {{uglydogCount}}</span>
      <button @click='increaseUglyDogBy({amount: 1})'>丑狗 + 1 (带命名空间)</button>
      <button @click='decreaseUglyDogBy({amount: 1})'>丑狗 - 1 (带命名空间)</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Vuex',
  props: {
    msg: String
  },
  data() {
    return {
       greetings: '欢迎你 懒狗'
    }
  },
  computed: mapState({
      lazydogCount: state => state.lazydog.count,
      uglydogCount: state => state.uglydog.count,
  }),
  methods: {
    ...mapMutations({
      increaseLazyDogBy: 'increaseLazyDogBy',
      decreaseLazyDogBy: 'decreaseLazyDogBy',
      increaseUglyDogBy: 'increaseUglyDogBy',
      decreaseUglyDogBy: 'decreaseUglyDogBy',
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  background: linear-gradient(to right, lightblue, red);
}
.greetings {
  padding: 1rem 0;
}
button {
  width: 7rem;
  height: 3rem;
  background: rgb(235, 168, 82);
  border-radius: 10%;
  color: rgba(0, 0, 0, .7);
  outline: none;
  border: 1px solid transparent;
  margin: 1rem .5rem;
  cursor: pointer;
  transition: all .1s linear;
  text-shadow: 0 0 8px rgb(150, 109, 109);;
  box-shadow: inset 0 0 6px rgb(150, 109, 109);
  &:hover {
    background: #ffffff;
    transform: scale(1.05) translateY(-.3rem);
  }
}
</style>

<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div>
      <h3>今日话题：{{ topic_list.length > 0 ? topic_list[1].title : '未知'}}</h3>
      <button @click='callAnotherAction(3000)'>获取今日话题</button>
    </div>
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
    <div>
      <span>同时更改两个module state</span>
      <button @click='globalIncreaseDog({amount: increase_num})'>两狗 + {{ increase_num }} </button>
      <button @click='globalDecreaseDog({amount: decrease_num})'>两狗 - {{ decrease_num }} </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import {
  mapMutations, // Function, pass String[] or plain object {key: value} to do mapping
  mapState,      // --> return plain object {key: value}
  mapActions,
} from 'vuex'

export default {
  name: 'Vuex',
  props: {
    msg: String
  },
  data() {
    return {
       greetings: '欢迎你 懒狗',
       increase_num: 2,
       decrease_num: 3,
    }
  },
  computed: mapState({
      lazydogCount: state => state.lazydog.count,
      uglydogCount: state => state.uglydog.count,
      topic_list: state => state.topic_list
  }),
  methods: {
    ...mapMutations({
      increaseLazyDogBy: 'increaseLazyDogBy', // non-namespace mutation, directly called
      decreaseLazyDogBy: 'decreaseLazyDogBy',
      increaseUglyDogBy: 'increaseUglyDogBy', // mutation with namespace
      decreaseUglyDogBy: 'decreaseUglyDogBy',
      globalIncreaseDog: 'globalIncreaseDog', // global mutation
      globalDecreaseDog: 'globalDecreaseDog',
    }),
    ...mapActions({
      callAnotherAction: 'callAnotherAction',
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

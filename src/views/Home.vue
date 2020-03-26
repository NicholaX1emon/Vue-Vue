<template>
  <div class="home">
    <h1>你在首页 并在下方使用Vuex组件</h1>

    <VuexComp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import VuexComp from './Vuex'

export default {
  name: 'Home',
  components: {
    VuexComp,
  }
}
</script>

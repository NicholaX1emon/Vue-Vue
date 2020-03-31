<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <!-- 使用v-bind 以调用js表达式  -->
      <router-link :to="{path: '/local_comp', query: { id: 123 }}">组件基础</router-link>
    </div>
    <div>
      <router-link to="/vuex">Vuex</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    name: String
  },
  components: {
  },
  created() {
    // const request_payload = {
    //   title: 'Angular',
    //   id: 3,
    // }

    const formData = new FormData()
    formData.append('title', 'Angular')
    formData.append('id', 3)

    // this.$axios.get('/mock/data.json')
    // .then(res => {
    //   const { data, status } = res
    //   if (status === 200) {
    //     console.log('data ---', data)
    //   }
    // })

    // this.$axios.post('/mock/post/', request_payload)
    // .then(res => {
    //   const { data, status } = res
    //   if (status === 200) {
    //     console.log('data ---', data)
    //   }
    // })

    // this.$axios.post('/mock/post/', formData)
    // .then(res => {
    //   const { data, status } = res
    //   if (status === 200) {
    //     console.log('data ---', data)
    //   }
    // })

    // this.$axios.delete('/mock/delete/', { // query string
    //   params: request_payload
    // })
    // .then(res => {
    //   console.log('res ---', res)
    // })

    // this.$axios.delete('/mock/delete/', { // request body
    //   data: request_payload
    // })
    // .then(res => {
    //   console.log('res ---', res)
    // })
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

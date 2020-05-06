<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="getNewsList">请求mock接口</button>
    </div>
    <div class="token">
      <button @click="setTokenName">setTokenName</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    getNewsList () {
      this.$store.dispatch('getNewsList')
    },
    setTokenName () {
      this.$store.dispatch('setTokenName', 'this is the token name!')

      console.log(this.$store.state.name)
    }
  }
}
</script>

<style scoped>
.token {
  margin-top: 15px;
}
</style>

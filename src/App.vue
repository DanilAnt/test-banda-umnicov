<template>
  <Home/>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  a{
    color: inherit;
    font-size: inherit;
    &:hover{
      text-decoration: none;
    }
  }
}
body {
    background-color: #f5e040;
}
</style>

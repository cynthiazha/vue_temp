<template>
  <div id="app">
    <div>
      <router-link to="/home" class="nav">首页</router-link>
      <router-link to="/login" class="nav">登录</router-link>
    </div>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name:'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.nav {
  margin: 0 17px;
}
</style>

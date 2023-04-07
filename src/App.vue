<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-06 10:11:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 17:26:47
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <LoadingA title="PingkBtn" @myClick="(...arg) => { btnClick(...arg) }"></LoadingA>
  <LoadingB></LoadingB>
</template>

<script lang="js">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    btnClick(...arg) {
      console.log("btnClick22", arg);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

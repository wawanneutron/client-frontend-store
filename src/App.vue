<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <home dataProps="Welcome to Your Vue.js App" />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: #2c3e50;
}
</style>

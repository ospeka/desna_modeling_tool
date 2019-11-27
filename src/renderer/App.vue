<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from '@/components/navBar'

  export default {
    name: 'router_test',
    components: {
      navBar
    }
  }
</script>

<style>
    #app {
      font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      text-align: center;
      height: 100%;
      display: flex;

      background-color: #FDFDFF;
  }

  body {
    margin: 0;
    height: 100%;
  }

  html {
    height: 100%;

  }
</style>

<template>
  <main-container></main-container>
</template>

<script>
  import MainContainer from '@/components/mainContainer'

  export default {
    name: 'desnaModelingToolMain',
    components: {
      MainContainer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial. sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    height: 100%;
  }

  div {
    /*box-sizing: border-box;*/
  }

  body {
    margin: 0;
    height: 100%;
  }
  html {
    height: 100%;
  }
</style>

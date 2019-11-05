<template>
  <div class="submenu-container">
    <component
      v-bind:is="currentTabName"
    >
    </component>
  </div>
</template>

<script>
  import DBContainer from '@/components/DBContainer'
  import SWATContainer from '@/components/SWATContainer'
  import VizContainer from '@/components/VizContainer'

  export default {
    name: 'sumbenuContainer',
    components: {
      DBContainer,
      SWATContainer,
      VizContainer
    },
    props: {
      currentTabName: String
    }
  }
</script>

<style scoped>
  .submenu-container {
  	display: flex;
  	flex-direction: row;
  	height: 100%;
    background-color: orange;
  }
</style>
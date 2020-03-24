<template>
  <div>
    <h1>VizView</h1>
  </div>
</template>

<script>
  // import L from 'leaflet'
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
  export default {
    name: 'VizView',
    components: {
      LMap,
      LTileLayer,
      LMarker
    }
  }
</script>

<style scoped>
</style>

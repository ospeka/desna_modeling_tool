<template>
  <div class="main">
    <h1>VizView</h1>
    <div id="map">

    </div>
  </div>
</template>

<script>
  import L from 'leaflet'
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
  import geodata from '@/assets/Meteostations_data.js'

  let token = 'pk.eyJ1IjoibWFyaWJvcnhkIiwiYSI6ImNrODc3czM3dTBqdzQzbm1tNDJndnBxYjkifQ.YrXWVy_svNme5pOjkEaImg'

  export default {
    name: 'VizView',
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    mounted () {
      let map = L.map('map').setView([49.67, 32.02], 5)
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: token
      }).addTo(map)

      L.geoJSON(geodata).bindPopup(function (layer) {
        return layer.feature.properties.Name_ukr
      }).addTo(map)
    }
  }
</script>

<style scoped>
  #map {
    height: 700px;
    width: 600px;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
</style>

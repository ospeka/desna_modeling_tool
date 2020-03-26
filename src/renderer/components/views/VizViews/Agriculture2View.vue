<template>
  <div>
    <h1>Agriculture2View</h1>
    <div id="map">

    </div>
  </div>
</template>

<script>
  import L from 'leaflet'
  import fs from 'fs'
  import 'leaflet/dist/leaflet.css'

  let text = fs.readFileSync('./src/renderer/assets/Admin_distr.json')
  let obj = JSON.parse(text)
export default {
    name: 'Agriculture2View',
    data: {
      geojson: undefined,
      map: undefined
    },
    mounted () {
      let map = L.map('map').setView([49.67, 32.02], 5)
      this.map = map
      this.geojson = L.geoJSON(obj, {
        style: this.style,
        onEachFeature: this.onEachFeature
      }).bindPopup(function (layer) {
        return layer.feature.properties.LABEL
      }).addTo(map)
      let info = L.control()
      info.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info')
        console.log(this._div)
        this.update()
        return this._div
      }
      info.update = function (props) {
        this._div.innerHTML = '<h4>RANDOM SHIT</h4>' + (
          props ? '<b>' + props.TYPE + '</b><br />' + props.LABEL : 'Hover over a state')
      }
      info.addTo(map)
      this.info = info
    },
    methods: {
      getColor: function () {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      },
      style: function () {
        return {
          fillColor: this.getColor(),
          weight: 2,
          opacity: 1,
          color: this.getColor(),
          dashArray: 3,
          fillOpacity: 0.7
        }
      },
      highlightFeature: function (e) {
        let layer = e.target

        layer.setStyle({
          weight: 5,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7
        })
        this.info.update(layer.feature.properties)
      },
      resetHighlight: function (e) {
        this.geojson.resetStyle(e.target)
        this.info.update()
      },
      zoomToFeature: function (e) {
        this.map.fitBounds(e.target.getBounds())
      },
      onEachFeature: function (feature, layer) {
        layer.on({
          mouseover: this.highlightFeature,
          mouseout: this.resetHighlight,
          click: this.zoomToFeature
        })
      }

    }
}
</script>

<style scoped>
  #map {
    height: 600px;
    width: 800px;
  }
  .info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: #FDFDFF;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .info h4 {
    margin: 0 0 5px;
    color: #777;
  }
</style>

<template>
  <div class="main">
  	<div><div class="bold">Central Geophysical Observatory</div>
      provides daily weather observations archive for 11 Ukrainian stations. Time period from YYYY/MM/DD to YYYY/MM/DD
    </div>

  <div><div class="bold" >rp5.ru</div> provides subdaily weather observations   archive for 17 Russian stations. Time period from YYYY/MM/DD to YYYY/MM/DD
  </div>

  <div><div class="bold">Hydrometeorological Center</div> provides subdaily observation for 11 Ukrainian meteorological stations within the Desna river basin
  </div>
  <div><div class="bold">Pogodaiklimat.ru</div> provides subdaily observation data for 28 stations within the Desna river basin (17 Russian stations and 11 Ukrainian stations)
  </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherObsView'
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;

    margin-top: 5%;
    margin-right: 1%;
    color: #393D3F;
    padding-left: 5%;
    text-align: left;
    font-size: 18px;
  }

  .main div {
    margin-bottom: 15px;
  }

  .bold {
    display: inline-block;
    font-weight: bold;
  }
</style>

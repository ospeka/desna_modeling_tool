<template>
  <div class="main">
  	<div>
  		<div class="bold">OpenWeatherMap.org </div> provides…
    </div>

  <div>
  	<div class="bold" >Weatherbit.io </div> provides…
  </div>

  <div>
  	Uhmi.org.ua provides  Weather Research & Forecasting Model 
  	<div class="bold">(WRF)</div>
  	4-days weather forcast data
  </div>

  </div>
</template>

<script>
export default {
  name: 'WeatherFCView'
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
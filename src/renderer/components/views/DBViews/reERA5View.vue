<template>
  <div class="main">
    <div class="descr">
      <div class="bold">ERA5 is the latest climate reanalysis produced by</div>
      European Centre for Medium-Range Weather Forecasts (ECMWF). Time period from YYYY/MM/DD to YYYY/MM/DD
    </div>
    <div class="descr-2">Description of database parameters (columns names)….</div>
  </div>
</template>

<script>
export default {
  name: 'ReERA5View'
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

  .descr-2 {
    margin-top: 3%;
  }

  .desc {
    display: inline-block;
  }

  .bold {
    display: inline-block;

    font-weight: bold;
  }
</style>
<template>
  <div class="main">
    <div><div class="bold">Gauges</div>
      database includes information about water discharge, sediment, and water quality for 5 Ukrainian gauges and water discharge for 7 Russians gauges within the Desna river basin. Time period from YYYY/MM/DD to YYYY/MM/DD
    </div>
    <div class="descr">
      Description of database parameters (columns names)….
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugesView'
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

  .descr {
    margin-top: 40px;
  }

  .bold {
    display: inline-block;
    font-weight: bold;
  }
</style>
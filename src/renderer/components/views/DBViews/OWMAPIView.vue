<template>
  <div class="main">
    <div class="descr">Press ‘Update database’ to
      collect weatherforcast data from
      openweathermap.org into forcast_owm.sqlite database
    </div>
    <button class="upd-btn"> Update database</button>
    <i>Last record YYYY/MM/DD</i>
    <div class="descr-2">Description of database parameters (columns names)….</div>
  </div>
</template>

<script>
export default {
  name: 'OWMAPIView'
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
    font-size: 16px;
    margin-bottom: 10px;
  }

  .descr-2 {
    margin-top: 20px;
  }

  .upd-btn {
    width: 30%;
    border: 2px solid #546A7B;
    color: #FDFDFF;
    background-color: #546A7B;
    padding: 8px 20px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
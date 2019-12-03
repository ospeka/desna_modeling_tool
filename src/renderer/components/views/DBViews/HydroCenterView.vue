<template>
  <div>
    <h1>HydroCenterView</h1>
    Path to Hydrometeorological Center folder

In purpose to update database, please choose the folder where .txt files of the Hydrometeorological Center current weather observations are collected

Press ‘Update database’ to write data from .txt files into hydromet.sqlite database  

Update database

Last record YYYY/MM/DD

Description of database parameters (columns names)….


  </div>
</template>

<script>
export default {
  name: 'HydroCenterView'
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
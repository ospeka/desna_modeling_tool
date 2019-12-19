<template>
  <div class="main">
    <div><div class="bold">Agriculture</div>
      database includes information from regional statistics departments of Chernihivska and Sumska oblasts. Time period from YYYY/MM/DD to YYYY/MM/DD
    </div>
    <div class="descr">
      Description of database parameters (columns names)….
    </div>
  </div>

</template>

<script>
export default {
  name: 'AgricultureView'
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
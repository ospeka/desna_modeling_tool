<template>
  <div class="main">
    <h2>Path to Hydrometeorological Center folder</h2>
    In purpose to update database, please choose the folder where .txt files of the Hydrometeorological
    Center current weather observations are collected
    <div class="browse-bar">
      <input class="path-holder" type="text">
      <div class="upload-btn-wrapper">
        <button class="btn">Browse</button>
        <input type="file" name="myfile" />
      </div>
    </div>
    <br>
    Press ‘Update database’ to write data from .txt files into hydromet.sqlite database  
    <button class="upd-btn"> Update database</button>
    <i> Last record YYYY/MM/DD</i>


    <div class="descr"> Description of database parameters (columns names)….</div>
  </div>
</template>

<script>
export default {
  name: 'HydroCenterView'
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;

    margin-top: 1%;
    margin-right: 1%;
    color: #393D3F;
    padding-left: 5%;
    text-align: left;
    font-size: 18px;
  }

  .descr {
    margin-top: 40px;
  }

  .upd-btn {
    width: 20%;
    border: 2px solid #546A7B;
    color: #FDFDFF;
    background-color: #546A7B;
    padding: 8px 20px;
    font-size: 18px;
    font-weight: bold;
  }

  .browse-bar {
    display: flex;
  }

  .path-holder {
    width: 70%;
    padding-left: 10px;
    border: 2px solid #546A7B;
    font-size: 20px;
    color: #393D3F;
    outline: none;
  }


  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .btn {
    height: 100%;
    border: 2px solid #546A7B;
    color: #FDFDFF;
    background-color: #546A7B;
    padding: 8px 20px;
    font-size: 18px;
    font-weight: bold;
  }


  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>
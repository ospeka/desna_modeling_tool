<template>
  <div class="main">
    <p class="heading">Path to databases folder
    </p>
    <p class="main-text">
      To start working with program, you should point the path to the folder of the .sqlite Desna river databases.
    </p>
    <div class="browse-bar">
      <input class="path-holder" type="text">
      <div class="upload-btn-wrapper">
        <button class="btn">Browse</button>
        <input type="file" name="myfile" />
      </div>
    </div>
    <p class="description">
      Short description of databases….  
    </p>

  </div>
</template> 

<script>
export default {
  name: 'DbView'
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;

    color: #393D3F;
    padding-left: 5%;
    text-align: left;
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

  .heading {
    font-weight: bold;
    font-size: 30px;
  }

  .main-text {
    font-size: 20px;
  }

  .description {
    font-size: 25px;
  }
</style>
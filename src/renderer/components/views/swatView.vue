<template>
  <div class="main">
    <h2 class="header">Path to SWAT project folder</h2>
    <div class="browse-bar">
      <input class="path-holder" type="text">
      <div class="upload-btn-wrapper">
        <button class="btn">Browse</button>
        <input type="file" name="myfile" />
      </div>
    </div>
    <div class="timeline">
      <div class="bold">Timeline</div>
      (Create modeling period and write SWAT
      weather input files)
    </div>
    <div class="timeline-viz">
      <div class="viz">
        <div class="timeline-blocks"></div>
        <div class="timeline-blocks"></div>
        <div class="timeline-blocks"></div>
        <div class="timeline-blocks"></div>
      </div>
      <div class="righted">
        <button class="write-swat-files">Write SWAT files</button>
        <div class="hint">?</div>
      </div>
    </div>
    <div class="dates">
      <i>YYYY/MM/DD</i>
      <i>YYYY/MM/DD</i>
    </div>
    <div class="hist-section">
      <div class="number">1</div>
      <div class="dropdown-elem">
        <div class="dropdown-title">
          Choose historical data source (required)
        </div>
        <select class="dropdown">
          <option>Combined CGO & rp5.ru database</option>
          <option>Reanalysis ERA5</option>
          <option>Climate projection</option>
        </select>
      </div>
      <button class="add-button">Add</button>
    </div>
    <div class="hist-section">
      <div class="number">2</div>
      <div class="dropdown-elem">
        <div class="dropdown-title">
          Choose data source to fill gap till present (optional)
        </div>
        <select class="dropdown">
          <option>
            Combined Hydrometeorological Center & pogodaiklimat database
          </option>
        </select>
      </div>
      <button class="add-button">Add</button>
    </div>
    <div class="hist-section">
      <div class="number">3</div>
      <div class="dropdown-elem">
        <div class="dropdown-title">
          Choose weather forecast or climate projection data source (optional)
        </div>
        <select class="dropdown">
          <option>OpenWeatherMap database</option>
          <option>Weatherbit database</option>
          <option>WRF model</option>
        </select>
      </div>
      <button class="add-button">Add</button>
    </div>
    <div class="hist-section">
      <div class="number">4</div>
      <div class="dropdown-elem">
        <div class="dropdown-title">
          Add historical observation to future timeline (optional)
        </div>
        <select class="dropdown">
          <option>Average daily values based on historical data</option>
          <option>Manually defined period YYYY/MM/DD to YYYY/MM/DD</option>
        </select>
      </div>
      <button class="add-button">Add</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SwatView'
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;

    width: 100%;
    color: #393D3F;
    padding-left: 3%;
    text-align: left;
  }

  .dropdown {
    font-size: 16px;
    color: #393D3F;
    border: 2px solid #62929E;
  }

  .dropdown-elem {
    display: flex;
    flex-direction: column;

    width: 60%;
  }

  .number {
    color: #62929E;
    font-size: 22px;
    font-weight: bold;
    border: 2px solid #62929E;
    border-radius: 50%;
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hist-section {
    display: flex;
    width: 90%;
    height: 40px;
    justify-content: space-between;

    margin-bottom: 30px;
  }

  .dates {
    display: flex;
    justify-content: space-between;

    width: 60%;
  }

  .add-button {
    border: 2px solid #546A7B;
    color: #FDFDFF;
    background-color: #546A7B;
    font-size: 16px;
    font-weight: bold;

    width: 60px;
  }

  .timeline-blocks {
    width: 25%;
    height: 85%;
    background-color: #546A7B;

    border: 2px solid #546A7B;
    border-radius: 5px;
  }

  .righted {
    display: flex;
    height: 100%;

    width: 40%;
    justify-content: flex-end;
  }

  .viz {
    display: flex;
    width: 60%;
    height: 100%;

    justify-content: center;
    align-items: center;

    border: 2px solid #546A7B;
    border-radius: 5px;
  }

  .hint {
    display: flex;
    background-color: #393D3F;
    color: #FDFDFF;

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  .timeline-viz {
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 30px;
    width: 90%;
  }

  .write-swat-files {
    height: 100%;
    border: 2px solid #546A7B;
    color: #FDFDFF;
    background-color: #546A7B;
    /*padding: 8px 20px;*/
    font-size: 14px;
    font-weight: bold;

    margin-right: 20px;

  }

  .timeline {
    font-size: 18px;
  }

  .bold {
    font-weight: bold;
    display: inline-block;
  }  

  .header {
    margin-bottom: 20px;
  }

  .browse-bar {
    display: flex;
    width: 90%;
    margin-bottom: 20px;
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
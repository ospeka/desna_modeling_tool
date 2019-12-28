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
        <div class="timeline-blocks" v-if="showTimeBlock1" @click="showTimeBlock1=false">
          1 Chosen
        </div>
        <div class="timeline-blocks timeline-blocks-empty" v-else="!showTimeBlock1">
          Empty 1
        </div>
        <div class="timeline-blocks" v-if="showTimeBlock2" @click="showTimeBlock2=false">
          2 Chosen
        </div>
        <div class="timeline-blocks timeline-blocks-empty" v-else="!showTimeBlock2">
          Empty 2
        </div>
        <div class="timeline-blocks" v-if="showTimeBlock3" @click="showTimeBlock3=false">
          3 Chosen
        </div>
        <div class="timeline-blocks timeline-blocks-empty" v-else="!showTimeBlock3">
          Empty 3
        </div>
        <div class="timeline-blocks" v-if="showTimeBlock4" @click="showTimeBlock4=false">
          4 possible
        </div>
        <div class="timeline-blocks timeline-blocks-empty" v-else="!showTimeBlock4">
          Empty 4
        </div>
      </div>
      <div class="righted">
        <button class="write-swat-files">Write SWAT files</button>
        <div class="hint">
          ?
          <span class="tool-tip-text-2">
            Write SWAT weather input files (pcp1.pcp, tmp1.tmp, hmd.hmd, slr.slr, wnd.wnd) and modify file.cio according to timeline)
          </span>
        </div>
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
      <button class="add-button" @click="showTimeBlock1=true">
        Add
      </button>
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
      <button class="add-button" @click="showTimeBlock2=true">
        Add
      </button>
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
      <button class="add-button" @click="showTimeBlock3=true">
        Add
      </button>
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
      <button class="write-swat-files" @click="show">Specify dates</button>
      <button class="add-button" @click="showTimeBlock4=true">
        Add
      </button>
    </div>
    <div class="modify-run">
      <div class="modify">
        <div class="modify-text">
          Modify
          <span>file.cio</span>
          (optional)
        </div>
        <div class="hint">
          ?
          <span class="tool-tip-text">
            file.cio is automatically modified according to timeline. But for SWAT-familiar users, it’s possible to make changes before running SWAT
          </span>
        </div>
      </div>
      <button class="btn">Run SWAT</button>
    </div>
    <modal name="specify-dates" height="auto" :scrollable="true">
      <button class="add-button" @click="addRow">add</button>
      <div v-for="(el, ind) in modalData">
        start date <input type="date">
        end date <input type="date">
        <button class="add-button" @click="deleteRow(ind)">Delete</button>
      </div>
      <button class="add-button" @click="hide">OK</button>
    </modal>
  </div>
</template>

<script>
  export default {
    name: 'SwatView',
    data () {
      return {
        modalData: [],
        showTimeBlock1: false,
        showTimeBlock2: false,
        showTimeBlock3: false,
        showTimeBlock4: false
      }
    },
    methods: {
      addRow () {
        this.modalData.push('')
      },
      deleteRow (index) {
        this.modalData.splice(index, 1)
      },
      show () {
        this.$modal.show('specify-dates')
      },
      hide () {
        this.$modal.hide('specify-dates')
      }
    }
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

  .modify-text {
    display: inline;
    cursor: pointer;
  }

  .modify-text span {
    color: #62929E;
  }

  .modify-run {
    display: flex;

    justify-content: space-between;
    width: 90%;
    height: 40px;
  }

  .modify {
    display: flex;
    align-items: center;
  }

  .modify .hint {
    margin-left: 15px;
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: 23%;
    height: 85%;
    background-color: #546A7B;
    cursor: pointer;

    border: 2px solid #546A7B;
    border-radius: 5px;
    border-width: thin;
  }

  .timeline-blocks-empty {
    background-color: #FDFDFF;
    border-width: thin;

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
    /*padding: 4px;*/

    justify-content: space-around;
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
    cursor: pointer;

    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  .hint .tool-tip-text {
    visibility: hidden;
    width: 200px;
    background-color: #FDFDFF;
    border: solid;
    border-color: #546A7B;
    color: #393D3F;
    text-align: center;
    border-radius: 6px;
    border-width: thin;
    padding: 5px 0;
    font-size: 13px;

    position: absolute;
    z-index: 1;
  }

  .hint .tool-tip-text-2 {
    visibility: hidden;
    width: 200px;
    background-color: #FDFDFF;
    border: solid;
    border-color: #546A7B;
    color: #393D3F;
    text-align: center;
    border-radius: 6px;
    border-width: thin;
    padding: 5px 0;
    font-size: 13px;

    position: absolute;
    z-index: 1;
    right: 105px;
  }

  .hint:hover .tool-tip-text {
    visibility: visible;
  }

  .hint:hover .tool-tip-text-2 {
    visibility: visible;
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
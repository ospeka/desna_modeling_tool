<template>
  <div class="main">
    <h2 class="header">Path to SWAT project folder</h2>
    <browse-bar></browse-bar>
    <div class="timeline">
      <div class="bold">Timeline</div>
      (Create modeling period and write SWAT
      weather input files)
    </div>
    <timeline :showTimeBlocks="showTimeBlocks"></timeline>
    <div class="dates">
      <i>YYYY/MM/DD</i>
      <i>YYYY/MM/DD</i>
    </div>
    <hist-section @addClick="changeTimeline" :number='1' :show-specify-dates="false" :show-time-blocks="showTimeBlocks">
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
    </hist-section>
    <hist-section @addClick="changeTimeline"  :number='2' :show-specify-dates="false" :show-time-blocks="showTimeBlocks">
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
    </hist-section>
    <hist-section @addClick="changeTimeline"  :number='3' :show-specify-dates="false" :show-time-blocks="showTimeBlocks">
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
    </hist-section>
    <hist-section @addClick="changeTimeline" @showModal="show" :number='4' :show-specify-dates="true" :show-time-blocks="showTimeBlocks">
      <div class="dropdown-elem">
        <div class="dropdown-title">
          Add historical observation to future timeline (optional)
        </div>
        <select class="dropdown">
          <option>Average daily values based on historical data</option>
          <option>Manually defined period YYYY/MM/DD to YYYY/MM/DD</option>
        </select>
      </div>
    </hist-section>
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
  import BrowseBar from '../utility/BrowseBar'
  import Timeline from '../utility/Timeline'
  import HistSection from '../utility/HistSection'

  export default {
    name: 'SwatView',
    components: {HistSection, Timeline, BrowseBar},
    data () {
      return {
        modalData: [],
        showTimeBlocks: {
          block1: false,
          block2: false,
          block3: false,
          block4: false
        }
      }
    },
    methods: {
      changeTimeline (number) {
        console.log(number)
        switch (number) {
          case 1:
            this.showTimeBlocks.block1 = true
            break
          case 2:
            this.showTimeBlocks.block2 = true
            break
          case 3:
            this.showTimeBlocks.block3 = true
            break
          case 4:
            this.showTimeBlocks.block4 = true
            break
        }
      },
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
  .hint:hover .tool-tip-text {
    visibility: visible;
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

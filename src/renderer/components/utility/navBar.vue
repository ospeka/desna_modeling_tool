<template>
  <div class="main">
    <div class="main-bar">
      <router-link to="/db-view"><img src="@/assets/DB.png" @click="showAcc1"> </router-link>
      <router-link to="/swat-view"><img src="@/assets/SWAT.png" @click="hideAccs"> </router-link>
      <router-link to="/viz-view"> <img src="@/assets/viz.png" @click="showAcc2"> </router-link>
    </div>
    <div class="secondary-bar" v-show="acc1Show">
      <accordion :payload="acc1Data"></accordion>
    </div>
    <div class="secondary-bar" v-show="acc2Show">
      <accordion :payload="acc2Data"></accordion>
    </div>
  </div>
</template>

<script>
  import Accordion from '@/components/utility/accordion'
  import accordionOneData from '@/assets/AccOneData.js'
  import accordionTwoData from '@/assets/AccTwoData.js'

  export default {
    name: 'NavBar',
    components: {
      Accordion
    },
    data () {
      return {
        acc1Show: false,
        acc2Show: false,
        acc1Data: accordionOneData,
        acc2Data: accordionTwoData
      }
    },
    methods: {
      showAcc1: function () {
        this.acc1Show = true
        this.acc2Show = false
      },
      hideAccs: function () {
        this.acc1Show = false
        this.acc2Show = false
      },
      showAcc2: function () {
        this.acc1Show = false
        this.acc2Show = true
      }
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
  }

  .main-bar {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70px;

    background-color: #393D3F;
  }

  .main-bar img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .secondary-bar {
    display: flex;
    flex-direction: column;

    width: 200px;
  }
</style>

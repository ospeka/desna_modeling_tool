<template>
	<div class="DBContainer">
		<accordion v-bind:payload="accordion_data"></accordion>

    <div class="content-bar" v-show="$store.state.mainStore.dbDescShow">
      <h2>Path to databases folder</h2>
      <p>Path to databases folder</p>
      <div> here will be db browse elem</div>
      <h4>Short description of databases….</h4>
    </div>
    <div v-show="$store.state.mainStore.woDescShow">
      weather observation content
    </div>
	</div>
</template>

<script>
import Accordion from '@/components/accordion'

export default {
  name: 'DBContainer',
  components: {
    Accordion
  },
  data () {
    return {
      accordion_data: [
        {
          title: 'Weather Observations',
          content: [
            'CGO',
            'rp5.ru',
            'Hydrometeorological Center',
            'pogodaiklimat.ru'
          ],
          id: 0
        },
        {
          title: 'Re-analysis ERA5',
          content: [],
          id: 1
        },
        {
          title: 'Weather forecast',
          content: [
            'OpenWeatherMap API',
            'Weatherbit API',
            'WRF'
          ],
          id: 2
        },
        {
          title: 'Climate projections',
          content: [],
          id: 3
        },
        {
          title: 'Gauges',
          content: [],
          id: 4
        },
        {
          title: 'Agriculture',
          content: [],
          id: 5
        }
      ]
    }
  }
}
</script>

<style scoped>
	.DBContainer {
    display: flex;
    flex-direction: row;
  }

  .content-bar {
    border-radius: 5px;
    border-style: dashed;
    border-color: red;
  }

</style>
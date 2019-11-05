<template>
	<div class='mainContainer'>
		<menu-bar v-on:active-tab="changeActiveTab" />
		<submenu-container v-bind:currentTabName="currentTabName"></submenu-container>
	</div>
</template>

<script>
  import MenuBar from '@/components/menuBar'
  import SubmenuContainer from '@/components/submenuContainer'
  // import { mapActions } from 'vuex'

  export default {
    name: 'mainContainer',
    components: {
      MenuBar,
      SubmenuContainer
    },
    data () {
      return {
        currentTabName: ''
      }
    },
    methods: {
      changeActiveTab: function (activeTabName) {
        this.currentTabName = activeTabName
        // console.log(this.$store)
        console.log(this.$store.state.mainStore.active)
        this.$store.dispatch('reverseState')
        console.log(this.$store.state.mainStore.active)
      }
    }
  }
</script>
	

<style scoped>
	div {
		/*background-color: gray;*/
		color: green;
	}

	.mainContainer {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
</style>
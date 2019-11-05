<template>
	<div class="menu-bar">
		<img src="@/assets/DB.png" v-on:click="$emit('active-tab', 'DBContainer')">
		<img src="@/assets/SWAT.png" v-on:click="$emit('active-tab', 'SWATContainer')">
		<img src="@/assets/viz.png" v-on:click="$emit('active-tab', 'VizContainer')">
	</div>
</template>

<script>
  export default {
    name: 'menuBar'
  }
</script>

<style scoped>
  .menu-bar {
  	display: flex;
  	flex-direction: column;
  	height: 100%;
  	background-color: #393D3F;
  }

  .menu-bar img {
	margin: 10px;
	cursor: pointer;
}
</style>
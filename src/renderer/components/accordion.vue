<template>
	<div>
		<div v-for="item in payload"
		v-bind:key="item.id"
		>
		  <accordion-element v-bind:title="item.title" v-bind:content="item.content" v-on:accTitleClick="onAccTitle"/>  
		</div>
	</div>
</template>

<script>
  import AccordionElement from '@/components/AccordionElement'
  export default {
    name: 'Accordion',
    components: {
      AccordionElement
    },
    props: {
      payload: Array
    },
    methods: {
      onAccTitle: function (title) {
        console.log(title)
      }
    }
  }
</script>

<style scoped>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
<template>
  <div class="acc-container">
    <div v-for="item in payload"
    >
      <accordion-element :elemData="item"></accordion-element>
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
    }
  }
</script>

<style scoped>
	.acc-container {
		display: flex;
		flex-direction: column;
    height: 100%;

    background-color: #C6C5B9;
    color: white;
    font-size: 16px;
    text-align: left;
	}
</style>
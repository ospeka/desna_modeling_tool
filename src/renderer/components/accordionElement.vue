<template>
	<div>
    <div>
      <a href="#" v-on:click="active=!active">
        <strong v-on:click="$emit('accTitleClick', title)" > {{  title  }}</strong>
      </a>
  		<div v-show="active"  v-for="item in content" class="content-elem">
        {{  item  }}
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'AccordionElement',
  props: {
    title: String,
    content: Array
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.content-elem {
  padding-left: 10px;
}
</style>
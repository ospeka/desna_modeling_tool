<template>
	<div>
    <div>
      <a href="#" @click="accContentTabHandler">
        <strong @click="$emit('accTitleClick', title)" > {{  title  }}</strong>
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
  },
  methods: {
    accContentTabHandler () {
      this.active = !this.active
      // console.log(this.$store.state.mainStore.active)
      this.$store.dispatch('woDescShow')
    }
  }
}
</script>

<style scoped>
.content-elem {
  padding-left: 10px;
}
</style>
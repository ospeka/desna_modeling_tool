<template>
    <div class="hist-section">
        <div class="number">{{ number}}</div>
        <slot></slot>
        <button class="btn-styles" v-if="showSpecifyDates" @click="$emit('showModal')">
            Specify dates
        </button>
        <button class="add-button" @click="addClickHandle">
            Add
        </button>
    </div>
</template>

<script>
  export default {
    props: {
      showTimeBlocks: Object,
      showSpecifyDates: Boolean,
      number: Number
    },
    name: 'HistSection',
    methods: {
      addClickHandle (event) {
        this.$emit('addClick', this.number)
      }
    }
  }
</script>

<style scoped>
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
    .btn-styles {
        height: 100%;
        border: 2px solid #546A7B;
        color: #FDFDFF;
        background-color: #546A7B;
        font-size: 14px;
        font-weight: bold;
        margin-right: 20px;
    }
    .add-button {
        border: 2px solid #546A7B;
        color: #FDFDFF;
        background-color: #546A7B;
        font-size: 16px;
        font-weight: bold;
        width: 60px;
    }
</style>

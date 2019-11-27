<template>
  <div class="acc-elem" >
    <router-link to="/weather-obs">
      <div class="acc-title" @click="active=!active">
        <p> {{ elemData.title}}</p>
        <div v-show="elemData.isArrow" class="arrow">
          <span v-show="!active">&#9660</span>
          <span v-show="active">&#9650</span>
        </div>
      </div>
    </router-link>
    <div class="acc-sub-elem" v-show="active" v-for="item in elemData.content"
    >
      {{  item  }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccordionElement',
    props: {
      elemData: Object
    },
    data () {
      return {
        active: false
      }
    }
  }
</script>

<style scoped>
 .acc-elem {
    display: flex;
    flex-direction: column;

    background-color: #C6C5B9;
    margin-bottom: 5px;
    color: #FDFDFF;
  }

  a {
    text-decoration: none;
    color: #FDFDFF;
  }

  .acc-title {
    display: flex;
    align-items: center;

    background-color: #62929E;
    cursor: pointer;
  }

  .arrow {
    margin-left: auto;

    padding-right: 5px;
  }

  .acc-title p {
    padding-left: 8px;
  }

  .acc-sub-elem {
    background-color: #C6C5B9;
    color: #393D3F;
    margin-top: 2px;
    margin-bottom: 2px;
    padding-left: 8px;
  }

  .acc-sub-elem:hover {
    font-weight: bold;
    cursor: pointer;
    background-color: pink;
  }
</style>
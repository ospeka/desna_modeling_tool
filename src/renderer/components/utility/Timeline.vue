<template>
    <div class="timeline-viz">
        <div class="viz">
            <div class="timeline-blocks" v-if="showTimeBlocks.block1" @click="showTimeBlocks.block1=false">
                1 Chosen
            </div>
            <div class="timeline-blocks timeline-blocks-empty" v-else>
                Empty 1
            </div>
            <div class="timeline-blocks" v-if="showTimeBlocks.block2" @click="showTimeBlocks.block2=false">
                2 Chosen
            </div>
            <div class="timeline-blocks timeline-blocks-empty" v-else>
                Empty 2
            </div>
            <div class="timeline-blocks" v-if="showTimeBlocks.block3" @click="showTimeBlocks.block3=false">
                3 Chosen
            </div>
            <div class="timeline-blocks timeline-blocks-empty" v-else>
                Empty 3
            </div>
            <div class="timeline-blocks" v-if="showTimeBlocks.block4" @click="showTimeBlocks.block4=false">
                4 possible
            </div>
            <div class="timeline-blocks timeline-blocks-empty" v-else>
                Empty 4
            </div>
        </div>
        <div class="righted">
            <button class="btn-styles">Write SWAT files</button>
            <div class="hint">
                ?
                <span class="tool-tip-text-2">
            Write SWAT weather input files (pcp1.pcp, tmp1.tmp, hmd.hmd, slr.slr, wnd.wnd) and modify file.cio according to timeline)
          </span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'timeline',
    props: {
      showTimeBlocks: Object
    }
  }
</script>

<style scoped>
    .timeline-viz {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        width: 90%;
    }
    .viz {
        display: flex;
        width: 60%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        border: 2px solid #546A7B;
        border-radius: 5px;
    }
    .timeline-blocks {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23%;
        height: 85%;
        background-color: #546A7B;
        cursor: pointer;
        border: 2px solid #546A7B;
        border-radius: 5px;
        border-width: thin;
    }
    .timeline-blocks-empty {
        background-color: #FDFDFF;
        border-width: thin;
    }
    .righted {
        display: flex;
        height: 100%;
        width: 40%;
        justify-content: flex-end;
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
    .hint {
        display: flex;
        background-color: #393D3F;
        color: #FDFDFF;

        align-items: center;
        justify-content: center;
        cursor: pointer;

        border-radius: 50%;
        height: 30px;
        width: 30px;
    }
    .hint:hover .tool-tip-text-2 {
        visibility: visible;
    }
    .hint .tool-tip-text-2 {
        visibility: hidden;
        width: 200px;
        background-color: #FDFDFF;
        border: solid;
        border-color: #546A7B;
        color: #393D3F;
        text-align: center;
        border-radius: 6px;
        border-width: thin;
        padding: 5px 0;
        font-size: 13px;
        position: absolute;
        z-index: 1;
        right: 105px;
    }
</style>

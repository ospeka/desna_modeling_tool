<template>
    <div class="browse-bar">
        <input class="path-holder" type="text">
        <div class="upload-btn-wrapper">
            <button class="btn">Browse</button>
            <input type="file" name="myfile" />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'BrowseBar'
  }
</script>

<style scoped>
    .browse-bar {
        display: flex;
        width: 90%;
        margin-bottom: 20px;
    }

    .path-holder {
        width: 70%;
        padding-left: 10px;
        border: 2px solid #546A7B;
        font-size: 20px;
        color: #393D3F;
        outline: none;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .btn {
        height: 100%;
        border: 2px solid #546A7B;
        color: #FDFDFF;
        background-color: #546A7B;
        padding: 8px 20px;
        font-size: 18px;
        font-weight: bold;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>

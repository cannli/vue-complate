<!--
@desc 浮层显示
@font {string} hover的文字
@title {string} hover后显示的问题
e.g
<span class="ext-poptip-btn">font<poptip :tips-view="title"></poptip></span>
-->
<template>
  <div class="mod-poptip z-index-9">
        <div class="poptip-cnt" style="min-width:230px;height:100px;">
          <scrollbar>
          <div v-html="tipsView"></div>
          </scrollbar>
        </div>

    <div class="poptip-arrow"></div>
  </div>
</template>
<script>
  import scrollbar from 'v-scrollbar'

  export default {
    components: {scrollbar},
    props: {
      tipsView: {
        type: String
      }
    }
  }
</script>

<style>
  .ext-poptip-btn {
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }

/*  .poptip-cnt p{
    padding: 5px;
  }*/
</style>

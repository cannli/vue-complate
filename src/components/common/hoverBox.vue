<template>
  <div class="mod-poptip z-index-9">
    <div class="poptip-cnt"><slot></slot></div>
    <div class="poptip-arrow"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  /*.z-index-9{z-index: 20;}*/
  .z-index-9{z-index: 10001;}
.ext-poptip-btn{position: relative;display: inline-block; height: 30px; line-height: 30px; cursor: pointer}
.mod-poptip{bottom:auto; top:30px;}
.mod-poptip .poptip-cnt{max-width: auto; width: auto; padding: 5px; max-height:auto; height: auto; overflow:inherit; }
.mod-poptip .poptip-arrow{bottom:auto;top: -3px;transform: rotate(225deg);}
.righ-arrow .poptip-arrow{left:83%;}
</style>

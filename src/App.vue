<template>
  <div id="app" v-cloak>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted (){
//    try {
//      window.addEventListener("storage",function(e){
//        console.log(e);
//      },false);
//    }catch (e){
//      console.log('localStorage is error')
//    }
  },
}
</script>
<style>
  @import "assets/css/global.css";

  @import "assets/css/elementCss/elementSty.css";
  @import "assets/css/header/header.scss";
  [v-cloak]{display: none !important;}
  #app{height: 100%;}
  .z-index-9{z-index:9}
  .btn-unable-click{cursor: not-allowed} /*不允许点击*/
  .required:after{ /*必选项*/
    content: '*';
    color: #ff0000;
    font-size: 100%;
  }
  .mod-title{height: 50px;}
  .mod-title .title-box{height: 50px; line-height: 50px; margin-top: 0; font-size: 18px;}
  .mod-title .link{top: 10px;}

  .icon {
    width: 1.5em; height: 1.5em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>

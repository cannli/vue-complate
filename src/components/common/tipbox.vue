<!--
@desc 弹窗
@show {Boolean} 弹窗是否显示
@title {string} 顶部文字
@isOkBtn {Boolean} 确定按钮是否显示
@isCancelBtn {Boolean} 取消按钮是否显示
@isbtn {Boolean} 确定和取消按钮是否显示
@btnfontOk {string} 确定按钮的文字
@btnfontCancel {string} 取消按钮的文字
e.g：
<tipbox :show="show" title="title" :isbtn="isbtn" :isOkBtn="isOkBtn" :isCancelBtn="isCancelBtn" btnfontOk="确&nbsp;&nbsp;定" btnfontCancel="取&nbsp;&nbsp;消"></tipbox>
-->
<template>
  <transition name="bounce">
    <div class="iframe-box" v-if="show" style="z-index:5;">
      <div class="mod-iframe">
        <div class="iframe-title"><h2>{{title}}</h2><span class="iframe-close" @click="close" v-show="isbtn"></span>
        </div>
        <slot name="search"></slot>
        <div class="iframe-main">
          <div class="iframe-tips" style="    padding: 30px 0px;">
            <slot></slot>
          </div>
          <slot name="selection"></slot>
        </div>
        <div class="iframe-line-btn">
          <div v-show="isbtn">
            <a href="javascript:;" class="mod-btn ext-btn-blue" @click="submit" v-if="isOkBtn" v-html="btnfontOk"></a>
            <a href="javascript:;" class="mod-btn ext-btn-white" @click="close" v-if="isCancelBtn">取&nbsp;&nbsp;消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        // show: false,
      }
    },
    props: {
      data: Array,
      title: {
        type: String,
        default: '提示',
      },
      btnfontOk: {
        type: String,
        default: '确&nbsp;&nbsp;定',
      },
      btnfontCancel: {
        type: String,
        default: '取&nbsp;&nbsp;消',
      },
      show: {
        type: Boolean,
        default: false,
      },
      isbtn: {
        type: Boolean,
        default: true,//是否显示确定和取消按钮
      },
      isOkBtn: {
        type: Boolean,
        default: true
      },
      isCancelBtn: {
        type: Boolean,
        default: true
      }
    },
    computed: {//计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。

    },
    watch: {},
    methods: {
      close: function () {
        // this.$emit('input',!this.show);
        this.$emit('close')
      },
      submit: function () {
        // this.$emit('input',!this.show);
        this.$emit('submit');
      }
    },
    mounted: function () {

    },
  }
</script>

<style type="text/css">
  .mod-iframe .iframe-main {
    overflow: hidden;
    width: 100%;
    max-height: 460px;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .2s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>

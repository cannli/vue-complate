<template>
  <div class="mod-title ext-sub-title">
    <h2 class="title-box">
      <span class="arr"></span><a class="title">{{title}}</a>
    </h2>
    <ul class="link">
      <!-- <a class="line-link" href="javascript:;" @click="tipboxShow = true">设置阈值</a>-->
      <el-button type="primary" size="medium" class="mod-btn ext-btn-blue" @click="submit" v-show="submitBot">提交</el-button>
      <el-button plain size="medium" class="but_sty" @click="preview" v-show="previewBot">预览</el-button>
      <el-button plain size="medium" class="but_sty" @click="download" v-show="downloadBot">下载</el-button>
      <el-button plain size="medium" class="but_sty" @click="buyBack" v-show="buyBackBot">置为回购</el-button>
      <el-button plain size="medium" class="but_sty" @click="addBuyBack" v-show="addBuyBackBot">添加回购资产</el-button >
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      submitBot: {
        type: Boolean,
        default: false
      },
      previewBot: {
        type: Boolean,
        default: false
      },
      downloadBot: {
        type: Boolean,
        default: false
      },
      buyBackBot: {
        type: Boolean,
        default: false
      },
      addBuyBackBot:{
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    },
    created () {},
    mounted () {
      this.$nextTick(() => {})
    },
    beforeUpdate () {},
    updated () {},
    beforeDestroy () {},
    destroyed () {},
    computed: {},
    watch: {},
    methods: {
      // 提交
      submit () {
        this.$emit('submit')
      },
      preview () {
        this.$emit('preview')
      },
      download () {
        this.$emit('download')
      },
      buyBack () {
        this.$emit('buyBack')
      },
      addBuyBack(){
        this.$emit('addBuyBack')
      }
    }
  }
</script>

<style scoped>
.title-box{
  font-size: 16px;
}
  .but_sty{
    border-radius: 0;
    background: none;
  }
</style>

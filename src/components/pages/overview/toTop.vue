<template>
  <div class="components-container">
    <!--  <code>{{$t('components.backToTopTips1')}}</code>
      <code>{{$t('components.backToTopTips2')}}</code>-->
    <el-row :gutter="50">
      <el-col :span="12" class="a-row">
        <div class="placeholder-container">
          <div v-for="x in 100">placeholder{{x}}</div>
        </div>
      </el-col>
      <el-col :span="12" class="a-row ">
        <div class="a-mar-bot20">
          <div>引进</div>
          <pre>
            import BackToTop from 'components/common/BackToTop/index.vue
          </pre>
        </div>
      </el-col>
    </el-row>

    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->

    <el-tooltip placement="top" content="回到顶部">
      <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300"
                   :backPosition="50"></back-to-top>
    </el-tooltip>
  </div>
</template>

<script>
  import BackToTop from '@/components/common/BackToTop/index.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    name: 'backToTop-demo',
    components: {
      ElCol,
      ElRow,
      BackToTop
    },
    data () {
      return {
        myBackToTopStyle: {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
          background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
        }
      }
    }
  }
</script>

<style scoped>
  .placeholder-container div {
    margin: 10px;
  }
</style>

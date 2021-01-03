<template>
  <div class="components-container">
    <h2>数字输入框组件</h2>
    <!--  max是可输入的最大值  min是可输入的最小值  value是初始值-->
    <modelToInput v-model="value" :max="10" :min="-5"></modelToInput>
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
  import modelToInput from '@/components/modelToInput/index.vue'

  export default {
    name: 'backToTop-demo',
    components: {
      BackToTop,
      modelToInput
    },
    data () {
      return {
        value: 0,
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
    },
    mounted(){
      this.$message({
  type: 'success',
  content: '成功信息提示',
  duration: 3000
})
    }
  }
</script>

<style scoped>
  .placeholder-container div {
    margin: 10px;
  }
</style>

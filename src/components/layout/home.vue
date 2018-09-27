<template>
  <div class="full-height project-info"><!-- style="min-width: 1366px;"-->
    <div class="g-wrapper">
      <v-head :isSidebar="isSidebar"></v-head>
      <div class="g-container">
        <v-sidebar v-show="isSidebar" :data="treeArr" :projectState="projectStateHome"></v-sidebar>
        <div class="g-content" :class="{'full-content':!isSidebar,'g-content-size' :collapse}"
             style="padding-top: 60px;">
          <el-row>
            <div class="breadcrumb-inner" v-show="!this.$route.meta.breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页555</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in this.$route.meta.breadcrumbArr" :key="item.path" :to="{ path: item.path }">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div><i class="icon-el-icon-financialManagement"></i></div>

          </el-row>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
    <project-bar v-if="false"></project-bar>
  </div>
</template>

<script>
  // import vTags from './Tags.vue';
  import bus from '../../assets/js/bus'
  import vHead from './header.vue'
  import vSidebar from './sidebar.vue'
  import vFooter from './footer.vue'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        shownProjectName: '',
        collapse: false,
        treeArr: [],
        isSidebar: false,
        projectStateHome: true,
        isfullContextArr: ['/projectIndex'] // 不显示左侧导航栏的页面
      }
    },
    components: {
      vHead, vSidebar, vFooter
    },
    computed: {
      ...mapState({})
    },
    created () {
     // this.$store.commit('user_info_change', {user: {apiAuth: 1111111111}, login: false})
      bus.$on('collapse', msg => {
        this.collapse = msg
      })
    },
    methods: {
      fnSidebar (str) {
        for (var i in this.isfullContextArr) {
          if (str == this.isfullContextArr[i]) {
            return true
          }
        }
        return false
      },
      fnShowTree (str) {
        let self = this
        if (str == '/userPrivilege/userPrivilege' || str == '/mechanism/mechanismList' || str == '/mechanism/mechanismConfig' || str == '/mechanism/mechanismCreate') {

          self.$store.commit('isSystemShow_change', 'system')     // 项目跟系统菜单显示标识
          self.$store.commit('headerSelectName_change', 'system') // 头部状态标识
          console.log('系统配置11111')
          return
        } else if (str == '/financialManagement/incomeDistribution' || str == '/financialManagement/shareProfitManage' || str == '/financialManagement/incomeDistribution/benefitDetails' || str == '/financialManagement/shareProfitManage/profitManagement') {
          self.$store.commit('isSystemShow_change', 'financialManagement')     // 项目跟系统菜单显示标识
          self.$store.commit('headerSelectName_change', 'financialManagement') // 头部状态标识
          return
        } else {
          self.$store.commit('isSystemShow_change', 'project')     // 项目跟系统菜单显示标识
          self.$store.commit('headerSelectName_change', 'project')// 头部状态标识
          console.log('ABS项目222222')
          return
        }
      }
    },
    watch: {
      $route (val, oldVal) { // 在isfullContextArr里面有，就把左边菜单栏隐藏
        setTimeout(() => {
          this.fnSidebar(val.path) ? (this.isSidebar = false) : (this.isSidebar = true) // ture时代表 不折叠 this.isSidebar = false
          this.fnShowTree(val.path)
        }, 20)
      }
    },
    mounted: function () {
      let self = this
      self.fnShowTree(this.$route.path)
      if (self.fnSidebar(self.$route.path)) {
        self.isSidebar = false
      } else {
        self.isSidebar = true
      }
    }
  }
</script>
<style scoped>
  .g-content-size {
    margin: 3px 15px 0 100px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .full-content {
    margin: 0 15px;
  }

  .full-height {
    height: 100%;
  }

  .current-project {
    position: relative;
  }

  .current-project .project-icon {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 45px;
    top: -11px;
    /* margin-left: -10px;*/
    /*   background: url(../../assets/img/global/icon_projects.png) center 15px no-repeat;*/
  }

  .current-project .project-icon .auto {
    width: 40px;
    height: 41px;
  }

  .current-project .project-icon .house {
    width: 40px;
    height: 41px;
  }

  .current-project .project-icon .shopping {
    width: 40px;
    height: 41px;
  }

  .current-project .project-text {
    display: inline-block;
    font-size: 16px;
    color: #3E4047;
    height: 45px;
    text-align: left;
    /*  position: absolute;*/
    /* line-height: 45px;*/
    /* top: 50%;
     text-align: center;
     margin-top: -18px;
     overflow: hidden;
     word-break: break-all;*/
    /* font-weight: 600;*/
  }

  .project-text-p1 {
    font-size: 16px;
    font-weight: 600;
  }

  .project-text-p2 {
    font-size: 12px;
    color: #80848F;
  }

  .breadcrumb-inner {
    margin-bottom: 10px;
  }
</style>
<style>
  .rightFont {
    text-align: right !important;
  }

  .mod-table td, .mod-table th {
    text-align: center;
  }

  .project-info .mod-form .form-label {
    width: 160px;
  }

  /*透明背景*/
  .transparentBack {
    background-color: transparent;
  }

  /*表格不换行 横向表格*/
  .uncol-table {
    overflow-x: hidden;
  }

  .uncol-table td {
    white-space: nowrap;
  }

  .uncol-table th {
    width: 100px;
    display: inline-block;
  }

  /*表格不换行 垂直表格*/
  .uncol-tableV2 {
    overflow-x: visible;
    overflow-y: visible;
  }

  .uncol-tableV2 td, .uncol-tableV2 th {
    white-space: nowrap;
  }

  /* 选择按钮 */
  .labelBox {
    cursor: pointer;
    margin: 0 15px 10px 0;
    display: inline-block;
  }

  .labelBox input {
    display: none;
  }

  .labelBox input:checked + span {
    background-color: #fff;
    color: #11adfe;
  }

  /* 上传文件名称 */
  .fileNamebox {
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 auto;
  }

  /* 项目名称 */
  .project-font {
    width: 150px;
    height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .mod-table .project-font {
    margin: 0 auto;
  }

  /* input后面加% */
  .inputBoxRata {
    padding-right: 14px;
  }

  .inputBoxRata input {
    min-width: auto !important;
  }

  .inputBoxRata:before {
    content: '%';
    position: absolute;
    top: 2px;
    right: -2px;
  }

  /* 时间不可选 */
  .unSelectTime {
    background-color: rgb(235, 235, 228);
  }

  .icon-date {
    right: 0px;
    z-index: -1;
  }

  .table-nodata-wrap p {
    color: #666;
    text-align: left;
    padding-left: 14px;
  }

  /* 去除重构的css,title手指标志 */
  .title-box .title {
    cursor: default;
  }

</style>

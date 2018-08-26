<template>
  <header class="g-header" :class="{'g-header-size': collapse}" id="g-header">

    <div class="header-logo">
      <div class="header-logo-a" :class="{'header-logo-a-size': collapse}">
     <!--   <img v-if="!collapse" :src="logoX" style=" height: 30px; width: 201px; vertical-align: middle;"/>
        <img v-else :src="logoM" style=" height: 30px; width: 49px; vertical-align: middle;"/>-->
        <div  v-if="!collapse" class="logoMax">码农品台</div>
        <div v-else class="logoMin">码农</div>
      </div>
    </div>
    <div v-show="isSidebar" class="collapse-btn" :style="{marginLeft:collapse ? '-6px' : ''}"
         :class="{'collapse-btn-size': collapse}" @click="collapseChage">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sanheng"></use>
      </svg>
    </div>
    <div class="header-tab">
      <div class="tab-item" :class="{ 'on' : 'project' == $store.state.headerSelectName}"
           @click.stop="changeheaderName('project')">
        <router-link :to="{'path':'/'}">ABS项目</router-link>
      </div>

      <div class="tab-item" :class="{ 'on' : 'system' == $store.state.headerSelectName}"
           @click.stop="changeheaderName('system')">
        <router-link :to="{path:'/userPrivilege'}">系统配置</router-link>
        <div class="header-projects" style="width:400px;">
        </div>
      </div>

      <div class="tab-item" :class="{ 'on' : 'financialManagement' == $store.state.headerSelectName}"
           @click.stop="changeheaderName('financialManagement')">
        <router-link :to="{path:'/financialManagement'}">财务管理</router-link>
        <div class="header-projects" style="width:400px;">
        </div>
      </div>

      <!-- <div class="tab-item"><a href="javascript:;">小工具</a></div>-->
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <!-- <div class="btn-fullscreen" @click="handleFullScreen">
           <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
             <i class="el-icon-rank"></i>
           </el-tooltip>
         </div>-->
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <!-- <router-link to="/">-->
            <svg class="icon el-icon-bell" aria-hidden="true">
              <use xlink:href="#icon-tixing"></use>
            </svg>

            <!--   </router-link>-->
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message" v-text="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator"><img :src="userImg"></div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click">
          <span class="el-dropdown-link">
            {{userName}} <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a @click="">
              <el-dropdown-item>注销</el-dropdown-item>
            </a>
            <a @click="">
              <el-dropdown-item>切换</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
  import bus from '../../assets/js/bus'

  export default {
    props: {
      isSidebar: Boolean
    },
    data () {
      return {
        sidebarIco: {
          shopping: '#icon-gerendai',
          auto: '#icon-chedai',
          house: '#icon-fangdai',
        },
        logoX: require('../../assets/img/global/logoX.png'),
        logoM: require('../../assets/img/global/logoM.png'),
        collapse: false,
        fullscreen: false,
        message: 2,

        isSelectStatus: false,
        isSelect1: true,
        isSelect2: false,
        userName: '',  //用户名
        userImg: '', //用户头像
        projectArr: [],
        authorityPageMenu: false,
        financialmenu: false,
        projectId: '',
        test: ''
      }
    },
    watch: {},
    computed: {
      username () {
        let username = localStorage.getItem('ms_username')
        return username ? username : this.name
      }
    },
    mounted: function () {
      var self = this
    },
    methods: {
      // 侧边栏折叠
      collapseChage () {
        console.log(this.isSidebar, 'this.isSidebar === true 表示有左边测')
        if (this.isSidebar === true) { // this.isSidebar === true 表示折叠
          this.collapse = !this.collapse
          bus.$emit('collapse', this.collapse)
        }
        console.log(this.collapse, 'this.collapse === true 表示折叠')

      },
      // 全屏事件
      handleFullScreen () {
        let element = document.documentElement
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen()
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen()
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen()
          }
        }
        this.fullscreen = !this.fullscreen
      },

      changeheaderName (str) { // 点击头部改变 点击ABS项目的时候’project‘，都是true
        // localStorage.setItem('systemMenu', str)
        this.collapse = false
        bus.$emit('collapse', this.collapse)
        if (str == 'system') {
          this.isSelect1 = false
        }
        if (str == 'financialManagement') {
          this.isSelect1 = false
        }
        if (str == 'project') {
          this.isSelect1 = true
          this.$router.push({path: '/', params: {name: 'name'}})
        }
      }
    }
  }
</script>


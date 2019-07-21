<template>
  <div class="sidebar"><!--:defaultOpeneds="defaultOpeneds"-->
    <el-menu class="sidebar-el-menu menu-box" :default-active="$route.path" :defaultOpeneds="defaultOpeneds"
             collapse-transition unique-opened
             :collapse="collapse" background-color="#202938"
             text-color="#bfcbd9" active-text-color="#fff" router>
      <template v-for="(item, index) in menus" v-if="isSystemShows === 'project'">
        <template v-if="item.details">
          <el-submenu :index="item.names" :key="item.names">
            <template slot="title">
              <svg class="icon ico" aria-hidden="true">
                <use :href="sidebarIco[item.routeKey]"></use>
              </svg>
              <!--  <i :class="sidebarIco[item.routeKey]"></i>--><span slot="title">{{ item.names }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.details" :key="subItem.link" :index="subItem.link"
                          v-show="subItem.isActive!=false" class="menu-list">
              {{ subItem.names }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>

      <template v-for="(item, index) in systemMenus" v-if="isSystemShows === 'system'">
        <template v-if="item.details">
          <el-submenu :index="item.names" :key="item.names">
            <template slot="title">
              <svg class="icon ico" aria-hidden="true">
                <use :href="sidebarIco[item.routeKey]"></use>
              </svg>
              <!-- <i :class="sidebarIco[item.routeKey]"></i>--><span slot="title">{{ item.names }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.details" :key="subItem.link" :index="subItem.link"
                          v-show="subItem.isActive!=false" class="menu-list">
              {{ subItem.names }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>

      <template v-for="(item, index) in financialManagement" v-if="isSystemShows === 'financialManagement'">
        <template v-if="item.details">
          <el-submenu :index="item.names" :key="item.names">
            <template slot="title">
              <svg class="icon ico" aria-hidden="true">
                <use :href="sidebarIco[item.routeKey]"></use>
              </svg>
              <!-- <i :class="sidebarIco[item.routeKey]"></i>--><span slot="title">{{ item.names }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.details" :key="subItem.link" :index="subItem.link"
                          v-show="subItem.isActive!=false" class="menu-list">
              {{ subItem.names }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import bus from '../../assets/js/bus'
  import { mapState } from 'vuex'
  import scrollbar from 'v-scrollbar'

  export default {
    components: {
      scrollbar
    },
    props: {
      data: Array,
      projectState: {
        type: Boolean,
        default: true,
      }
    },
    data () {
      return {
        defaultOpeneds: ['项目概况', '资产池管理'],
        collapse: false,
        projectIconStr: '',
        shownProjectName: '',
        sidebarIco: {
          overview: '#icon-xiangmugaikuo',
          assertPool: '#icon-zichanchi',
          assertPackage: '#icon-zichanbao',
          durationManage: '#icon-chanpinsheji',
          projectSystemIcon: 'el-icon-document',
          setupAllSet: 'el-icon-setting',
          durationManagement: '#icon-cunxuqiguanli'
        },
        // 如果数据来源是接口传输 ，type = 2的就不显示
        // menus: [],
        systemMenus: [{
          position: '6',
          isActive: true,
          details: [
            {
              position: '252',
              isActive: true,
              names: '用户权限',
              link: '/userPrivilege/userPrivilege',
              pageMenu: 2,
              type: 1,
              routeKey: 'setupAllSet'
            }
          ],
          names: '系统配置',
          pageMenu: 2,
          type: 1,
          routeKey: 'durationManagement'
        }],
        financialManagement: [
          {
            position: '3',
            isActive: true,
            details: [
              {
                position: '1',
                isActive: true,
                names: '收入分配报表 ',
                link: '/financialManagement/incomeDistribution',
                pageMenu: 3,
                type: 1
              }
            ],
            names: '财务管理',
            pageMenu: 3,
            type: 1,
            routeKey: 'durationManage'
          },
        ],

        menus: [
          {
            position: '1',
            isActive: true,
            details: [
              {
                position: '12',
                isActive: true,
                names: '富文本',
                link: '/overview/tinymce',
                pageMenu: 1,
                type: 1
              },
              {
                position: '12',
                isActive: true,
                names: '回到顶部',
                link: '/overview/toTop',
                pageMenu: 1,
                type: 1
              },
              {
                position: '12',
                isActive: true,
                names: 'float',
                link: '/overview/float',
                pageMenu: 1,
                type: 1
              },
            ],
            names: '项目概况',
            pageMenu: 1,
            type: 1,
            routeKey: 'overview'
          }
        ]
      }
    },
    watch: {
      isSystemShows (val) {
        // alert(val)
      }
    },
    computed: {
      ...mapState({}),
      // 是否显示项目asb左边栏
      isSystemShows () {
        return this.$store.state.isSystemShow
      }
    },
    created () {
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg
      })
    },
    methods: {},
    mounted: function () {
      this.$nextTick(function () {
        console.log(this.$route, '5r5r5r5r5r5r5r5r5r')
      })
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .sidebar {
    display: block;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    z-index: 10000;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 240px;
    box-sizing: border-box;
  }

  .sidebar > ul {
    height: 100%;
    padding: 10px;
  }

  .menu-box {
    /* margin-top: -30px;*/
    background-color: rgba(245, 247, 250, 1);
    .menu-list, .el-submenu__title {
      margin-top: 2px;
      margin-bottom: 2px;
      height: 50px;
      line-height: 50px;
      color: #363636;
      background-color: #fff;
      .text {
        margin-left: 10px;
      }
      &.is-active, &:hover {
        background-color: #33adff !important;
        color: #f00;
      }
    }
  }

  .ico {
    width: 18px;
    height: 20px;
    font-size: 18px;
  }

  #scrollbarbox {
    width: 100%;
    height: calc(100% - 225px + 100px + 50px + 50px);
  }

</style>

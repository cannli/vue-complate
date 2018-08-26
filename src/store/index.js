import Vue from 'vue'
import Vuex from 'vuex'
import { cookieStorage } from '../common/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_info: cookieStorage.get('user_info'),
    projectId: '',          // 项目Id
    projectName: '',        // 项目名称
    uploadWay: '',          // 记录数据来源方式
    projectType: '',        // 记录项目类型个人消费贷不显示抵押物分布
    typeObject: {},         // 各种类型
    typeObjectAll: {},      // 各种类型+全部选项
    //cannli
    projectUpdate: false,   // 在ABS下拉更新标识 self.$store.commit('projectName_change'
    projectAdd: '',         // 新增项目的标识---在dataAddProject
    isSystemShow: 'project',     // 项目ABS跟系统菜单是否显示
    confingMenu: '',
    authorityPageMenu: 0,   // 系统设置显示隐藏
    isSidebar: undefined,   // 菜单是否显示**
    projectStateHome: true,            // 左边项目图标跟项目名字显示隐藏，在系统配置中隐藏
    headerSelectName: 'project',       // 头部，项目选择标识
    isSuperRole: Boolean,              // 是否是超管
    treeIsShow: Boolean,               // 左边菜单是否显示
    projectMenuShow: false,            // 新建项目按钮是否显示
    //获取hash值做面包屑

    browsingMaintenanceObj: {},        // 资产列表

    // 获取费用设置的ID
    expenseSetID: '',
    // 费用类型
    taxType: '',
    assertData: '',                     // 基础资产导入-资产池导入数据
    // 获取 存续期 页面标识
    poolToStr: '',

    hisAgencyType: '',  //机构分类

    //入池数据来源
    dataInterType: '',
    rowStatus: '',
    rowId: '',
    serialNumber: '',

    // 面包屑数组，每个页面传到index去
    breadcrumbArr: [],
  },
  getters: {
    // doneTodos: state => {
    //     return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount: (state, getters) => {
    //     return getters.doneTodos.length
    // }
    getAssertData (state) {
      return state.assertData
    }
  },
  actions: {
    increment ({commit}, val) {
      commit('user_info_change', val)
    }
  },
  mutations: {
    // set cookie
    user_info_change (state, val) {
      state.user_info = val || {}
      if (val === null) {
        cookieStorage.remove('user_info')
      } else {
        cookieStorage.set('user_info', val)
      }
    },
    saveAssertData (state, val) {
      state.assertData = val
    },
    projectId_change (state, val) {
      state.projectId = val
    },
    projectName_change (state, val) {
      state.projectName = val
    },
    uploadWay_change (state, val) {
      state.uploadWay = val
    },
    projectType_change (state, val) {
      state.projectType = val
    },
    typeObject_put (state, val) {
      state.typeObject = val
    },
    typeObjectAll_put (state, val) {
      state.typeObjectAll = val
    },
    //cannli
    projectUpdate_change (state, val) {
      state.projectUpdate = val
    },
    projectAdd_change (state, val) {
      state.projectAdd = val
    },
    isSystemShow_change (state, val) {
      state.isSystemShow = val
    },
    confingMenu_change (state, val) {
      state.confingMenu = val
    },
    authorityPageMenu_change (state, val) {
      state.authorityPageMenu = val
    },
    isSidebar_change (state, val) {
      state.isSidebar = val
    },
    projectStateHome_change (state, val) {
      state.projectStateHome = val
    },
    headerSelectName_change (state, val) {
      state.headerSelectName = val
    },
    treeIsShow_change (state, val) {
      state.treeIsShow = val
    },
    isSuperRole_change (state, val) {
      state.isSuperRole = val
    },
    projectMenuShow_change (state, val) {
      state.projectMenuShow = val
    },

    expenseSetID_change (state, val) {
      state.expenseSetID = val
    },
    taxType_change (state, val) {
      state.taxType = val
    },
    poolToStr_change (state, val) {
      state.poolToStr = val
    },
    //机构分类
    hisAgencyType_change (state, val) {
      state.hisAgencyType = val
    },
    dataInterType_change (state, val) {
      state.dataInterType = val
    },
    rowStatus_change (state, val) {
      state.rowStatus = val
    },
    rowId_change (state, val) {
      state.rowId = val
    },
    serialNumber_change (state, val) {
      state.serialNumber = val
    },
    // 面包屑
    breadcrumbArr_change (state, val) {
      state.breadcrumbArr = val
    }
  }
})

export default store

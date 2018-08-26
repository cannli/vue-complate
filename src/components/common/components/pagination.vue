<template>
  <div v-if="tableData">
    <div class="pagination-foot" v-if="tableData.length!=0">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props:{
      total: {
        type: Number,
        default: 0
      },
      tableData:{
        type: Array,
        default: []
      },
      pageNum:{
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        // 分页
        currentPage: this.pageNum,
       // total: 0,
        pageSize: 10,
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
      })
    },
    computed: {},
    watch: {
      pageNum(val){
        this.currentPage = val
      }
    },
    methods: {
      // 分页
      handleSizeChange(val) {
        this.pageSize = val
        this.currentPage = 1
        this.$emit('getDataList', this.currentPage,this.pageSize)
        // console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.$emit('getDataList', this.currentPage,this.pageSize)
        // console.log(`当前页: ${val}`)
      },
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },

  }
</script>

<style scoped>

</style>

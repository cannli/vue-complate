<!--<template>
  <div>
    <div style="float:left; width:200px; background:blue">left</div>

    <div style="height:100%; background: red">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  export default {
    name: "floatAndDiv",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>

</style>-->

<template>
  <div class="">
     <el-table
       :data="listData"
       :span-method="objectSpanMethod"
       border
       class="tableArea"
       style="width: 100%">

       <el-table-column
         v-for="cloumn in headerObj"
         :prop="cloumn.prop"
         :key="cloumn.prop"
         :label="cloumn.label"
         show-overflow-tooltip>
       </el-table-column>

       <!--<el-table-column
         prop="type"
         label="序号"
         align="center"
         width="200"/>
       <el-table-column
         prop="sheetType"
         label="工单类型"
       />
       <el-table-column
         prop="taskKey"
         label="taskKey"
       />
       <el-table-column
         prop="templateUrl"
         label="templateUrl"
       />-->
       <el-table-column
         label="操作"
       >
         <template slot-scope="scope">
           <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
             <i class="el-icon-edit-outline" @click="modify(scope)"/>
           </el-tooltip>
           <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
             <i class="el-icon-delete" @click="deleteData(scope)"/>
           </el-tooltip>
         </template>
       </el-table-column>
     </el-table>
  </div>
</template>
<script>

  export default {
    name: 'myNeedDeal',
    data() {
      return {
        rowList: [],
        spanArr: [],
        position: 0,
        listData: [],
        //  headerObj: [],

        headerObj: [
          {prop: 'name', label: ''},
          {prop: 'name1', label: '仅该分档偿付完毕'},
          {prop: 'name2', label: '优先A'},
          {prop: 'name3', label: '优先B'},
          {prop: 'name4', label: '次级'}
        ]
      }
    },

    methods: {
      queryData() { // 查询操作
        /*  this.headerObj = [
            {prop: 'id', label: ''},
            {prop: 'type', label: '工单类型'},
            {prop: 'sheetType', label: 'sheetType'},
            {prop: 'taskKey', label: 'taskKey'},
            {prop: 'templateUrl', label: 'templateUrl'},
          ] */
        this.listData = [
          {
            id: 1,
            type: 1,
            sheetType: '事件单',
            taskKey: 'shijian_01',
            templateUrl: '/shijian_01'
          },
          {
            id: 2,
            type: 1,
            sheetType: '事件单',
            taskKey: 'shijian_02',
            templateUrl: '/shijian_02'
          },
          {
            id: 3,
            type: 1,
            sheetType: '事件单',
            taskKey: 'shijian_03',
            templateUrl: '/shijian_04'
          },
          {
            id: 22,
            type: 1,
            sheetType: '事件单',
            taskKey: 'shijian_02',
            templateUrl: '/shijian_02'
          },
          {
            id: 4,
            type: 2,
            sheetType: '问题单',
            taskKey: 'wenti_01',
            templateUrl: '/wenti_01'
          },
          {
            id: 5,
            type: 2,
            sheetType: '问题单',
            taskKey: 'wenti_02',
            templateUrl: '/wenti_02'
          },
          {
            id: 6,
            type: 2,
            sheetType: '问题单',
            taskKey: 'wenti_03',
            templateUrl: '/wenti_03'
          },
          {
            id: 21,
            type: 3,
            sheetType: '问题单',
            taskKey: 'wenti_03',
            templateUrl: '/wenti_03'
          }
        ]
        this.rowspan()
    //    console.log(this.spanArr, 'this.spanArr')
      },
      rowspan() {
        this.listData.forEach((item, index) => {
          if (index === 0) {
            this.spanArr.push(1)
            this.position = 0
          } else {
            if (this.listData[index].type === this.listData[index - 1].type) {
              this.spanArr[this.position] += 1
              this.spanArr.push(0)
            } else {
              this.spanArr.push(1)
              this.position = index
            }
          }
        })

      },
      objectSpanMethod({row, column, rowIndex, columnIndex}) {  //表格合并行
        if (columnIndex === 0) {
          const _row = this.spanArr[rowIndex]
          const _col = _row > 0 ? 1 : 0
          return {
            // 1代表：独占一行
            // 更大的自然数：代表合并了若干行
            // 0：代表“消失”的哪那一个单元格，后面的单元格向前推一格
            // 表示这个单元格占几横 代表合并行的行数，_row的值要么是1，或者更大的自然正整数，要么是0。
            rowspan: _row,

            colspan: _col
          }
        }
//        if (columnIndex === 1) {
//          const _row = this.spanArr[rowIndex]
//          const _col = _row > 0 ? 1 : 0
//          return {
//            rowspan: _row,
//            colspan: _col
//          }
//        }
      }
    },
    mounted() {
      //  this.queryData()
      let headerObj = this.headerObj
      let len = this.headerObj.length * 7 - 3
      let keys = headerObj.map(item => item.prop)
      let names = headerObj.map(item => item.label)
      let arrLeft = ['基础数据','基础数据','基础数据','基础数据']
      let left = ['优先A表现', '优先B表现', '次级表现'].map(x => `${x},`.repeat(7)).join(',').split(',').filter(y => y)
      left = [...arrLeft,...left]
      let jichu = ['累计违约率(%)', '累计违约金额', '累计早偿金额', '累计回收金额']
      let xunH = ['加权平均期限(年)', '应收本金', '实收本金', '应收利息', '实收利息', '本金覆盖率', '本息覆盖率']
      xunH = (xunH.join(',') + ',').repeat(this.headerObj.length - 2).split(',')
      xunH = [...jichu, ...xunH]

      let num = [1,2,3,4].map((x, index) => {
        if (index === 0) {
          return `${x},`.repeat(4)
        }else {
          return `${x},`.repeat(7)
        }
      }).join(',').split(',').filter(y => y)

      console.log(xunH)

      let data = []

      for (let x = 0; x < len; x++) {
        for (let y in keys) {
          data[x] = {...data[x], type: num[x], name: left[x], [keys[y]]: y == 1 ? xunH[x] : '-'}
        }
      }
    //  console.log(data, 777777)
      this.listData = data
      this.rowspan()
    }
  }
</script>
<style lang="scss" scoped>
  .el-select {
    margin-right: 15px;
  }

  .el-input {
    margin-right: 15px;
    width: 200px;
  }

  .tableArea {
    margin-top: 20px;
    box-shadow: 0 0 8px 0 #aaa;
  }

  i[class^="el-icon"] {
    margin-right: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .modify_table {

    td {
      padding: 10px;
    }

  }

  .item_title {
    text-align: right;
  }
</style>



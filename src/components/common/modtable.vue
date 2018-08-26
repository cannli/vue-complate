<!--
@desc table 外面的内容
@data {Array} 用于判断是否显示nodata
@header {Array} 头部的th
@caption {String} caption
@isTip {Boolean} 是否显示‘没有找到符合条件的结果，请尝试查询其他条件’
@islineBreak {Boolean} 是否td禁止换行
e.g：
<modTable :data="tableData" :header="headerArr" :caption="caption" :isTip="isTip" :islineBreak="islineBreak">
    <tr v-for="(col, index) in tableData">
        <td>{{col}}</td>
    </tr>
</modTable>
-->
<template>
  <div class="mod-table ext-table-gray a-row" :class="{ 'show-table-nodata': data.length<=0, 'uncol-tableV2' : islineBreak }">
    <scrollbar>
      <table>
        <caption>{{caption}}</caption>
        <thead>
        <tr v-if="isHTML">
          <th colspan="7" class="produce">资产端</th>
          <th colspan="7">产品端</th>
        </tr>
        <tr v-if="!isHTML"><!--'alignStr': alignStrBool,-->
          <th :class="{'alignStr': alignStrBool, 'hand' : isOrder }" v-for="col in header" @click="changeOrderByName(col)">{{col}}
            <em class="orderBy" v-if="isOrderShow(col)" :class="{ 'orderByTran' : orderFlag == 'ASC' }"></em>
          </th>
        </tr>
        <tr v-if="isHTML">
          <th v-for="(col, index) in header">{{col.name}}</th>
        </tr>
        </thead>
        <tbody>
        <slot></slot>
        </tbody>
      </table>
      <div class="table-nodata" v-if="isTip">
        <div class="table-nodata-wrap">
          <div class="ico-nodata"></div>
          <p>{{tip}}</p>
        </div>
      </div>
    </scrollbar>
  </div>
</template>

<script>
  // DESC降序(默认)  ASC升序
  // orderColumn
  // orderFlag
  import scrollbar from 'v-scrollbar'

  export default {
    components: {
      scrollbar
    },
    props: {
      data: {
        type: Array
      },
      header: {
        type: Array
      },
      caption: {
        type: String,
        default: ''
      },
      isTip: { // 当没有数据的时候是否显示暂无数据
        type: Boolean,
        default: true
      },
      islineBreak: { // 是否td禁止换行
        type: Boolean,
        default: true
      },
      tip: {
        type: String,
        default: '暂无数据'
      },
      isOrder: {
        type: Boolean, // 是否显示倒叙按钮
        default: false
      },
      orderArr: {// 倒叙数组，那些要有按钮的
        type: Array
      },
      isHTML: {// head是否显示html  只在存续期=>产品设计=>方案确认使用
        type: Boolean,
        default: false
      },
      alignStrBool: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        orderByName: '', // 现在控制那个
        orderFlag: 'DESC' // DESC,
      }
    },
    methods: {
      isOrderShow(name) {
        if (!this.isOrder) {
          return false
        }
        for (var i in this.orderArr) {
          if (this.orderArr[i] == name && this.orderByName == name) {
            return true
          }
        }
        return false
      },
      changeOrderByName(name) {
        if (!this.isOrder) {
          return false
        }
        for (var i in this.orderArr) {
          if (this.orderArr[i] == name) {
            if (this.orderByName == name) {
              this.orderFlag == 'DESC' ? this.orderFlag = 'ASC' : this.orderFlag = 'DESC'
            } else {
              this.orderByName = name
              this.orderFlag = 'DESC'
            }
            this.$emit('fnOrder', {name: this.orderByName, order: this.orderFlag})
            break
          }
        }
      },
    }
  }
</script>

<style scoped>
  .orderBy {
    width: 20px;
    height: 20px;
    display: inline-block;
    transition: .4s;
  }

  .orderBy:before {
    content: '';
    border-top: 5px solid #666;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: relative;
    top: -2px;
    display: inline-block;
  }

  .orderByTran {
    transform: rotate(-180deg);
  }

  .hand {
    cursor: pointer;
  }

  .alignStr {
    text-align: left;
  }

  /*.wrapper-table{width: 100%; height: 600px;}*/
</style>



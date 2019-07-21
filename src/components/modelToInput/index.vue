<template>
  <div style="text-align: center;margin-top: 20px;">
    <input type="text" v-model="currentValue" @change="handleChange">
    <button @click="handleUp" :disabled="currentValue >= max">+</button>
    <button @click="handleDown" :disabled="currentValue <= min">-</button>
  </div>
</template>

<script>
  export default {
    props:['max','min','value'],
    name: "MyInput",
    data(){
      return {
        currentValue:this.value
      }
    },
    watch:{
      currentValue: function (val) { //currentValue值变动就向父组件传值
        this.$emit('input',val);
        this.$emit('on-change',val);
      },
      value:function (val) { //对值进行验证
        this.updataValue(val);
      }
    },
    mounted(){
      this.updataValue(this.value);
    },
    methods:{
      handleDown: function () {  //加法
        if(this.currentValue <= this.min){
          return;
        }else{
          this.currentValue -= 1;
        }
      },
      handleUp: function () { //减法
        if(this.currentValue >= this.max){
          return;
        }else{
          this.currentValue += 1;
        }
      },
      updataValue: function (val) {
        if(val > this.max){val = this.max}
        if(val < this.min){val = this.min}
        this.currentValue = val;

      },
      handleChange: function (event) {  //对值进行验证
        var val = event.target.value.trim();
        var max = this.max;
        var min = this.min;
        if(this.isNumber(val)){
          val = Number(val);
          this.currentValue = val;
          if(val > max){
            this.currentValue = max;
          }else if(val < min){
            this.currentValue = min;
          }
        }else{
          this.currentValue = 0;
        }
      },
      isNumber: function (value) {
        return (/^\-?[0-9]+$/).test(value + '');
      }
    }
  }
</script>

<style scoped>
  input{
    width: 280px;
    height: 36px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button{
    border: none;
    background: #4e83e4;
    color: #fff;
    height: 36px;
    width: 36px;
  }
</style>

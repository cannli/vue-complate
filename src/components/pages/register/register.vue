<template>
  <div class="login-body" :style="{backgroundImage:backgroundImage}">
    <div class="loginWarp"
         v-loading="load_data"
         element-loading-text="正在登陆中..."
         @keyup.enter="submit_form">
      <div class="login-title">
        <img src="./images/logo.png"/>
        <p class="login-title-text">红运天传学校后台</p>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules" label-width="0">
          <el-form-item prop="username" class="login-item">
            <el-input v-model="form.username" placeholder="请输入账户名：" class="form-input" :autofocus="true"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <el-input type="password" v-model="form.password" placeholder="请输入账户密码：" class="form-input"></el-input>
          </el-form-item>
          <el-form-item class="login-item">
            <el-button size="large" icon="check" class="form-submit" @click="submit_form">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-foot">
      <el-col :span="24">
        <p>Copyright © 2015-2019 粤ICP备15090号 访问官网</p>
      </el-col>
    </div>
  </div>
</template>
<script type="text/javascript">
 // import { mapActions } from 'vuex'
 // import { port_user, port_code } from 'common/port_uri'
 // import { SET_USER_INFO, SET_TOKEN_INFO } from 'store/actions/type'

  export default {
    components: {},
    data () {
      return {
        form: {
          username: null,
          password: null
        },
        rules: {
          username: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
          password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
        },
        // 请求时的loading效果
        load_data: false,
        backgroundImage: 'url(' + require('./images/login_bg.png') + ')',
      }
    },
    methods: {
      // 提交
      submit_form () {
        this.$refs.form.validate((valid) => {
          if (!valid) return false
          // this.load_data = true

          this.$store.commit('user_info_change', {user: {apiAuth: 1111111111}, login: true})
          this.$router.push({
            path: '/'
          })
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .login-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*  background-image: url(./images/login_bg.png); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .loginWarp {
      position: absolute;
      width: 300px;
      padding: 50px 100px;
      margin: 100px auto;
      left: 50%; /* 定位父级的50% */
      top: 50%;
      margin-top: -218px;
      margin-left: -250px;
      background-color: #fff;
      border-radius: 5px;
      vertical-align: middle;
      .login-title {
        margin-bottom: 50px;
        text-align: center;
        .login-title-text {
          font-weight: 800;
          color: #3F96FF;
          margin-top: 20px;
        }
      }
      .login-item {
        .el-input__inner {
          margin: 0 !important;
        }
      }
      .form-input {
        input {
          margin-bottom: 15px;
          font-size: 12px;
          height: 40px;
          border: 1px solid #eaeaec;
          background: #eaeaec;
          border-radius: 5px;
          color: #555;
        }
      }
      .form-submit {
        width: 100%;
        color: #fff;
        border-color: #357d12;
        background: #357d12;
        &:active, &:hover {
          border-color: #82de55;
          background: #82de55;
        }
      }
    }
  }

  .login-foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: #000;
    opacity: 0.5;
  }
</style>

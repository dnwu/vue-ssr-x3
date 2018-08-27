<template>
  <section class="container">
    <div class="login">
        <div class="title">TERMINUS</div>
        <div class="login-form">
            <div class="tit">特斯联人脸网关配置</div>
            <el-form :model="loginData" ref="loginData" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    prop="name"
                    :rules="[
                    { required: true, message: '用户名不能为空'}
                    ]"
                >
                    <el-input v-model="loginData.name" placeholder="用户名" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    prop="pass"
                    :rules="[
                    { required: true, message: '密码不能为空'}
                    ]"
                >
                    <el-input type="password" v-model="loginData.pass" placeholder="密码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginData')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      loginData: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/main/deviceActivation");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang='scss'>
.container {
  min-height: 100vh;
  .login {
    width: 100%;
    height: 100vh;
    background: url("./../assets/bg.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      text-align: center;
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .login-form {
      width: 400px;
      height: 340px;
      background-color: #fff;
      border-radius: 16px;
      padding: 30px 60px;
      box-sizing: border-box;
      .tit {
        text-align: center;
        font-size: 24px;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
      }
      .el-form {
        margin-top: 30px;
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss">
.login{
    .el-form {
      .el-form-item__content {
        margin-left: 0 !important;
      }
      .el-button {
        padding: 9px 126px;
      }
    }
}
</style>


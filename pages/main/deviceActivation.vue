<template>
    <div class="device-activation">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>设备激活</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <el-form size='mini' :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="Project ID"
                    prop="id"
                    :rules="[
                        { required: true, message: 'project id 不能为空'}
                    ]"
                >
                    <el-input type="age" v-model="numberValidateForm.id" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    v-show= licenseControl
                    label="License"
                    prop="license"
                >
                    <el-input v-model="numberValidateForm.license" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item class='button'>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">{{btnType}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      btnType: "激活",
      numberValidateForm: {
        id: "",
        license: "23123123"
      },
      licenseControl: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.licenseControl = true;
          this.btnType = "重新激活";
          this.$message({
            message: "激活成功",
            type: "success"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
};
</script>

<style lang='scss' scoped>
.device-activation {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .bread-crumb {
    padding-left: 20px;
    height: 40px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
  }
  .contain {
    flex: 1;
    width: 400px;
    margin: 40px auto;
  }
}
</style>
<style lang='scss'>
// 激活button 居中
.device-activation {
  .button {
    .el-form-item__content {
      text-align: center;
      button {
        padding: 7px 88px;
      }
    }
  }
}
</style>

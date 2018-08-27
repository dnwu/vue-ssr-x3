<template>
    <div class="system">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>系统操作</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="title">修改密码</div>
            <div class="reset-password">
                <el-form size="mini" :model="repasswordData" ref="repasswordData" label-width="100px" class="demo-ruleForm">
                    <el-form-item
                        label="用户名"
                        prop="username"
                        :rules="[
                        { required: true, message: '用户名不能为空'}
                        ]"
                    >
                        <el-input v-model="repasswordData.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="密码"
                        prop="pass"
                        :rules="[
                        { required: true, message: '密码不能为空'}
                        ]"
                    >
                        <el-input type="password" v-model="repasswordData.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="新密码"
                        prop="newPass"
                        :rules="[
                        { required: true, message: '新密码不能为空'}
                        ]"
                    >
                        <el-input type="password" v-model="repasswordData.newPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('repasswordData')">修改密码</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="title">恢复出厂设置</div>
            <div class="reboot">
                <div class="reboot-dialog">
                    <el-dialog
                        :visible.sync="rebootBox"
                        width="320px">
                        <div class="body">
                            <div class="icon el-icon-warning"></div>
                            <p>该操作将会重置数据，是否确认执行该操作</p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button plain type='primary' size="mini" @click="rebootBox = false">取消</el-button>
                            <el-button plain type='danger' size="mini" @click="rebootBoxSubmit">确定</el-button>
                        </span>
                    </el-dialog>
                </div>
                <p>点击按钮，将会清空项目数据，不用重新激活</p>
                <el-button plain type="primary" @click="rebootBtn">恢复出厂设置</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rebootBox: false,
      repasswordData: {
        username: "",
        pass: "",
        newPass: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '密码修改成功',
            type: 'success'
          })
          this.$refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    rebootBtn() {
        this.rebootBox = true
    },
    rebootBoxSubmit() {
      this.rebootBox = false
      this.$message({
        message: '回复出厂设置成功',
        type: 'success'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.system {
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
    .title {
      height: 40px;
      background-color: #fafafa;
      line-height: 40px;
      border-left: 6px solid #1890ff;
      padding-left: 10px;
      font-size: 14px;
      font-weight: 700;
    }
    .reset-password {
      width: 500px;
      margin: 20px auto;
      padding: 0 100px;
      box-sizing: border-box;
    }
    .reboot {
      padding-top: 20px;
      text-align: center;
      color: #333333;
      .el-button {
        margin-top: 20px;
      }
    }
  }
}
</style>
<style lang="scss">
.reboot-dialog {
  .el-dialog__body {
    .body {
      .icon {
        font-size: 40px;
        color: #f5222d;
      }
      p:nth-of-type(1) {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>

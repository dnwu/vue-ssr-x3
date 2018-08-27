<template>
    <div class="inter-deploy">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>网络配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <el-form size='mini' :model="deployData" ref="deployData" label-width="100px" class="demo-ruleForm">
                <div class="form">
                    <div class="left">
                        <div class="tit">
                            <span class="value">WAN配置</span>
                            <span class="warn"><span>*</span><span>必填项目</span></span>
                        </div>
                        <el-form-item
                            label="IP地址"
                            prop="WANIP"
                            :rules="[
                                { required: true, message: 'IP地址 不能为空'},
                                {pattern: pattern,message: 'IP地址格式错误.'}
                            ]"
                        >
                            <el-input v-model="deployData.WANIP" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="子网掩码"
                            prop="WANSubnet"
                            :rules="[
                                { required: true, message: '子网掩码 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.WANSubnet" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="默认网关"
                            prop="WANDefaultGateway"
                            :rules="[
                                { required: true, message: '默认网关 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.WANDefaultGateway" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="DNS"
                            prop="WANDNS"
                        >
                            <el-input v-model="deployData.WANDNS" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="NTO"
                            prop="WANNTO"
                            :rules="[
                                { required: true, message: 'NTO 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.WANNTO" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="服务器IP"
                            prop="WANServerIP"
                            :rules="[
                                { required: true, message: '服务器IP 不能为空'},
                                {pattern: pattern,message: 'IP地址格式错误'}
                            ]"
                        >
                            <el-input v-model="deployData.WANServerIP" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="安装地址"
                            prop="WANPosition"
                            :rules="[
                                { required: true, message: '安装地址 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.WANPosition" auto-complete="off"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <div class="tit">
                            <span class="value">LAN配置</span>
                            <span class="warn"><span>*</span><span>必填项目</span></span>
                        </div>
                        <el-form-item
                            label="IP地址"
                            prop="LANIP"
                            :rules="[
                                { required: true, message: 'IP地址 不能为空'},
                                {pattern: pattern,message: 'IP地址格式错误'}
                            ]"
                        >
                            <el-input v-model="deployData.LANIP" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="子网掩码"
                            prop="LANSubnet"
                            :rules="[
                                { required: true, message: '子网掩码 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.LANSubnet" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="默认网关"
                            prop="LANDefaultGateway"
                            :rules="[
                                { required: true, message: '默认网关 不能为空'}
                            ]"
                        >
                            <el-input v-model="deployData.LANDefaultGateway" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class="remark">
                            备注：<br/> 单网口产品显示WAN配置<br/> 多网口产品显示WAN配置和LAN配置
                        </div>
                    </div>
                </div>
                <div class="submit">
                    <el-form-item class='button'>
                        <el-button type="primary" @click="submitForm('deployData')">完成</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pattern: /((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,
      deployData: {
        WANIP: "",
        WANSubnet: "",
        WANDefaultGateway: "",
        WANDNS: "",
        WANNTO: "",
        WANServerIP: "",
        WANPosition: "",
        LANIP: "",
        LANSubnet: "",
        LANDefaultGateway: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.licenseControl = true;
          this.$message({
            message: "成功",
            type: "success"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.inter-deploy {
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
    .el-form {
      .form {
        display: flex;
        .left,
        .right {
          flex: 1;
          // min-width: 500px;
          .tit {
            margin: 20px 0 20px 30px;
            .value {
              font-size: 18px;
            }
            .warn {
              margin-left: 17px;
              font-size: 12px;
              span:nth-of-type(1) {
                color: red;
              }
            }
          }
        }
        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          .tit {
            margin-right: 150px;
          }
        }
        .right {
          .remark {
            font-size: 12px;
            width: 230px;
            height: 106px;
            padding: 20px;
            box-sizing: border-box;
            background-color: #fffbe6;
            border: 1px solid #ffe58f;
            margin: 80px 0 0 80px;
          }
        }
      }
      .submit {
        text-align: center;
        padding-top: 40px;
      }
    }
  }
}
</style>
<style lang="scss">
// 定义输入框的尺寸
.inter-deploy {
  .el-form-item__content {
    margin-left: 0;
    .el-input {
      input {
        width: 220px;
      }
    }
    // 激活button尺寸
    .el-button {
      padding: 7px 40px;
      button {
        width: 200px;
      }
    }
  }
}
</style>

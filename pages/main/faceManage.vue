<template>
    <div class="face-manage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>人脸网管管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="tit">
                <span class="value">人脸网关配置</span>
                <span class="warn"><span>*</span><span>必填项目</span></span>
            </div>
            <el-form size='mini' :model="faceNetData" ref="faceNetData" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="网关型号"
                    prop="type"
                >
                    <el-input disabled v-model="faceNetData.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="网关名称"
                    prop="name"
                    :rules="[
                        { required: true, message: '网关名称 不能为空'}
                    ]"
                >
                    <el-input v-model="faceNetData.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="网关MAC"
                    prop="MAC"
                >
                    <el-input disabled v-model="faceNetData.MAC" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="固件版本"
                    prop="version"
                >
                    <el-input disabled v-model="faceNetData.version" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="MQTT"
                    prop="MQTT"
                    :rules="[
                        { required: true, message: 'MQTT 不能为空'}
                    ]"
                >
                    <el-input v-model="faceNetData.MQTT" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="支持路数"
                    prop="supportLinesNum"
                >
                    <el-input disabled v-model="faceNetData.supportLinesNum" auto-complete="off"></el-input>
                    <p class="warn">人脸网关最大支持路数，在进行通道配置时通道数量只能≤通道数</p>
                </el-form-item>
                <el-form-item class='button'>
                    <el-button type="primary" @click="submitForm('faceNetData')">激活</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      faceNetData: {
        type: "",
        name:'',
        MAC:'',
        version:'',
        MQTT: '',
        supportLinesNum:''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.licenseControl = true;
          this.$message({
              message: '激活成功',
              type: 'success'
          })
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
.face-manage {
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
    width: 300px;
    margin: 0 auto;
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
    .warn{
        color: #999999;
        font-size: 12px;
        white-space:nowrap;
    }
  }
}
</style>
<style lang="scss">
// 激活button 居中
.face-manage {
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

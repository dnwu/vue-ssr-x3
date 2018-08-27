<template>
    <div class="project-test">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>工程测试</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <el-button size="mini" plain type="primary">清空测试数据</el-button>
            </div>
            <div class="body">
                <div class="title">通道测试</div>
                <div class="step">
                    <div class="step1" :class="!wayTestControl?'':'did'">
                        <span>1</span>
                        <span>上传图片</span>
                        <span></span>
                    </div>
                    <div class="step2" :class="!wayTestControl?'dont':''">
                        <span>2</span>
                        <span>通道测试</span>
                        <span></span>
                    </div>
                </div>
                <template >
                    <div v-show="!wayTestControl" class="upload">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                            >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <div v-show="!wayTestControl" class="btn">
                        <el-button @click="upload" size="mini" type="primary">上传网关</el-button>
                    </div>
                </template>
                <template >
                    <!-- info prompt -->
                    <div class="prompt-dialog">
                        <el-dialog
                            :visible.sync="promptBox"
                            width="300px">
                            <div class="body">
                                <div class="icon el-icon-warning"></div>
                                <p>开门失败</p>
                                <!-- <p>你是否删除该摄像头设备?</p> -->
                                <p></p>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button plain type='primary' size="mini" @click="promptBox = false">我知道了</el-button>
                            </span>
                        </el-dialog>
                    </div>
                    <div v-show="wayTestControl" class="openTest">
                        <el-button  @click="testWay(1)" size="mini" type="primary">X1通道</el-button>
                        <el-button  @click="testWay(2)" size="mini" type="primary">X2通道</el-button>
                        <el-button  @click="testWay(3)" size="mini" type="primary">X3通道</el-button>
                        <el-button  @click="testWay(4)" size="mini" type="primary">X4通道</el-button>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      wayTestControl: false,
      promptBox: false
    };
  },
  methods: {
    handleAvatarSuccess() {},
    beforeAvatarUpload(file) {
      var read = new FileReader()
      read.readAsDataURL(file)
      read.onload = () => {
        // console.log(read.result);
        this.imageUrl = read.result
      }
    },
    upload() {
      this.wayTestControl = true;
    },
    testWay(i) {
      this.promptBox = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.project-test {
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
    .top {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 80px;
    }
    .body {
      .title {
        height: 30px;
        background-color: #fafafa;
        font-size: 14px;
        font-weight: 700;
        line-height: 30px;
        padding-left: 15px;
        border-left: 6px solid #1890ff;
      }
      .step {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .step1,
        .step2 {
          display: inline-block;
          width: 100px;
          height: 40px;
          background-color: #1890ff;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          position: relative;
          span:nth-of-type(1) {
            font-size: 12px;
            width: 15px;
            height: 15px;
            margin-right: 3px;
            border-radius: 50%;
            border: 1px solid #ffffff;
            line-height: 15px;
            text-align: center;
          }
          span:nth-of-type(2) {
            z-index: 99;
          }
          span:nth-of-type(3) {
            width: 28px;
            height: 29px;
            background-color: #1890ff;
            position: absolute;
            right: -14px;
            transform: rotate(45deg) translateY(0px);
          }
        }
        .step1 {
          margin-right: 60px;
        }
        .step1.did {
          color: #1890ff;
          background-color: #fafafa;
          border-left: 1px solid #d9d9d9;
          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
          span:nth-of-type(1) {
            border-color: #1890ff;
          }
          span:nth-of-type(3) {
            background-color: #fafafa;
            border-right: 1px solid #d9d9d9;
            border-top: 1px solid #d9d9d9;
          }
        }
        .step2.dont {
          color: #cccccc;
          background-color: #fafafa;
          border-left: 1px solid #d9d9d9;
          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
          span:nth-of-type(1) {
            border-color: #cccccc;
          }
          span:nth-of-type(3) {
            background-color: #fafafa;
            border-right: 1px solid #d9d9d9;
            border-top: 1px solid #d9d9d9;
          }
        }
      }
      .btn {
        text-align: center;
        margin-top: 20px;
      }
      .openTest {
        display: flex;
        justify-content: center;
        padding-top: 30px;
        > button {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.project-test {
  .prompt-dialog {
    .el-dialog__body {
      .body {
          text-align: center;
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
    .el-dialog__footer{
        text-align: center;
    }
  }
}

.avatar-uploader {
  display: flex;
  justify-content: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

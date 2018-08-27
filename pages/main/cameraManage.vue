<template>
    <div class="camera-manage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>摄像头管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <el-button size='mini' @click="addCarmera" type="primary">添加摄像头</el-button>
                <span>支持最大的摄像头路数:12</span>
            </div>
            <div class="table">
                <!-- 测试链接框 -->
                <div class="test-dialog">
                    <el-dialog
                        :visible.sync="testBox"
                        width="300px">
                        <div class="body">
                            <div class="icon el-icon-success"></div>
                            <p>视频连接：<span class='success'>正常</span></p>
                            <p>解码：<span class="error">正常</span></p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type='primary' size="mini" @click="testBox = false">我知道了</el-button>
                        </span>
                    </el-dialog>
                </div>
                <!-- 删除框 -->
                <div class="delete-dialog">
                    <el-dialog
                        :visible.sync="deleteBox"
                        width="300px">
                        <div class="body">
                            <div class="icon el-icon-warning"></div>
                            <p>删除警告</p>
                            <p>是否删除该摄像头设备?</p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button plain type='primary' size="mini" @click="deleteBox = false">取消</el-button>
                            <el-button plain type='danger' size="mini" @click="deleteItemSubmit">删除</el-button>
                        </span>
                    </el-dialog>
                </div>
                <!-- 修改和添加框 -->
                <div class="add-dialog">
                    <el-dialog :title="addDialogTitle" :visible.sync="addDialog" width="560px" :close-on-click-modal=false>
                        <div class="body">
                            <el-form size='mini' :model="addCarmeraData" ref="addCarmeraData" label-width="100px" class="demo-ruleForm">
                                <el-form-item
                                    label="摄像头名称"
                                    prop="name"
                                    :rules="[
                                        { required: true, message: '摄像头名称 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头厂商"
                                    prop="maker"
                                >
                                    <el-input v-model="addCarmeraData.maker" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头序列号"
                                    prop="id"
                                >
                                    <el-input v-model="addCarmeraData.id" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头IP"
                                    prop="ip"
                                    :rules="[
                                        { required: true, message: '摄像头IP不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.ip" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="端口号"
                                    prop="port"
                                    :rules="[
                                        { required: true, message: '端口号不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.port" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="用户名"
                                    prop="username"
                                    :rules="[
                                        { required: true, message: '用户名不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.username" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="密码"
                                    prop="pass"
                                    :rules="[
                                        { required: true, message: '密码不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.pass" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="勾流方式"
                                    prop="protocol"
                                    :rules="[
                                        { required: true, message: '请选择一种勾流方式'}
                                    ]"
                                >
                                    <el-radio-group @change='protocolChange' v-model="addCarmeraData.protocol">
                                        <el-radio label="RTSP"></el-radio>
                                        <el-radio label="厂商SDK"></el-radio>
                                    </el-radio-group>
                                </el-form-item>


                                <el-form-item
                                    v-if="addCarmeraData.protocol == 'RTSP'"
                                    label="RTSP地址"
                                    prop="RTSP"
                                    :rules="[
                                        { required: true, message: 'RTSP地址不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.RTSP" auto-complete="off"></el-input>
                                </el-form-item>


                                <el-form-item
                                    v-if="addCarmeraData.protocol == '厂商SDK'"
                                    label="摄像头型号"
                                    prop="cameraType"
                                    :rules="[
                                        { required: true, message: '摄像头型号不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.cameraType" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    v-if="addCarmeraData.protocol == '厂商SDK'"
                                    label="标准类型"
                                    prop="standard"
                                    :rules="[
                                        { required: true, message: '标准类型不能为空'}
                                    ]"
                                >
                                    <el-select v-model="addCarmeraData.standard" placeholder="请选择标准类型">
                                        <el-option label="国际" value="1"></el-option>
                                        <el-option label="ONVIF" value="2"></el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item class='button'>
                                    <el-button size="mini" @click="addDialog = false">取消</el-button>
                                    <el-button type='primary' size="mini" @click="submitForm('addCarmeraData')">确定</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-dialog>
                </div>
                 <div class="title layout">
                    <div class="index">序号</div>
                    <div class="name">摄像头名称</div>
                    <div class="maker">摄像头厂商</div>
                    <div class="id">摄像头序列号</div>
                    <div class="ip">摄像头ip</div>
                    <div class="port">端口号</div>
                    <div class="protocol">勾流方式</div>
                    <div class="link-state">连接状态</div>
                    <div class="link-test">连接测试</div>
                    <div class="operate">操作</div>
                </div>
                <div class="body">
                    <div class="line layout" v-for="(item,index) in new Array(6)" :key="index">
                        <div class="index">{{index+1}}</div>
                        <div class="name">sonyx54</div>
                        <div class="maker">索尼索尼</div>
                        <div class="id">234MFHS435K</div>
                        <div class="ip">192.168.0.1</div>
                        <div class="port">8088</div>
                        <div class="protocol">
                            <p>RTSP</p>
                            <p>RTSP地址:192.23.43.4</p>
                        </div>
                        <div class="link-state">
                            <p>视频连接:<span>正常</span></p>
                            <p>解码:<span>正常</span></p>
                        </div>
                        <div class="link-test">
                            <el-button type="text" @click="test">测试</el-button>
                        </div>
                        <div class="operate">
                            <el-button type="text" @click="resetCarmera">修改</el-button>
                            <el-button type="text" style="color: #F5222D" @click="deleteItem">删除</el-button>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      testBox: false,
      deleteBox: false,
      addDialog: false,
      addDialogTitle: "添加摄像头",
      addCarmeraData: {
        name: "",
        maker: "",
        id: "",
        ip: "",
        port: "",
        username: "",
        pass: "",
        protocol: "",
        RTSP: "",
        cameraType: "",
        standard: ""
      }
    };
  },
  methods: {
    addCarmera() {
      this.addDialogTitle = "添加摄像头";
      this.addDialog = true;
    },
    resetCarmera() {
      this.addDialogTitle = "修改摄像头";
      this.addDialog = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.addDialog = false
            this.$message({
                message: '添加摄像头成功',
                type: 'success'
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    protocolChange(val) {
      console.log(val);
    },
    test() {
      this.testBox = true;
    },
    deleteItem() {
      this.deleteBox = true;
    },
    deleteItemSubmit() {
      this.deleteBox = false;
      this.$message({
        message: "删除成功",
        type: "success"
      });
    }
    // handleClickhandleClick(row) {
    //   console.log(row);
    // }
  }
};
</script>

<style lang='scss' scoped>
.camera-manage {
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
    display: flex;
    flex-direction: column;
    .top {
      margin-left: 30px;
      margin-top: 10px;
      height: 28px;
      span {
        margin-left: 20px;
        font-size: 12px;
        color: #666666;
      }
    }

    .table {
      flex: 1;
      padding: 20px 30px;
      text-align: center;
      .layout {
        display: flex;
        .index {
          width: 50px;
        }
        .name {
          width: 100px;
        }
        .maker {
          width: 100px;
        }
        .id {
          //   width: 150px;
          flex: 1;
        }
        .ip {
          //   width: 150px;
          flex: 1;
        }
        .port {
          width: 70px;
        }
        .protocol {
          //   width: 150px;
          flex: 1;
        }
        .link-state {
          //   width: 120px;
          flex: 1;
        }
        .link-test {
          width: 70px;
        }
        .operate {
          //   width: 100px;
          flex: 1;
        }
      }
      .title {
        height: 40px;
        background-color: #fafafa;
        line-height: 40px;
        font-size: 13px;
        font-weight: 700;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .line {
        height: 90px;
        line-height: 90px;
        font-size: 13px;
        color: #666666;
        &:hover {
          background-color: #e6f7ff;
        }
        .protocol,
        .link-state {
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            //   text-align: left;
            line-height: 0;
            //   margin: 0;
            span {
              color: #000;
              font-weight: 700;
            }
          }
        }
      }
    }
    .page {
      text-align: center;
      height: 34px;
    }
  }
}
</style>
<style lang="scss">
// 设置表格样式
.camera-manage {
  .table {
    th {
      text-align: center;
    }
    .el-table__header-wrapper {
      font-size: 12px;
      background-color: #fafafa;
    }
    .el-table__fixed-right {
      .el-table__fixed-header-wrapper {
        font-size: 12px;
      }
    }
    .el-table__body {
      font-size: 12px;
    }
  }
  //   测试弹出框样式
  .test-dialog {
    .el-dialog__body {
      font-size: 12px;
      color: #666666;
      .icon {
        font-size: 40px;
        color: #52c41a;
      }
      .success {
        color: #1890ff;
      }
      .error {
        color: #f5222d;
      }
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
  //   删除弹出框
  .delete-dialog {
    .el-dialog__body {
      .body {
        .icon {
          font-size: 40px;
          color: #f5222d;
        }
        p:nth-of-type(1) {
          font-size: 16px;
          font-weight: 700;
        }
        p:nth-of-type(2) {
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }
  //   添加摄像头和修改摄像头样式
  .add-dialog {
    .el-dialog__header {
      text-align: left;
      color: #333333;
      padding: 10px;
      .el-dialog__title {
        font-size: 14px;
      }
    }
    .el-dialog__body {
      padding: 30px 140px;
      .el-form-item__label {
        font-size: 12px;
      }
    }
  }
}
</style>

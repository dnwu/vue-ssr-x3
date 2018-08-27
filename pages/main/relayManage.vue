<template>
    <div class="relay-manage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>网络继电器管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <el-button @click="addRelay" size="mini" type="primary">添加网络继电器</el-button>
            </div>
            <div class="table">
              <!-- 链接状态弹窗 -->
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
                        <p>是否删除该该网络继电器?</p>
                        <p></p>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button plain type='primary' size="mini" @click="deleteBox = false">取消</el-button>
                        <el-button plain type='danger' size="mini" @click="deleteItemSubmit">删除</el-button>
                    </span>
                </el-dialog>
              </div>
              <!-- 添加网络继电器弹窗 -->
              <div class="add-relay">
                <el-dialog :title="addDialogTitle" :visible.sync="addDialog" width="800px" :close-on-click-modal=false>
                  <div class="body">
                    <el-form size='mini' :model="addRelayData" ref="addRelayData" label-width="120px" class="demo-ruleForm">
                        <el-form-item
                            label="网络继电器名称"
                            prop="name"
                            :rules="[
                                { required: true, message: '网络继电器名称 不能为空'}
                            ]"
                        >
                            <el-input v-model="addRelayData.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="网络继电器型号"
                            prop="type"
                        >
                            <el-input v-model="addRelayData.type" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="继电器序列号"
                            prop="id"
                        >
                            <el-input v-model="addRelayData.id" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="继电器IP"
                            prop="ip"
                            :rules="[
                                {pattern: pattern,message: 'IP地址格式错误'}
                            ]"
                        >
                            <el-input v-model="addRelayData.ip" auto-complete="off"></el-input>
                        </el-form-item>
                        
                      <div class="lines">
                        <el-form-item
                            label="1.通道名称"
                            prop="line1.name"
                        >
                            <el-input v-model="addRelayData.line1.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line1.order"
                        >
                            <el-input v-model="addRelayData.line1.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="2.通道名称"
                            prop="line2.name"
                        >
                            <el-input v-model="addRelayData.line2.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line2.order"
                        >
                            <el-input v-model="addRelayData.line2.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="3.通道名称"
                            prop="line3.name"
                        >
                            <el-input v-model="addRelayData.line3.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line3.order"
                        >
                            <el-input v-model="addRelayData.line3.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="4.通道名称"
                            prop="line4.name"
                        >
                            <el-input v-model="addRelayData.line4.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line4.order"
                        >
                            <el-input v-model="addRelayData.line4.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="5.通道名称"
                            prop="line5.name"
                        >
                            <el-input v-model="addRelayData.line5.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line5.order"
                        >
                            <el-input v-model="addRelayData.line5.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="6.通道名称"
                            prop="line6.name"
                        >
                            <el-input v-model="addRelayData.line6.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line6.order"
                        >
                            <el-input v-model="addRelayData.line6.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="7.通道名称"
                            prop="line7.name"
                        >
                            <el-input v-model="addRelayData.line7.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line7.order"
                        >
                            <el-input v-model="addRelayData.line7.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item
                            label="8.通道名称"
                            prop="line8.name"
                        >
                            <el-input v-model="addRelayData.line8.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="AT指令"
                            prop="line8.order"
                        >
                            <el-input v-model="addRelayData.line8.order" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                      <div class="lines">
                        <el-form-item class='button'>
                          <el-button size="mini" @click="addDialog = false">取消</el-button>
                          <el-button type='primary' size="mini" @click="submitForm('addRelayData')">确定</el-button>
                        </el-form-item>
                      </div>
                    </el-form>
                  </div>
                </el-dialog>
              </div>
              <div class="title layout">
                  <div class="index">序号</div>
                  <div class="name">网络继电器名称</div>
                  <div class="maker">网络继电器型号</div>
                  <div class="id">网络继电器序列号</div>
                  <div class="ip">继电器IP</div>
                  <div class="way">继电器通道</div>
                  <div class="link-test">连接测试</div>
                  <div class="link-state">状态</div>
                  <div class="operate">操作</div>
              </div>
              <div class="body">
                <div class="line layout" v-for="(item,index) in Array(6)" :key="index">
                  <div class="index">{{index+1}}</div>
                  <div class="name">sonyx54</div>
                  <div class="maker">索尼索尼</div>
                  <div class="id">234MFHS435K</div>
                  <div class="ip">192.168.0.1</div>
                  <div class="way">8088</div>
                  <div class="link-test">
                    <el-button type="text" @click="test">在线</el-button>
                  </div>
                  <div class="link-state">
                    <el-button type="text">在线</el-button>
                  </div>
                  <div class="operate">
                    <el-button type="text" @click="resetCarmera">修改</el-button>
                    <el-button type="text" @click="deleteItem" style="color: #F5222D">删除</el-button>
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
      pattern: /((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,
      testBox: false,
      deleteBox: false,
      addDialog: false,
      addDialogTitle: "添加网络继电器",
      addRelayData: {
        name: "",
        type: "",
        id: "",
        line1: {
          name: "",
          order: ""
        },
        line1: {
          name: "",
          order: ""
        },
        line2: {
          name: "",
          order: ""
        },
        line3: {
          name: "",
          order: ""
        },
        line4: {
          name: "",
          order: ""
        },
        line5: {
          name: "",
          order: ""
        },
        line6: {
          name: "",
          order: ""
        },
        line7: {
          name: "",
          order: ""
        },
        line8: {
          name: "",
          order: ""
        }
      }
    };
  },
  methods: {
    addRelay() {
      this.addDialogTitle = "添加网络继电器";
      this.addDialog = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addDialog = false;
          this.$message({
            message: `${this.addDialogTitle}成功`,
            type: 'success'
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    test() {
      this.testBox = true;
    },
    resetCarmera() {
      this.addDialogTitle = "修改网络继电器";
      this.addDialog = true;
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
  }
};
</script>

<style lang='scss' scoped>
.relay-manage {
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
          flex: 1;
        }
        .maker {
          flex: 1;
        }
        .id {
          flex: 1;
        }
        .ip {
          flex: 1;
        }
        .way {
          flex: 1;
        }
        .link-test {
          flex: 1;
        }
        .link-state {
          flex: 1;
        }
        .operate {
          flex: 1;
        }
      }
      .title{
        height: 40px;
        background-color: #fafafa;
        border-bottom: 1px solid #E8E8E8;
        line-height: 40px;
        font-size: 13px;
        font-weight: 700;
      }
      .body{
        .line{
          height: 70px;
          line-height: 70px;
          font-size: 13px;
          color: #666666;
          &:hover{
            background-color: #E6F7FF;
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
.relay-manage {
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
  .add-relay {
    .el-dialog__header {
      text-align: left;
      color: #333333;
      padding: 10px;
      background-color: #fafafa;
      .el-dialog__title {
        font-size: 14px;
      }
    }
    .el-dialog__body {
      .el-form-item__label {
        font-size: 12px;
      }
      .el-form-item {
        width: 340px;
      }
      .lines {
        display: flex;
        .button {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>

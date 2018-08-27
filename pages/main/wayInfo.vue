<template>
    <div class="way-info">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>通道设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
          <!-- 通道信息配置框 -->
          <div class="way-deploy-dialog">
            <el-dialog
              :visible.sync="wayDeployBox"
              title="配置通道信息"
              :center="true"
              top= '10px'
              width="500px">
              <div class="body">
                  <el-form size="mini" :model="wayDeployData" ref="wayDeployData" label-width="100px" class="demo-ruleForm">
                    <div class="line">
                      <div class="key">位置信息:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.position" placeholder="请选择">
                            <el-option
                              v-for="item in positionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">人脸库信息:</div>
                      <div class="value">
                        <el-form-item>
                          <el-input v-model="wayDeployData.faceDBInfo" disabled></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="title">添加通道信息配置</div>
                    <div class="line">
                      <div class="key">通道方向:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.wayDirection" placeholder="请选择">
                            <el-option
                              v-for="item in wayDirectionOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="title">绑定摄像头</div>
                    <div class="line">
                      <div class="key">摄像头IP/名称:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.carmeraIP" placeholder="请选择">
                            <el-option
                              v-for="item in wayDirectionOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">是否监控:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.monitor" placeholder="请选择">
                            <el-option
                              v-for="item in monitorOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">是否用于开门:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.openDoor" placeholder="请选择">
                            <el-option
                              v-for="item in openDoorOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>

                    <template v-if="wayDeployData.openDoor == 'yes'? true: false">
                      
                    <div class="line">
                      <div class="key">继电器IP:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.relayIP" placeholder="请选择">
                            <el-option
                              v-for="item in relayIPOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">继电器通道:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.relayWay" placeholder="请选择">
                            <el-option
                              v-for="item in relayWayOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">开门延时:</div>
                      <div class="value">
                        <el-form-item>
                          <el-input v-model="wayDeployData.delay" disabled placeholder="1s"></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">开门时间:</div>
                      <div class="value">
                        <el-form-item>
                          <el-input v-model="wayDeployData.time" disabled placeholder="1s"></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">开门超时报警:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.overtimeWarning" placeholder="请选择">
                            <el-option
                              v-for="item in overtimeWarningOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">超时时间:</div>
                      <div class="value">
                        <el-form-item>
                          <el-input v-model="wayDeployData.overtime" disabled placeholder="120s"></el-input>
                        </el-form-item>
                      </div>
                    </div>

                    </template>

                    <div class="title">绑定摄像头</div>
                    <div class="line">
                      <div class="key">人脸识别模式:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.discernMode" placeholder="请选择">
                            <el-option
                              v-for="item in discernModeOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">人脸识别阈值:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.liminal" placeholder="请选择">
                            <el-option
                              v-for="item in liminalOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">人脸偏转角度:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.angle" placeholder="请选择">
                            <el-option
                              v-for="item in angleOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">人脸瞳距:</div>
                      <div class="value">
                        <el-form-item>
                          <el-input v-model="wayDeployData.pupilDistance" disabled placeholder="120s"></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">人脸抓拍速度:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.speed" placeholder="请选择">
                            <el-option
                              v-for="item in speedOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="line">
                      <div class="key">抓拍照片:</div>
                      <div class="value">
                        <el-form-item>
                          <el-select v-model="wayDeployData.picSize" placeholder="请选择">
                            <el-option
                              v-for="item in picSizeOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                  </el-form>
              </div>
              <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="wayDeployBox = false">取消</el-button>
                  <el-button type='primary' size="mini" @click="wayDeploySubmit">确定</el-button>
              </span>
            </el-dialog>
          </div>
            <div class="top">
                <el-button @click="wayDeploy" size="mini" type="primary">配置通道信息</el-button>
                <span>人脸网关路数:8</span>
            </div>
            <div class="table">
              <div class="title layout">
                  <div class="index">序号</div>
                  <div class="position">位置信息</div>
                  <div class="direction">方向</div>
                  <div class="carmera">摄像头</div>
                  <div class="relay">继电器信息</div>
                  <div class="operate">操作</div>
              </div>
              <div class="body">
                <!-- 删除框 -->
                <div class="delete-dialog">
                    <el-dialog
                        :visible.sync="deleteBox"
                        width="300px">
                        <div class="body">
                            <div class="icon el-icon-warning"></div>
                            <p>删除警告</p>
                            <p>你是否删除该摄像头设备?</p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button plain type='primary' size="mini" @click="deleteBox = false">取消</el-button>
                            <el-button plain type='danger' size="mini" @click="deleteItemSubmit">删除</el-button>
                        </span>
                    </el-dialog>
                </div>
                <div class="line layout" v-for="(item,index) in new Array(6)" :key="index">
                  <div class="index">{{index+1}}</div>
                  <div class="position">1期1栋1单元1门</div>
                  <div class="direction">进</div>
                  <div class="carmera">IP:192.168.1.1</div>
                  <div class="relay">
                    <p>IP:192.168.1.1</p>
                    <p>通道:123123</p>
                  </div>
                  <div class="operate">
                    <el-button @click="resetItem" style="font-size:12px;color:#1890FF" type="text">修改</el-button>
                    <el-button @click="deleteItem" style="font-size:12px;color:#F5222D" type="text">删除</el-button>
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
      deleteBox: false,
      wayDeployBox: false,
      wayDeployData: {
        position: "",
        faceDBInfo: "21",
        wayDirection: "",
        carmeraIP: "",
        monitor: "",
        openDoor: "",
        relayIP: "",
        relayWay: "",
        delay: "",
        time: "",
        overtimeWarning: "",
        overtime: "",
        discernMode: "",
        liminal: "",
        angle: "",
        pupilDistance: "XXX",
        speed: "",
        picSize: ""
      },
      monitorOption: [
        { value: "yes", label: "是" },
        { value: "no", label: "否" }
      ],
      wayDirectionOption: [
        { value: "jin", label: "进" },
        { value: "chu", label: "出" }
      ],
      openDoorOption: [
        { value: "yes", label: "是" },
        { value: "no", label: "否" }
      ],
      relayIPOption: [
        {
          value: "ip1",
          label: "129.312.323.321"
        }
      ],
      relayWayOption: [
        {
          value: "way1",
          label: "way1"
        }
      ],
      overtimeWarningOption: [
        {
          value: "open",
          label: "开启"
        },
        {
          value: "close",
          label: "关闭"
        }
      ],
      discernModeOption: [
        {
          value: "single",
          label: "单脸识别"
        },
        {
          value: "multi",
          label: "多脸识别"
        }
      ],
      liminalOption: [
        {
          value: "1",
          label: "10%"
        }
      ],
      angleOption: [
        {
          value: "10",
          label: "10°"
        }
      ],
      speedOption: [
        {
          value: "1",
          label: "1s"
        }
      ],
      picSizeOption: [
        {
          value: "s",
          label: "小"
        },
        {
          value: "m",
          label: "中"
        },
        {
          value: "l",
          label: "大"
        }
      ],
      positionOptions: [
        {
          value: "1",
          label: "万科1"
        },
        {
          value: "2",
          label: "万科2"
        },
        {
          value: "3",
          label: "万科3"
        },
        {
          value: "4",
          label: "万科4"
        },
        {
          value: "5",
          label: "万科5"
        }
      ],
      value: ""
    };
  },
  methods: {
    resetItem() {
      this.wayDeployBox = true;
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
    },
    wayDeploySubmit() {
      this.wayDeployBox = false;
      this.$message({
        message: "通道配置成功",
        type: "success"
      });
    },
    wayDeploy() {
      this.wayDeployBox = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.way-info {
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
          width: 40px;
        }
        .position {
          flex: 1;
          min-width: 128px;
        }
        .direction {
          width: 40px;
        }
        .carmera {
          flex: 1;
          min-width: 200px;
        }
        .relay {
          flex: 1;
          min-width: 100px;
        }
        .operate {
          width: 120px;
        }
      }
      .title {
        height: 40px;
        background-color: #fafafa;
        line-height: 40px;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
      }
      .body {
        .line {
          height: 60px;
          color: #666666;
          font-size: 12px;
          line-height: 60px;
          border-bottom: 1px solid #e8e8e8;
          &:hover {
            background-color: #e6f7ff;
          }
          .operate {
            cursor: pointer;
          }
          .relay {
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              line-height: 0;
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
.way-info {
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
  .way-deploy-dialog {
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
      .body {
        .title {
          width: 160px;
          text-align: right;
          margin: 10px 0;
          font-weight: 700;
        }
        .line {
          display: flex;
          align-item: center;
          height: 28px;
          margin-bottom: 10px;
          .key {
            font-size: 12px;
            width: 160px;
            color: #666666;
            text-align: right;
            line-height: 28px;
            margin-right: 10px;
          }
          .value {
            width: 200px;
            .el-form-item__content {
              margin-left: 0 !important;
            }
          }
        }
      }
    }
  }
}
</style>

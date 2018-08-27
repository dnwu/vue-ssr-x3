<template>
    <div class="face-info">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>人脸库信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <!-- 下载人脸库 box -->
                <div class="download-dialog">
                    <el-dialog
                        :visible.sync="downloadBox"
                        title="添加位置信息"
                        width="300px">
                        <div class="body">
                            <el-checkbox 
                                :indeterminate="isIndeterminate" 
                                v-model="checkAll" 
                                @change="handleCheckAllChange"
                            >全选</el-checkbox>
                            <!-- <div style="margin: 15px 0;"></div> -->
                            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button size="mini" @click="downloadBox = false">取消</el-button>
                            <el-button type='primary' size="mini" @click="addPositionSubmit">确定</el-button>
                        </span>
                    </el-dialog>
                    
                </div>
                <el-button @click="downloadFaceDB" size="mini" type="primary">下载人脸库</el-button>
            </div>
            <div class="table">
                <div class="title layout">
                    <div class="index">序号</div>
                    <div class="name">通行库名称</div>
                    <div class="type">库类型</div>
                    <div class="source">库来源</div>
                    <div class="position">位置信息</div>
                    <div class="count">人脸库统计</div>
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
                        <div class="name">万科小区1期通行库</div>
                        <div class="type">白名单</div>
                        <div class="source">后台下发</div>
                        <div class="position">
                            <p>万科小区北大门</p>
                            <p>万科小区1栋2单元</p>
                        </div>
                        <div class="count">
                            <p>人数:46人</p>
                            <p>照片:55张</p>
                        </div>
                        <div class="operate">
                            <el-button style="font-size:12px;color:#1890FF" type="text">查看</el-button>
                            <el-button @click="deleteItem" style="font-size:12px;color:#F5222D" type="text">本地删除</el-button>
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
const cityOptions = [
  "万科小区1期",
  "万科小区2期",
  "万科小区3期",
  "万科小区4期"
];
export default {
  data() {
    return {
      deleteBox: false,
      downloadBox: false,
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    downloadFaceDB() {
      this.downloadBox = true;
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
    addPositionSubmit() {
      if (this.checkedCities.length === 0) {
        this.$message({
          message: "请选择需要下载的人脸库",
          type: "error"
        });
        return;
      }
      this.downloadBox = false;
    },
    handleCheckAllChange(val) {
      // console.log(val);
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang='scss' scoped>
.red {
  color: #f5222d;
}
.blue {
  color: #1890ff;
}
.face-info {
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
        .name {
          flex: 1;
          min-width: 200px;
        }
        .type {
          width: 128px;
        }
        .source {
          width: 140px;
        }
        .position {
          flex: 1;
          min-width: 200px;
        }
        .count {
          width: 100px;
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
          .position,
          .count {
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
.face-info {
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
  .download-dialog {
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
        display: flex;
        flex-direction: column;
        // text-align:center;
        padding-left: 60px;
      }
      .el-checkbox-group {
        display: flex;
        flex-direction: column;
        label {
          margin-left: 0;
        }
      }
    }
  }
}
</style>

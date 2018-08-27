<template>
    <div class="position-info">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>位置信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <el-button @click="addPosition" size="mini" type="primary">添加位置信息</el-button>
            </div>
            <div class="table">
                <div class="title layout">
                    <div class="index">序号</div>
                    <div class="position">位置</div>
                    <div class="operate">操作</div>
                </div>
                <div class="body">
                    <!-- 删除位置信息弹窗 -->
                    <div class="delete-dialog">
                        <el-dialog
                            :visible.sync="deleteBox"
                            width="300px">
                            <div class="body">
                                <div class="icon el-icon-warning"></div>
                                <p>删除警告</p>
                                <p>你是否删除该位置信息?</p>
                                <p></p>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button plain type='primary' size="mini" @click="deleteBox = false">取消</el-button>
                                <el-button plain type='danger' size="mini" @click="deleteItemSubmit">删除</el-button>
                            </span>
                        </el-dialog>
                    </div>
                    <!-- 添加位置信息 -->
                    <div class="add-dialog">
                        <el-dialog
                            :visible.sync="addBox"
                            title="添加位置信息"
                            width="300px">
                            <div class="body">
                                <el-tree
                                    ref="addPositionTree"
                                    :data="data2"
                                    show-checkbox
                                    node-key="id"
                                    :default-expanded-keys="[]"
                                    :default-checked-keys="[]"
                                    @getCheckedNodes = getCheckedNodesArr
                                    :props="defaultProps">
                                </el-tree>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button size="mini" @click="addBox = false">取消</el-button>
                                <el-button type='primary' size="mini" @click="addPositionSubmit">确定</el-button>
                            </span>
                        </el-dialog>
                    </div>

                    <div class="line layout" v-for="(item,index) in new Array(10)" :key="index">
                        <div class="index">{{index+1}}</div>
                        <div class="position">万科小区1期北大门</div>
                        <div class="operate red" @click="deleteItem(item)">删除</div>
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
      addBox: false,
      data2: [
        {
          id: 1,
          label: "万科小区1期",
          children: [
            {
              id: 11,
              label: "万科小区1栋"
            },
            {
              id: 12,
              label: "万科小区2栋"
            }
          ]
        },
        {
          id: 2,
          label: "龙湖小区",
          children: [
            {
              id: 5,
              label: "龙湖小区1栋"
            },
            {
              id: 6,
              label: "龙湖小区2栋"
            }
          ]
        },
        {
          id: 3,
          label: "保利小区",
          children: [
            {
              id: 7,
              label: "保利小区1栋"
            },
            {
              id: 8,
              label: "保利小区2栋"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    addPosition() {
      this.addBox = true;
    },
    deleteItem(item) {
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
      var itemsArr = this.$refs.addPositionTree.getCheckedNodes();
      if (itemsArr.length === 0) {
        this.$message({
          message: "请选择位置信息",
          type: "error"
        });
        return;
      }
      this.$message({
        message: "添加位置信息成功",
        type: "success"
      });
      this.addBox = false
      console.log(this.$refs.addPositionTree.getCheckedNodes());
    },
    getCheckedNodesArr(arr) {
      console.log(arr);
    }
  }
};
</script>

<style lang='scss' scoped>
.red {
  color: #f5222d;
}
.position-info {
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
          width: 80px;
        }
        .position {
          flex: 1;
        }
        .operate {
          width: 80px;
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
.position-info {
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
  .add-dialog {
    .el-dialog__header {
      text-align: left;
      color: #333333;
      padding: 10px;
      background-color: #fafafa;
      .el-dialog__title {
        font-size: 14px;
      }
    }
  }
}
</style>

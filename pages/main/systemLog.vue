<template>
    <div class="system-log">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>系统日记</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="search">
                <div>
                    <div class="key">日期：</div>
                    <div class="value">
                        <el-date-picker
                            size="mini"
                            v-model="dataTime"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="key">人脸库: </div>
                    <div class="value">
                        <el-input size="mini" v-model="faceDB"></el-input>
                    </div>
                </div>
                <div>
                    <div class="key">通道信息:</div>
                    <div class="value">
                        <el-input size="mini" v-model="wayInfo"></el-input>
                    </div>
                </div>
                <div class="btn">
                    <el-button size="mini" plain icon="el-icon-search">搜索</el-button>
                </div>
            </div>
            <div class="title layout">
                <div class="operate-data">操作日期</div>
                <div class="face-db">人脸库</div>
                <div class="way-info">通道信息</div>
                <div class="record">行为记录</div>
                <div class="direction">方向</div>
                <div class="contrast">照片(抓拍照片vs比对库照片)</div>
            </div>
            <div class="body">
                <div class="layout list"  v-for="(item,index) in new Array(6)" :key="index">
                    <div class="operate-data">2017-09-21 12:32</div>
                    <div class="face-db">通行库</div>
                    <div class="way-info">万科小区围墙机</div>
                    <div class="record">开门</div>
                    <div class="direction">进</div>
                    <div class="contrast">
                        <div>
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1176987195,174235917&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div>80%</div>
                        <div>
                            <img src="http://pic.baike.soso.com/p/20140728/20140728113802-1762160793.jpg" alt="">
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
      wayInfo: "",
      faceDB: "",
      dataTime: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10)
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.system-log {
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
    padding-left: 20px;
    .search {
      margin-top: 10px;
      display: flex;
      > div {
        display: flex;
        height: 28px;
        line-height: 28px;
        color: #666666;
        .key {
          font-size: 12px;
          margin: 0 10px;
        }
        .value {
          .el-date-editor {
            width: 320px;
          }
        }
      }
      .btn {
        flex: 1;
        margin-left: 30px;
      }
    }
    .layout {
      display: flex;
      text-align: center;
      .operate-data {
        flex: 1;
        // width: 200px;
      }
      .face-db {
        flex: 1;
        // width: 100px;
      }
      .way-info {
        flex: 1;
        // width: 200px;
      }
      .record {
        flex: 1;
        // width: 80px;
      }
      .direction {
        flex: 1;
        // width: 40px;
      }
      .contrast {
        flex: 2;
      }
    }
    .title {
      margin-top: 20px;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      font-weight: 700;
      border-bottom: 1px solid #e8e8e8;
      background-color: #fafafa;
    }
    .body{
        flex: 1;
        .list {
          font-size: 14px;
          color: #666666;
          height: 70px;
          line-height: 70px;
          &:hover {
            background-color: #e6f7ff;
          }
          .contrast {
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              color: #666666;
              img {
                width: 50px;
                height: 60px;
                vertical-align: middle;
                margin: 0 10px;
              }
            }
          }
        }
    }
    .page {
      text-align: center;
      height: 34px;
      margin-bottom: 20px;
    }
  }
}
</style>
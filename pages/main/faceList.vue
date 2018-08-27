<template>
    <div class="face-list">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>查看人脸库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="search">
                <div class="select">
                    <el-select size="mini" v-model="ByKey" clearable placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input size="mini" v-model="ByValue" placeholder="请输入内容"></el-input>
                </div>
                <div class="btn">
                    <el-button size="mini" plain icon="el-icon-search">搜索</el-button>
                </div>
                <div class="searchByImg">
                    <el-button size="mini" @click="showImgBox" v-show="!showImgBoxControl" plain>以图搜图</el-button>
                    <el-upload
                        v-show="showImgBoxControl"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :show-file-list= 'false'>
                        <el-button size="mini" >本地上传</el-button>
                    </el-upload>
                    <el-input v-show="showImgBoxControl" size="mini" v-model="imgUrl" suffix-icon="el-icon-search"></el-input>
                    <el-button v-show="showImgBoxControl" @click="showImgBox" size="mini">取消</el-button>
                </div>
            </div>
            <div class="list" v-loading="loading">
                <div class="imgList-dialog">
                    <el-dialog
                        title="人脸照片"
                        :visible.sync="dialogVisible"
                        width="700px">
                        <div class="tit">人员ID:2343</div>
                        <div class="img-list">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814193&di=0f6005a3e869c068503e98b2aceafc95&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3eb16291f6898ba61ea8d345a7.jpg" alt="">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814193&di=0f6005a3e869c068503e98b2aceafc95&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3eb16291f6898ba61ea8d345a7.jpg" alt="">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814193&di=0f6005a3e869c068503e98b2aceafc95&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3eb16291f6898ba61ea8d345a7.jpg" alt="">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814193&di=0f6005a3e869c068503e98b2aceafc95&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3eb16291f6898ba61ea8d345a7.jpg" alt="">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814193&di=0f6005a3e869c068503e98b2aceafc95&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3eb16291f6898ba61ea8d345a7.jpg" alt="">
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false" size="mini" type="primary">关 闭</el-button>
                        </span>
                    </el-dialog>
                </div>
                <div class="title layout">
                    <div class="index" v-text="showImgBoxControl? '': '序号'"></div>
                    <div class="id">人员ID</div>
                    <div class="time" v-show="!showImgBoxControl">录入时间</div>
                    <div class="ID-card" v-show="!showImgBoxControl">身份证</div>
                    <div class="img" v-show="showImgBoxControl">人脸照片</div>
                </div>
                <div @click="detialInfo" class="body layout" v-for="(item,index) in new Array(8)" :key='index'>
                    <div class="index" v-text="showImgBoxControl? '': (index+ 1)"></div>
                    <div class="id">2321</div>
                    <div class="time" v-show="!showImgBoxControl">2018-10-10</div>
                    <div class="ID-card" v-show="!showImgBoxControl">4111109433929753845</div>
                    <div class="img" v-show="showImgBoxControl">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814194&di=a7453adc03dc20f31f020f2d8c73ce44&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F63d0f703918fa0ec82b7cafb2c9759ee3c6ddbd0.jpg" alt="">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814194&di=a7453adc03dc20f31f020f2d8c73ce44&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F63d0f703918fa0ec82b7cafb2c9759ee3c6ddbd0.jpg" alt="">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814194&di=a7453adc03dc20f31f020f2d8c73ce44&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F63d0f703918fa0ec82b7cafb2c9759ee3c6ddbd0.jpg" alt="">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533548814194&di=a7453adc03dc20f31f020f2d8c73ce44&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F63d0f703918fa0ec82b7cafb2c9759ee3c6ddbd0.jpg" alt="">
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
      dialogVisible: false,
      loading: true,
      showImgBoxControl: false,
      options: [
        {
          value: "1",
          label: "位置信息"
        },
        {
          value: "2",
          label: "人员ID"
        }
      ],
      ByKey: "",
      ByValue: "",
      imgUrl: ""
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    detialInfo() {
      this.dialogVisible = true;
    },
    showImgBox() {
      this.showImgBoxControl = !this.showImgBoxControl;
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {}
  }
};
</script>

<style lang='scss' scoped>
.face-list {
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
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    .search {
      display: flex;
      height: 28px;
      margin-top: 30px;
      .select {
        display: flex;
        width: 260px;
        margin-right: 20px;
        .el-select {
          width: 100px;
        }
        .el-input {
          flex: 1;
        }
      }
      .btn {
        margin-right: 20px;
      }
      .searchByImg {
        display: flex;
        .el-button {
          margin: 0 20px;
        }
      }
    }
    .list {
      flex: 1;
      margin-top: 20px;
      .layout {
        display: flex;
        text-align: center;
        .index {
          width: 40px;
        }
        .id {
          width: 100px;
        }
        .time {
          width: 300px;
        }
        .ID-card {
          flex: 1;
        }
        .img {
          flex: 1;
        }
      }
      .title {
        background-color: #fafafa;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 700;
      }
      .body {
        height: 70px;
        line-height: 70px;
        font-size: 12px;
        color: #666666;
        &:hover {
          background-color: #e6f7ff;
        }
        .img {
          display: flex;
          justify-content: center;
          img {
            width: 50px;
            height: 60px;
            margin: 2px 30px;
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
.face-list {
  .imgList-dialog {
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
      padding: 0;
      .tit {
        height: 50px;
        margin: 20px;
      }
      .img-list {
        display: flex;
        img {
          width: 100px;
          height: 160px;
          margin: 20px;
        }
      }
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
}
</style>

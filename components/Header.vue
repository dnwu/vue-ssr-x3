<template>
    <div class="header">
        <div class="left">人脸网管配置</div>
        <div class="right">
            <span>你好，dora</span>
            <span>退出</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      key: "value"
    };
  }
};
</script>

<style lang='scss' scoped>
.header {
    height: 100%;
    display: flex;
    align-items: center;
    .left{
        width: 300px;
        text-align: left;
        margin-left: 20px;
        color: #333333;
        font-size: 18px;
    }
    .right{
        flex: 1;
        text-align: right;
        margin-right: 20px;
        color: #333333;
        span:nth-of-type(2){
            margin-left: 20px;
            color: #F5222D;
            font-family:PingFangSC-Regular;
            font-size: 16px;
            cursor: pointer;
        }
    }
}
</style>
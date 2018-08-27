<template>
    <div class="storage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>存储</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div>
                <div class="key">照片网络存储地址:</div>
                <div class="value">
                    <el-input disabled size="mini" v-model="imgUrl"></el-input>
                </div>
            </div>
            <div>
                <div class="key">视频网络存储地址:</div>
                <div class="value">
                    <el-input disabled size="mini" v-model="videoUrl"></el-input>
                </div>
            </div>
            <div>
                <div class="key">日志网络存储地址:</div>
                <div class="value">
                    <el-input disabled size="mini" v-model="logUrl"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: "xxxxxxxxxxx",
                videoUrl: 'xxxxxxxxxxx',
                logUrl: 'xxxxxxxxxxx'
            }
        },
    }
</script>

<style lang='scss' scoped>
.storage{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .bread-crumb{
        padding-left: 20px;
        height: 40px;
        background-color: #FAFAFA;
        display: flex;
        align-items: center;
    }
    .contain{
        padding-top: 30px;
        >div{
            width: 400px;
            display: flex;
            margin:  20px auto;
            font-size: 14px;
            line-height: 28px;
        }
    }
}
</style>
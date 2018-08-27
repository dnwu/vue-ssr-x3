<template>
    <div class="nav">
        <div class="logo">
            TERMINUS
        </div>
        <el-menu 
            :default-active= "defaultActive" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            background-color="rgba(58,63,68,1)"
            text-color="#fff"
            active-text-color="#1890FF"
            :router= true
            >
            <el-submenu v-for="(item,index) in NavMenuData" :key="index" :index="index+''">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <el-menu-item v-for="(e,i) in item.children" :key="i" :index="e.path">{{e.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import NavMenuData from '~/data/navMenuData.js'
export default {
  data() {
    return {
      key: "value",
      NavMenuData: [],
      defaultActive: '/internet/activation'
    };
  },
  mounted() {
    //   console.log(this.$route.path);
      this.defaultActive = this.$route.path
      this.NavMenuData = NavMenuData
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  .logo {
    height: 88px;
    line-height: 88px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    font-family: sans-serif;
  }
  ul{
      border:0;
      i{
          color: #fff;
          margin-right: 4px;
      }
      .el-submenu__title:hover{
          background-color: red;
      }
  }
}
</style>

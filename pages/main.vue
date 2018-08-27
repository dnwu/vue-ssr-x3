<template>
    <div class="main">
        <aside>
            <NavLeft/>
        </aside>
        <div>
            <header>
                <MHeader/>
            </header>
            <main>
                <nuxt-child></nuxt-child>
            </main>
        </div>
    </div>
</template>

<script>
import NavLeft from "@/components/NavLeft";
import MHeader from "@/components/Header";
export default {
  components: { NavLeft, MHeader },
  data() {
    return {
      key: "value"
    };
  }
};
</script>

<style lang='scss' scoped>
.main {
  width: 100vw;
  height: 100vh;
  // display: flex;
  aside {
    position: fixed;
    left: 0;
    top: 0;
    width: 256px;
    min-width: 256px;
    height: 100%;
    background-color: #3a3f44;
    overflow: auto;
  }
  > div {
    // flex: 1;
    height: 100%;
    padding-left: 256px;
    display: flex;
    flex-direction: column;
    header {
      height: 64px;
      background-color: #fff;
    }
    main {
      flex: 1;
      background-color: #F0F2F5;
      padding: 20px;
    }
  }
}
</style>
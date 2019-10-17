<template>
  <div class="home">
    <el-container>
      <el-aside class="left" width="360px">
        <!-- logo -->
        <div class="logo">
          <h1>ELIJAH</h1>
        </div>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          background-color="#eee"
          text-color="#000"
          active-text-color="#1d75cc"
        >
          <el-menu-item class="xuan" index="2" @click="uplode">
            <i>
              <img src="../assets/icon/upimg.png" alt />
            </i>
            <span slot="title">文件上传</span>
          </el-menu-item>
          <el-menu-item class="xuan tew" index="/complet" @click="complet">
            <i>
              <img src="../assets/icon/yiwanc.png" alt />
            </i>
            <span slot="title">已完成</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    uplode () {
      console.log(1)
      this.$router.push({ name: 'hello' })
    },
    complet () {
      console.log(2)
      this.$router.push({ name: 'complet' })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  .left {
    height: 100vh;
    background-color: #eee;
    text-align: center;
    padding-top: 41px;

    .logo {
      padding-bottom: 46px;
      h1 {
        font-size: 72px;
        font-family: Helvetica;
        color: #1d75cc;
      }
    }
    .xuan{
      font-size: 20px;
      i{
        margin-left: -51px;
        margin-right: 44px;
      }
    }
    .tew{
      i{
        margin-left:-70px;
      }
    }
  }
}
</style>

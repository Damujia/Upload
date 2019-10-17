<template>
  <div class="demo">
    <div class="search">
      <el-autocomplete
        v-model="state4"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
        prefix-icon="el-icon-search"
        class="inpu"
      ></el-autocomplete>
    </div>
    <div class="shangcuan">
      <el-button type="primary" class="anniu">
        <img src="../assets/icon/上传.png" alt />
        上传文件
      </el-button>
    </div>
    <div class="chuan">
      <el-row>
        <el-col class="form_biao" :span="24">
          <div class="lico">
            <img src="../assets/icon/文件类型.png" alt="">
          </div>
          <div class="biaoshu">
            <span>文件名</span>
            <span>文件大小</span>
          </div>
          <div class="txt_wenjian">
            路径
          </div>
          <div class="progress">
            <span>剩余时间</span>
            <span>进度条</span>
          </div>
          <div class="tail"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scope>
.demo {
  border: 1px solid red;
  .search {
    .inpu {
      width: 620px;
      height: 50px;
    }
  }
  .shangcuan {
    .anniu {
      height: 50px;
      width: 240px;
      font-size: 18px;
      img {
        margin-right: 32px;
        vertical-align: middle;
      }
    }
  }
  .chuan {
    .form_biao{
      height: 88px;
      border: 1px solid black;
      display: flex;
      div{
        height: 100%;
        border: 1px solid rgb(96, 241, 11);
      }
      .lico{
        width: 40px;
      }
      .biaoshu{
        width: 214px;
      }
      .txt_wenjian{
        width: 248px;
      }
      .progress{
        width: 377px;
      }
      .tail{
        width: 102px;
      }
    }
  }
}
</style>

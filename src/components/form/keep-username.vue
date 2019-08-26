<template>
  <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item class="el-form-item1">
      <el-checkbox label="记住用户名" name="type"></el-checkbox>
      <el-button type="primary" @click="login">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'keep-username',
    methods: {
      login() {
        this.$router.push("/home")
      },
    }
  }
</script>

<style scoped>
  .el-form-item1 /deep/ .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-form-item1 /deep/ .el-form-item__content .el-checkbox {
    float: left;
  }
  .el-form-item1 /deep/ .el-form-item__content .el-button {
    float: right;
    width: 45%;
    background: #4D69F6;
  }
  @media screen and (max-height: 768px){
    .el-form-item1 {
      margin-bottom: 10px;
    }
    .el-form-item1 /deep/ .el-form-item__content .el-checkbox,
    .el-form-item1 /deep/ .el-form-item__content .el-button {
      height: 30px;
    }
    .el-form-item1 /deep/ .el-form-item__content .el-button {
      line-height: 4px;
    }
  }
</style>

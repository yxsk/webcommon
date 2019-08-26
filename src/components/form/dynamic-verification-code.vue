<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item  prop="verification" class="el-form-item1">
      <el-input v-model="ruleForm.verification" placeholder="请输入动态验证码"></el-input>
      <a href="" class="dynamic">获取动态验证码</a>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'dynamic-verification-code',
    data() {
      return {
        ruleForm: {
          verification: ''
        },
        rules: {
          verification: [
            { required: true, message: '请输入动态验证码', trigger: 'blur' },
          ],
        }
      }
    }
  }
</script>

<style scoped>
  .el-form-item1 /deep/ .el-form-item__content {
    margin-left: 0 !important;
    position: relative;
  }
  .dynamic {
    color: #F29652;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
</style>

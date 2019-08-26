<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item  prop="name" class="el-form-item1">
      <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
      <img class="img" src="../../assets/imgs/username.png" alt="用户名图标">
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'user-name',
    data() {
      return {
        ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入您的用户名', trigger: 'blur' },
            { min: 6, max: 20, message: '长度最少六个字符', trigger: 'blur' }
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
  .img {
    width: 16px;
    height: 17px;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
</style>

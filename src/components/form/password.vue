<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item prop="pass" class="el-form-item1">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码" @blur="sendInfo"></el-input>
      <img class="img" src="../../assets/imgs/password.png" alt="密码图标">
    </el-form-item>
  </el-form>
</template>

<script>
  import eventVue from '../../assets/js/public/eventVue'
  export default {
    name: 'password',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        else if(value.length < 6) {
          callback(new Error('长度最少六个字符'));
        }
        else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass:'',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      // 发送数据给兄弟组件keep-username
      sendInfo() {
        eventVue.$emit('myPass',this.ruleForm.pass)
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
    width: 15px;
    height: 17px;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
</style>

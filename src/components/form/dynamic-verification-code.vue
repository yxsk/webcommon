<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item  prop="verification" class="el-form-item1">
      <el-input v-model="ruleForm.verification" placeholder="请输入动态验证码" @blur="sendInfo"></el-input>
      <a href="javascript:void(0);" :number="number" class="dynamic" target="" @click="getValidation">获取动态验证码</a>
    </el-form-item>
  </el-form>
</template>

<script>
  import eventVue from '../../assets/js/public/eventVue'
  export default {
    name: 'dynamic-verification-code',
    data() {
      var validateKey= (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入动态验证码'));
        }
        else if(this.ruleForm.verification !== this.number) {
          callback(new Error('验证码输入错误'));
        }
        else {
          callback();
        }
      };
      return {
        number:'',
        isTrue:false,
        ruleForm: {
          verification: ''
        },
        rules: {
          verification: [
            { validator: validateKey, trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      // 生成一个随机数
      getData() {
        return Math.floor(Math.random()*10);
      },

      // 随机生成一个四位动态验证码
      getValidation() {
        this.number = "";
        for(let i = 0; i < 6; i++) {
          this.number += this.getData();
        }
        alert(`您的动态验证码为${this.number}`)
      },
      // 发送数据给兄弟组件keep-username
      sendInfo() {
        if(this.ruleForm.verification == this.number) {
          this.isTrue = true;
        }else {
          this.isTrue = false;
        }
        eventVue.$emit('myDynamicVerification',this.isTrue)
      }
    },
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

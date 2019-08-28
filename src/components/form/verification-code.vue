<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item  prop="verification" class="el-form-item1">
      <el-input v-model="ruleForm.verification" placeholder="请输入验证码" @blur="sendInfo"></el-input>
      <div class="img" @click="refreshCode">
        <CanvasVerfication :identifyCode="identifyCode"></CanvasVerfication>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import eventVue from '../../assets/js/public/eventVue'
  import CanvasVerfication from './canvas-verification'
  export default {
    name: 'verification-code',
    data() {
      var validateKey= (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }
        else if(this.ruleForm.verification !== this.identifyCode) {
          callback(new Error('验证码输入错误'));
        }
        else {
          callback();
        }
      };
      return {
        ruleForm: {
          verification: ''
        },
        rules: {
          verification: [
            { validator: validateKey, trigger: 'blur' },
          ],
        },
        identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz',
        identifyCode:'',
        heightScr:'',
        isTrue:false,
      }
    },
    methods: {
      // 发送数据给兄弟组件keep-username
      sendInfo() {
        if(this.ruleForm.verification == this.identifyCode) {
          this.isTrue = true;
        }else {
          this.isTrue = false;
        }
        eventVue.$emit('myVerification',this.isTrue)
      },
      // 随机生成数值
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 切换验证码
      refreshCode() {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      // 生成四位随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ]
        }
        console.log(this.identifyCode)
      }
    },
    components: {
      CanvasVerfication
    },
    created() {
      this.refreshCode()
    }
  }
</script>
<style scoped>
  .el-form-item1 /deep/ .el-form-item__content {
    margin-left: 0 !important;
    position: relative;
  }
  .img {
    width: 71px;
    height: 33px;
    position: absolute;
    background: #EFF2FF;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  @media screen and (max-height: 768px){
    .img {
      height: 26px;
    }
  }
</style>

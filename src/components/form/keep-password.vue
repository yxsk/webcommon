<template>
  <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item class="el-form-item1">
      <el-checkbox label="记住密码" name="type" id="el-checkbox" @change="keepUser"></el-checkbox>
      <el-button type="primary" @click="loginInfo">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import eventVue from '../../assets/js/public/eventVue'
  export default {
    name: 'keep-password',
    data() {
      return {
        acceptUsername: '',
        acceptPass:'',
        acceptValication:'',
        acceptDynamivValication:''
      }
    },
    methods: {
      // 将用户名添加到localStorage中
      keepUser() {
        localStorage.removeItem('password');
        localStorage.setItem('password', this.acceptPass)
      },
      // 登录
      loginInfo() {
        let information = this.$store.state.loginInfo;
        for(let i = 0; i < information.length; i ++) {
          if(this.acceptUsername == information[i].userName && this.acceptPass == information[i].password && this.acceptValication && this.acceptDynamivValication) {
            if(information[i].userId == 1) {
              alert("登录成功");
              this.$router.push("/home");
            }else if(information[i].userId == 0) {
              alert("登录成功");
              this.$router.push("/sys-admin/enterprise-admin");
            }else {
              alert("登录成功");
              this.$router.push("/");
            }
            localStorage.removeItem('userId');
            localStorage.setItem('userId', information[i].userId);
            return
          }
        }
        alert("登录失败")
      },
    },
    mounted() {
      eventVue.$on("myUserName",(message) => {
        this.acceptUsername = message;
        console.log("用户名:"+this.acceptUsername)
      });
      eventVue.$on("myPass",(message) => {
        this.acceptPass = message;
        console.log("密码:"+this.acceptPass)
      });
      eventVue.$on("myVerification",(message) => {
        this.acceptValication= message;
        console.log("验证码:"+this.acceptValication)
      });
      eventVue.$on("myDynamicVerification",(message) => {
        this.acceptDynamivValication= message;
        console.log("动态验证码:"+this.acceptDynamivValication)
      });
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

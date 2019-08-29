<template>
  <div class="login-div">
    <div class="content-div">
      <div class="illustration"></div>
      <div class="form-val">
        <form action="" class="form-child">
          <h2>图安世纪后台管理系统</h2>
          <UserName></UserName>
          <Password></Password>
          <VerficationCode></VerficationCode>
          <DynamicVerficationCode></DynamicVerficationCode>
          <KeepUsername></KeepUsername>
          <p>找回密码</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import UserName from '../components/form/user-name'
  import Password from '../components/form/password'
  import VerficationCode from '../components/form/verification-code'
  import DynamicVerficationCode from '../components/form/dynamic-verification-code'
  import KeepUsername from '../components/form/keep-password'
  export default {
    name: 'login',
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      UserName,
      Password,
      VerficationCode,
      DynamicVerficationCode,
      KeepUsername,
    }
  }
</script>

<style scoped>
  .login-div {
    width: 100%;
    height: 100%;
    background: url("../assets/imgs/background.png") no-repeat scroll 0 0 / cover ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-div {
    width: 65%;
    height: 56%;
    background: #fff;
    border:2px solid #626FCC;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px #5D60DC;
    display: flex;
    justify-content: space-between;
  }
  .illustration,.form-val {
    width: 50%;
    height: 100%;
  }
  .illustration {
    background: url("../assets/imgs/Illustration.png") no-repeat center center / 70% 80%;
  }
  .form-val {
    padding-top: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .form-child {
    width: 60%;
    height: auto;
    margin-bottom: 15px;
  }
  h2 {
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 15px;
    text-align: center;
  }
  p {
    float: right;
    font-size: 12px;
    color: #ccc;
    margin-top: -15px;
  }
  @media screen and (max-height: 768px) {
    .content-div {
      height: 65%;
    }
    .form-child {
      width: 70%;
    }
    p {
      margin-top: -5px;
    }
    h2 {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
</style>

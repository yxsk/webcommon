<template>
  <div>
    <el-button @click="login" type="primary">登录</el-button>
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return {

    }
  },
  methods:{
    login(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
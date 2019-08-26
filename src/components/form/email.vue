<template>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <el-form-item
      prop="email"
      label="邮箱"
      :rules="rules"
    >
      <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'email',
    data() {
      return {
        dynamicValidateForm: {
          email: '',
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        }
      };
    },
  }
</script>

<style scoped>

</style>

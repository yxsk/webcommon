<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="备注" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'remarks',
    data() {
      return {
        ruleForm: {
          desc:''
        },
        rules: {
          desc: [
            { required: true, message: '请填写备注信息', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

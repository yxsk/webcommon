<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="性别" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'single-election',
    data() {
      return {
        ruleForm: {
          resource: ''
        },
        rules: {
          resource: [
            { required: true, message: '请选择您的性别', trigger: 'change' }
          ],
        }
      }
    }
  }
</script>

<style scoped>

</style>

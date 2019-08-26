<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="下拉框" prop="region">
      <el-select v-model="ruleForm.option" placeholder="请选择下列选项">
        <el-option label="选项一" value="shanghai"></el-option>
        <el-option label="选项二" value="beijing"></el-option>
        <el-option label="选项三" value="beijing"></el-option>
        <el-option label="选项四" value="beijing"></el-option>
        <el-option label="选项五" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'droupdown-box',
    data() {
      return {
        ruleForm: {
          option:[],
        },
        rules: {
          option: [
            { required: true, message: '请选择一项', trigger:'change' }
          ]
        }
      }
    },

  }

</script>

<style scoped>

</style>

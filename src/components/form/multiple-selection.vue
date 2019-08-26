<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="个人爱好" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="跳舞" name="type"></el-checkbox>
        <el-checkbox label="阅读" name="type"></el-checkbox>
        <el-checkbox label="音乐" name="type"></el-checkbox>
        <el-checkbox label="美术" name="type"></el-checkbox>
        <el-checkbox label="唱歌" name="type"></el-checkbox>
        <el-checkbox label="旅游" name="type"></el-checkbox>
        <el-checkbox label="敲代码" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'multiple-selection',
    data() {
      return {
        ruleForm: {
          type:[]
        },
        rules: {
          type: [
            { type: 'array', required: true, message: '请至少选择一项爱好', trigger: 'change' }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>

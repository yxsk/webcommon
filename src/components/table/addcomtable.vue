<template>
  <div class="comtable">
    <el-form :model="form">
      <el-form-item
        label="登录名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.login"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="真实姓名"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="人员编码"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.code"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="状态"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.status"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="创建时间"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.date"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <!-- <div slot="footer" class="dialog-footer"> -->
      <el-form-item class="footer">
        <el-button
          type="primary"
          @click="cancel"
        >取 消</el-button>
        <el-button
          type="primary"
          @click="save"
        >确 定</el-button>
      </el-form-item>
      <!-- </div>   -->
    </el-form>

  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        index: "",
        login: " ",
        date: " ",
        name: " ",
        code: " ",
        status:'',
      },
      formLabelWidth: "120px",
      dialogFormVisible: false
    };
  },
  methods: {
    save() {
      console.log(this.form);
      this.$emit("saved", this.form);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.comtable {
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
}
.comtable .el-form {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.comtable .el-input,
.el-select {
  width: 200px;
}
.footer {
  position: absolute;
  right: 10%;
  bottom: -5%;
}
</style>
<template>
  <div class="max-box">
    <!-- 搜索框  start -->
    <div class="search">
      <div class="search-center">
        <el-form
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item>
            <el-input
              v-model="search"
              placeholder="请输入搜索内容"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="reset"
            >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 搜索框  end -->
    <!-- 按钮群组  start -->
    <div class="btn-group">
      <el-button
        type="primary"
        @click='add'
      >新增</el-button>
    </div>
    <!-- 按钮群组  end -->
    <!-- 表格  start -->
    <div class="table">
      <el-table
        :data="tableData"
        height="500"
        border
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="index"
          label="序号"
          type="index"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="login"
          label="登录名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="真实姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="code"
          label="人员编码"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格   end -->
    </div>
    <!-- 新增页面 -->
    <el-dialog
      :title="dialogForm.title"
      :visible.sync="addFormVisible"
      class="dialog-width"
      width="40%"
    >
      <add-table
        @cancel="cancel()"
        @saved="saved"
      ></add-table>
    </el-dialog>
  </div>
</template>

<script>
import addTable from "./addcomtable";
export default {
  components: {
    addTable
  },
  data() {
    return {
      dialogForm: {
        title: "表单新增"
      },
      addFormVisible: false,
      tableData: [
        {
          index: "0",
          login: "小虎",
          date: "2016-05-03",
          name: "王小虎",
          code: "111",
          status: "正常"
        },
        {
          index: "2",
          login: "小米",
          date: "2016-05-03",
          name: "小小米",
          code: "112",
          status: "正常"
        },
        {
          index: "3",
          login: "小鸭",
          date: "2016-05-03",
          name: "小小鸭",
          code: "113",
          status: "正常"
        },
        {
          index: "4",
          login: "小草",
          date: "2016-05-03",
          name: "小小草",
          code: "114",
          status: "正常"
        },
        {
          index: "5",
          login: "小花",
          date: "2016-05-03",
          name: "王花",
          code: "115",
          status: "正常"
        },
        {
          index: "6",
          login: "小虎",
          date: "2016-05-03",
          name: "李小虎",
          code: "116",
          status: "正常"
        },
        {
          index: "7",
          login: "小牛",
          date: "2016-05-03",
          name: "牛牛牛",
          code: "117",
          status: "正常"
        },
        {
          index: "8",
          login: "小马",
          date: "2016-05-03",
          name: "马马",
          code: "118",
          status: "正常"
        },
        {
          index: "9",
          login: "小狗",
          date: "2016-05-03",
          name: "土狗",
          code: "119",
          status: "正常"
        },
        {
          index: "10",
          login: "小鸡",
          date: "2016-05-03",
          name: "鸡贼",
          code: "120",
          status: "正常"
        },
        {
          index: "11",
          login: "二胡",
          date: "2016-05-03",
          name: "二胡",
          code: "121",
          status: "离职"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit: function() {
      var search = this.search;
      if (search) {
        this.tableData = this.tableData.filter(function(product) {
          // console.log(product);
          return Object.keys(product).some(function(key) {
            // console.log(key);
            return (
              String(product[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
    },
    reset() {
      this.search = "";
      // this.tableData=this.tableData;
      // console.log(this.tableData)
    },
    add() {
      this.addFormVisible = true;
    },
    cancel(){
 this.addFormVisible = false;
    },
    saved(e) {
      this.addFormVisible = false;
      console.log('v', e)
      this.tableData.push(e)
    }
  }
};
</script>
<style scoped>
.max-box {
  position: relative;
  height: 80%;
  width: 90%;
  margin: 0 auto;
}
.search {
  margin-top: 1%;
  border: 1px solid #ddd;
}
.search-center {
  margin-left: 40%;
  margin-top: 1%;
}
.btn-group {
  margin-top: 1%;
}
.table {
  margin-top: 1%;
}
</style>
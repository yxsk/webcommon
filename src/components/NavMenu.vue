<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="activeItem"
          class="el-menu-vertical-demo" 
          @select="selectHandle"
          popper-append-to-body
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
            <el-menu-item index="example0">选项1</el-menu-item>
            <el-menu-item index="example1">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="example2" :route="{ path: '/home/example2'}">
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'NavMenu',
  data(){
    return {
      activeItem:'example2'
    }
  },
  methods: {
    selectHandle(index,indexPath){
      console.log(index)
      console.log(indexPath)
      this.$store.commit('selectTab',index) // 当使用对象作为提交方式时，整个对象都会被当做载荷
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
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
              <span>父导航</span>
            </template>
            <el-menu-item index="example0">example0</el-menu-item>
            <el-menu-item index="example1">example1</el-menu-item>
          </el-submenu>
          <el-menu-item index="example2">
            <span slot="title">example2</span>
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

    }
  },
  computed:{
    activeItem(){
      return this.$store.state.navActiveItem;
    }
  },
  methods: {
    //选中nav
    selectHandle(index,indexPath){
      /*
        1.获取到tabNameList
        2.如果新增name在tabNameList中则选中
        3.如果不在则push并选中
      */
      this.$store.commit('navClick',index)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

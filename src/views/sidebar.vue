<template>
  <div>
    <NavMenu :select = 'selectHandle'></NavMenu>
  </div>
</template>
<script>
import NavMenu from '../components/menuSider'
export default {
  name:'sidebar',
  components:{
    NavMenu
  },
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
		// console.log(index,indexPath)
      /* 
        1.获取到tabNameList
        2.如果新增name在tabNameList中则选中
        3.如果不在则push并选中
      */
     console.log("------")
     console.log(index)
     console.log(indexPath)
     console.log("------")
      this.$store.commit('navClick',index)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
<template>
  <div>
    <el-tabs 
      v-model="editableTabsValue" 
      type="card" 
      @tab-click="handleClick" 
      editable 
      @edit="handleTabsEdit" 
    >
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in tabList"
        :label="item.title"
        :name="item.name"
      >
      <component v-bind:is="item.content"></component>
      </el-tab-pane>
      <!-- <router-view /> -->
    </el-tabs>
  </div>
</template>
<script>
import example0 from './example0'
import example1 from './example1'
import example2 from './example2'

export default {
  name:'tabs',
  components:{
    example0,
    example1,
    example2,
  },
  data(){
    return {
      editableTabs: [{
        title: 'Tab 1',
        name: 'q',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: 'w',
        content: 'Tab 2 content'
      }],
      tabIndex: '1'
    }
  },
  computed:{
    editableTabsValue(){
      return this.$store.state.tabSelect
    },
    tabList(){
      return this.$store.state.tabList
    },
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(tab.name);
      this.$store.commit('changeNav',tab.name)
    },
    handleTabsEdit(targetName, action) {
      console.log(targetName)
      console.log(action)
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
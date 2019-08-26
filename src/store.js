import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'',
    password:'',
    userId:'',
    baseUrl:'',
    navActiveItem:'',//选中的nav
    tabList:[],//tab列表
    tabNameList:[],//tab name列表
    tabSelect:'',//选中的tab
  },
  getters : {

  },
  mutations: {
    /**
     * 点击nav
     * 1.tab不存在，增加tab并选中
     * 2.tab存在，只选中tab
     * */
    navClick(state,tabName){
      // 1.获取到tabNameList
      state.tabNameList=[];
      for(var i=0;i<state.tabList.length;i++){
        if(state.tabList[i].name){
          state.tabNameList.push(state.tabList[i].name)
        }
      }
      if(state.tabNameList.length){
        if(state.tabNameList.indexOf(tabName)>=0){
          state.tabSelect=tabName;
        }else{
          const obj={};
          obj.title=tabName;
          obj.name=tabName;
          obj.content=tabName;
          state.tabList.push(obj);
          state.tabSelect=tabName;
        }
      }else{
        const obj={};
        obj.title=tabName;
        obj.name=tabName;
        obj.content=tabName;
        state.tabList.push(obj);
        state.tabSelect=tabName;
      }
    },
    //改变选中的nav
    tabClick(state,itemName){
      state.navActiveItem=itemName;
    },
    /**添加tab
     * tabItem:{
     *  title: 'example0',
     *  name: 'example0',
     *  content: 'example0'
     * }
     * 
     * */
    tabListAdd(state,tabItem){
      state.tabList.push(tabItem);
      state.tabSelect=tabItem.name;
    },
    /* 删除tab */
    tabListRemove(state,targetName){
      let tabs = state.tabList;
      let activeName = state.tabSelect;
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
      state.tabSelect = activeName;
      state.tabList = tabs.filter(tab => tab.name !== targetName);
    }
  },
  actions: {

  }
})

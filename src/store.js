import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'',
    password:'',
    userId:'',
    baseUrl:'',
    navActiveItem:'example2',
    menu:[
      {
        title:'导航一',
        icon:'el-icon-location',
        tab:'template1',
        disabled:'false',//默认false
      }
    ],
    tabList:[],
    tabSelect:'example0',
  },
  getters:{
    tabNameList:(state)=>{
      let list=[];
      for(var i=0;i<state.tabList.length;i++){
        if(state.tabList[i].name){
          list.push(state.tabList[i].name)
        }
      }
      return list;
    }
  },
  mutations: {
    /**
     * 点击nav
     * 1.tab不存在，增加tab并选中
     * 2.tab存在，只选中tab
     * */
    navClick(state,tabName){
      console.log(state.tabList)
      if(state.getters.tabNameList.length){
        // for(var i=0;i<state.getters.tabNameList.length;i++){

        // }
        if(state.getters.tabNameList.indexOf(tabName)){
          //存在
          state.tabSelect=tabName;
        }else{
          //不存在
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
      //state.tabSelect=tabName;
      //let tabs = state.tabList;
      //let activeName = state.tabSelect;
      /**if(tabs.length>0){
      tabs.forEach((tab, index) => {
        console.log(tab)
        console.log(tabName)
        if (tab.name === tabName) {
          consle.log('存在')
          //1.存在
          state.tabSelect=tabName;
        }else{
          console.log('不存在')
          //2.不存在
          const obj={};
          obj.title=tabName;
          obj.name=tabName;
          obj.content=tabName;
          state.tabList.push(obj);
          state.tabSelect=tabName;
        }
      });}else{
        const obj={};
        obj.title=tabName;
        obj.name=tabName;
        obj.content=tabName;
        state.tabList.push(obj);
        state.tabSelect=tabName;
      }**/
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

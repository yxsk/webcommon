import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'',
    password:'',
    userId:'',
    baseUrl:'',
    menu:[
      {
        title:'导航一',
        icon:'el-icon-location',
        tab:'template1',
        disabled:'false',//默认false
      }
    ],
    tabList:[
      {
        title: 'example0',
        name: 'example0',
        content: 'example0'
      }, {
        title: 'example1',
        name: 'example1',
        content: 'example1'
      },{
        title: 'example2',
        name: 'example2',
        content: 'example2'
      }
    ],
    tabSelect:'example0',
  },
  mutations: {
    selectTab(state,tabName){
      state.tabSelect=tabName;
    }
  },
  actions: {

  }
})

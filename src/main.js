import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Col,
  Menu,
  MenuItem,
  MenuItemGroup,
  Row,
  Submenu,
  Select,
  Tabs,
  TabPane,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(Select)
Vue.use(Tabs);
Vue.use(TabPane);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

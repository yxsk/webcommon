import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes= [
  {
    path:'/',
    name:'login',
    component:() => import('./views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/page.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router;

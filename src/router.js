import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes= [
  {
    path:'/',
    name:'login',
    component:() => import('./components/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('./views/sidebar.vue'),
      home: () => import('./views/home.vue'),
    },
    children: [
      {
        path:'example0',
        component:()=>import('./components/example0.vue')
      },
      {
        path:'example1',
        component:()=>import('./components/example1.vue')
      },
      {
        path:'example2',
        component:()=>import('./components/example2.vue')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.path)
  next();
})

export default router;

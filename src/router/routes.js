import sidebar from '@/views/sidebar.vue';
export default [
  {
    path:'/',
    name:'login',
    component:() => import('@/views/login')
  },{
    path: '/home',
    name: 'home',
    components: {
      default:sidebar,
      home: () => import('@/components/page/home.vue'),
    }
  },
  {
    path: '/sys-admin/enterprise-admin',
    name: 'sys-admin',
    components: {
		default:sidebar,
		home: () => import('@/views/sysAdmin/enterpriseAdmin'),
	}
  }
]

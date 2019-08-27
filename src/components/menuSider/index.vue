<template>
	<div>
		<el-menu class="el-menu-vertical"
		@open="open"
		@close="close"
		@select="select"
		:background-color="bgC"
		:text-color = "textC"
		:active-text-color = "activeTextC"
		:default-active="$route.path"
		:collapse="collapse"
		:unique-opened="uniqueOpen"
		:router="router">
			<el-radio-group v-model="collapse" style="margin-bottom: 20px;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
			<submenu :list="listNav" path='/'></submenu>
		</el-menu>
	</div>
</template>

<script>
	import submenu from './submenu'
	let theModuleName = 'components/munuSider/index.vue'
	export default {
		components: {
			submenu
		},
		props:{
			bgC:{
				type:String,
				default: '#fff'
			},
			textC:String,
			bgC:String,
			activeTextC:String,
			uniqueOpen:Boolean,
			router:{
				type:Boolean,
				default: false
			},
			open:{
				type:Function,
				default: function(index, indexPath){
					console.log(theModuleName,index, indexPath)
				}
			},
			close:{
				type:Function,
				default: function(index, indexPath){
					console.log(theModuleName,index, indexPath)
				}
			},
			select:{
				type:Function,
				default: function(index, indexPath){
					console.log(theModuleName,index, indexPath)
				}
			}
		},
		data() {
			return {
				collapse: false,
				listNav: [{
					title: '系统管理',
					path:'sys-admin',
					children: [{
						title: '企业管理',
						path:'enterprise-admin'
					},{
						title: '部门管理',
						path:'department-admin'
					},{
						title: '用户管理',
						path:'user-admin'
					},{
						title: '岗位管理',
						path:'position-admin'
					},{
						title: '班组管理',
						path:'company'
					},{
						title: '模块管理',
						path:'company'
					},{
						title: '字典管理',
						path:'company'
					},{
						title: '角色管理',
						path:'company'
					},{
						title: '消息提醒',
						path:'company'
					},{
						title: '高危作业字典',
						path:'company'
					},{
						title: '安全气象图',
						path:'company'
					}]
				}]
			}
		},
		computed:{
		  activeItem(){
		    return this.$store.state.navActiveItem;
		  }
		},
		methods: {
		},
		mounted(){
			// console.log(this.$route,this.listNav)
		}
	}
</script>

<style>
	.el-menu-vertical:not(.el-menu--collapse) {
		/* width: 300px; */
		width: 100%;
		min-height: 400px;
		height: 100%;
	}
</style>

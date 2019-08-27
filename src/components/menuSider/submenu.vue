<template>
	<div>
		<template v-for="(i,idx) in list">
			<el-submenu v-if="i.children" :index = "resolvePath(i.path)">
				<template slot="title">{{i.title}}</template>
				<submenu :list='i.children' :path='resolvePath(i.path)'></submenu>
			</el-submenu>
			<el-menu-item v-else :index = "resolvePath(i.path)">{{i.title}}</el-menu-item>
		</template>
	</div>
</template>

<script>
	import path from 'path'
	export default {
		name:"submenu",
		props:{
			list:Array,
			path:String
		},
		data () {
		  return {
				
			}
		},
		methods: {
			resolvePath(routePath) {
				return path.resolve(this.path, routePath)
			}
		}
	}
</script>

<style>
</style>

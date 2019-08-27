<template>
	<div id="app">
		<router-view class="sidebar"/>
		
		<!-- 临时加上，测试tabs效果 -->
		<router-view class="home" name="home"/>
		<!-- 临时加上，测试tabs效果 -->
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	html,
	body {
		height: 100%;
	}

	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	img {
		display: block;
	}

	#app {
		width: 100%;
		height: 100%;
	}

// 	.sidebar {
// 		max-width: 25%;
// 		min-width: 5%;
// 	}
// 
// 	.home {
// 		flex-grow: 1;
// 		min-width: 75%;
// 	}
</style>

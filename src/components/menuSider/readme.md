## APP.vue
### 修改侧栏菜单布局宽度
```html
	<el-col :xs="14" :sm="7" :md="5" :lg="5" :xl="4">
				<menuSider></menuSider>
	</el-col>
```
## components\menuSider
 --index.vue
 --submenu.vue
### props参数说明
	
	参数名字	|	说明					|	类型		|	默认值/举例	|
	---		|	---					|	---		|		---		|
	open	|打开某级别菜单触发方法	|Function	|
	close	|关闭某级别菜单触发方法	|Function	|
	select	|选择根级菜单触发方法		|Function	|
	bgC 	|背景色（仅支持 hex 格式）string	—	#303133
	textC 	|菜单的文字颜色（仅支持 hex 格式）	string	—	#303133
	activeTextC|	当前激活菜单的文字颜色（仅支持 hex 格式）	string	—	#409EFF
	unique-opened	是否只保持一个子菜单的展开	boolean	—	false
### data参数说明
	参数名字	|	说明		|	类型	|	默认值/举例	|
	---		|	---		|	---	|		---		|
	collapse|菜单收缩	|boolean|
	listNav	|菜单数组	|Array	|
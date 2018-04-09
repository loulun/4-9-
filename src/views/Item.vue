<template>
	<div style="border:1px solid black">
		<h1>楼盘名称：{{content.title}}</h1>
		<p>楼盘价格：{{content.jiag}}</p>
	</div>
</template>
<script>
	export default {
		name: "Item",
		props: {
			content: Object
		}
	}
</script>
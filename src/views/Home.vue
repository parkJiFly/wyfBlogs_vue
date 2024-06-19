<!--
 * @Author: WenYaFei 1506825038@qq.com
 * @Date: 2024-06-17 20:15:24
 * @LastEditors: WenYaFei 1506825038@qq.com
 * @LastEditTime: 2024-06-19 17:42:18
 * @FilePath: \wyfBlogs_vue\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    这是home页
    <el-button :icon="Search" circle />
</template>
<script setup>
	import { getBanner } from '@/utils/api/banner'
	// 使用api
	// 定义一个变量接收
	let bannerList = ref([])
	onBeforeMount(()=>{
		getBanner().then(res=>{
			bannerList.value = res.data //  这里是接口返回值
			console.log(res)
		})
	})
</script>

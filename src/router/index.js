/*
 * @Author: WenYaFei 1506825038@qq.com
 * @Date: 2024-06-17 20:15:24
 * @LastEditors: WenYaFei 1506825038@qq.com
 * @LastEditTime: 2024-06-19 17:42:37
 * @FilePath: \wyfBlogs_vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",	
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () =>import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

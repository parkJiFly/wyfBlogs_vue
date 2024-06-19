/*
 * @Author: WenYaFei 1506825038@qq.com
 * @Date: 2024-06-17 20:15:24
 * @LastEditors: WenYaFei 1506825038@qq.com
 * @LastEditTime: 2024-06-19 17:45:08
 * @FilePath: \wyfBlogs_vue\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"
//引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
	plugins: [
		vue(),
		//配置插件
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue', 'vue-router']
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		// 配置路径别名
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	// 设置api代理
	server: {
		proxy: {
			'/api': 'http://127.0.0.1:8087' // 替换成你的域名
		}
	}
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
// import tsx from './plugin/index' // 自定义插件
export default defineConfig({
  plugins: [vue(), vueJsx()]
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    
    
  },
  server: {
    proxy: {
      '/proxy_url': {
        // target: 'http://127.0.0.1:4523/m1/5034143-4694392-default',//apiFOx
        target: 'http://127.0.0.1:8888',
        // secure: false, // 请求是否为https
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/proxy_url/,'') //api替换为'',
      },
    },
   
    host: '0.0.0.0'
   
    
  },

  
})

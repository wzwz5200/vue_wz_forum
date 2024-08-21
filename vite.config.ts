import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    
    
  },
  server: {
    // proxy: {
    //   '/proxy_url': {
    //     target: 'http://127.0.0.1:8888',
    //     // secure: false, // 请求是否为https
    //     changeOrigin: true,
    //     rewrite:(path)=>path.replace(/^\/proxy_url/,'') //api替换为'',
    //   },
    // },
   
    host: '0.0.0.0'
   
    
  },

  
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '@/assets/css/global.css',  // 引入暗黑模式 CSS
    
  ],
  plugins: [
    '~/plugins/element-plus-icons.js', // 引入图标插件
  ],
  middleware: {
    override: true
  },
  components: {
    dirs: ['~/components']
  }
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Game from '@/views/thems/Game.vue'
import Hardware from '@/views/thems/hardware.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '',
          component: AboutView,
        },
    
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '',
          name: 'Game',
          component: Game,
        },
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: 'h',
          name: 'Hardware',
          component: Hardware,
        },
    
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    
    
    
    
  ]
})

export default router


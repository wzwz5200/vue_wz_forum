import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Game from '@/views/thems/Game.vue'
import Hardware from '@/views/thems/hardware.vue'
import Login from '@/views/user/login.vue'
import Allthems from '@/views/thems/allthems.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    
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
          name: 'allthems',
          component: Allthems,
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
      path: '/logins',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    
    
    
    
  ]
})

export default router


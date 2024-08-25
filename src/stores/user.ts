import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useUsertore = defineStore('User', () => {


    const user_token = ref(null)
    const username = ref(null)
    const user_icon = ref(null)





  return { user_token,username,user_icon }
})

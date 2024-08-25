<script setup lang="ts">

import { http } from '@/axios';
import router from '@/router';
import { useCounterStore } from '@/stores/counter';

import { onMounted, ref } from 'vue'
const cStore = useCounterStore()
interface ListItem {
    content: string;
    created_at: string;
    desc: string;
    id: number;
    img: string;
    title: string;
    updated_at: string;

}




function post_id(psot_id: any){

  router.push({ name: 'Article' , 
  state: {

   POST_ID: psot_id
}
  }) 



}

const loading = ref(true)
const lists = ref<ListItem[]>([])


const res =    await http.get("/FH/thems",{  params: {   tag : history.state.TAG

} })
const extractedData = res.data.data

lists.value = extractedData.ALLPost
console.log("ALLTHES",history.state.TAG)
  

onMounted(async () => {
    
 



  

})


</script>
<template>

<n-grid x-gap="12"  :y-gap="15" :cols="1">
    <n-gi v-for='(item,index) in lists'>
      <div @click="post_id(item.id)" class="light-green"  >

        <n-avatar
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      class="avatar"
    />

    <div class="ghb">
      <h3 style="position: absolute; left: 10%; top: -8%;">{{ item.content }}</h3>
     
    </div>
  

        <!-- <n-card title="卡片">
        卡片内容
       </n-card> -->

       <n-icon size="20" class="icon">

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><g><path d="M448,248L288,96v85.334C138.666,202.667,85.333,309.334,64,416c53.333-74.666,117.333-108.802,224-108.802v87.469L448,248
          z"></path></g></g></svg>
      </n-icon>

      <h3 class="user1"> 回复于：{{ item.created_at}} 2小时前</h3>

      </div>

    </n-gi>
    
  </n-grid>
</template>
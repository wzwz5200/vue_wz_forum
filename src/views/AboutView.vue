
<script setup lang="ts">

import router from '@/router';
import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from '@/stores/counter';


const useCounter = useCounterStore()
import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])



// 从 lists 中获取 title 值
const titleValue = useCounter.txt.map(item => item.title)   
const cStore = useCounterStore()
onMounted(() => {


})
function test(psot_id: any ){

  //传入文章id参数跳转并获取文章详情

  console.log(lists)
  router.push({ name: 'Article' , 
  state: {

   POST_ID: psot_id
}
  }) 


}

</script>

<template>
 <n-grid x-gap="12"  :y-gap="15" :cols="1">
      <n-gi v-for='(cv,index) in useCounter.txt' :key="index">
      <div class="light-green"  @click="test(cv.id)" >

        <n-avatar
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      class="avatar"
    />

    <div class="ghb">
      <h3 style="position: absolute; left: 10%; top: -8%;">{{ cv.title  }}</h3>
     
    </div>
  

        <!-- <n-card title="卡片">
        卡片内容
       </n-card> -->

       <n-icon size="20" class="icon">

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><g><path d="M448,248L288,96v85.334C138.666,202.667,85.333,309.334,64,416c53.333-74.666,117.333-108.802,224-108.802v87.469L448,248
          z"></path></g></g></svg>
      </n-icon>

      <h3 class="user1"> 回复于：{{cv.updated_at  }}</h3>

      </div>

    </n-gi>
    
  </n-grid>
</template>

<style>




</style>

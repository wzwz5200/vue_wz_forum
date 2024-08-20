<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])




onMounted(() => {
 
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: '游戏',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: '硬件',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: '软件',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'steam专区',
    },
  ]
})

</script>





<template>

<div class="tabbox">

  <n-card  class="card" >
 



    <n-grid x-gap="12"  :y-gap="8" :cols="1">
    <n-gi v-for='(item,index) in lists'>
    <n-button text class="but8">
    <template #icon>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M8 12h8"></path><path d="M6 18h12"></path></g></svg>
      </n-icon>
      </template>
      {{ item.name }}
      </n-button>
    </n-gi>
 
  
  </n-grid>

  
    <template #action>
<!--  
       -->
    </template>
  

  

  </n-card>


  


  
</div>


  <n-card  hoverable  class="tips"

  >
    

    

   
 

      <n-icon size="20" style="top: -12px; left: -7px;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128z" fill="currentColor"></path></svg>
  
    </n-icon>


    <h3 style="font-size: xx-small; position: absolute; top: -1px; left: 45px;">论坛统计</h3>


   
      <n-icon size="20" style="top: 30px; left: -27px;">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" fill="currentColor"></path></svg>
  
    </n-icon>

    <n-icon size="20" style="top: 30px; left: 2px;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M8 12h8"></path><path d="M6 18h12"></path></g></svg>
  
    </n-icon>

    <n-icon size="20" style="top: 30px; left: 37px;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5zM8 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="currentColor"></path></g></svg>
  
    </n-icon>
    
 
  </n-card>


  <n-card class="post" hoverable>

    


  </n-card>



</template>


<style>


.post{
 
  max-width: 41.5%;
  min-height: 450px;
  background-color: transparent;
  

  overflow: auto;
  position: relative;
  left: 34%;
  top: -550px;

}


.tips{

  max-width: 10%;
  height: 100px;

  position: relative;

  left: 76%;
  top:-450px




}


.but8{

  position: relative;
  left: 15%;


}


.light-green {
  height: 100px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 100px;
  background-color: rgba(0, 128, 0, 0.24);
}


.but1{

  position: absolute;


  right: 36%;




}




.card{
 
  height: 100%;

}


.tabbox{

height: 450px;
width: 240px;
background-color: rgb(27, 31, 31);
position: relative;
left: 20%;


 

  

}

</style>
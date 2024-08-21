<script setup lang="ts">


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

<n-grid x-gap="12"  :y-gap="125" :cols="1">
      <n-gi v-for='(item,index) in lists'>
      <div class="light-green"  >

        <n-avatar
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      class="avatar"
    />

    <div class="ghb">
      <h3 style="position: absolute; left: 10%; top: -8%;">[游戏专区] 博德之门3 全DLC Baldur's Gate 3</h3>
     
    </div>
  

        <!-- <n-card title="卡片">
        卡片内容
       </n-card> -->

       <n-icon size="20" class="icon">

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><g><path d="M448,248L288,96v85.334C138.666,202.667,85.333,309.334,64,416c53.333-74.666,117.333-108.802,224-108.802v87.469L448,248
          z"></path></g></g></svg>
      </n-icon>

      <h3 class="user1"> 回复于：{{ item.name }} 2小时前</h3>

      </div>

    </n-gi>
    
  </n-grid>
</template>
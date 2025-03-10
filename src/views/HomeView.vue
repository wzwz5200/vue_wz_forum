<script setup lang="ts">
import router from '@/router';
import TheWelcome from '../components/TheWelcome.vue'
import WelcomeItem from '@/components/WelcomeItem.vue';
import { onMounted, ref } from 'vue'
import { http } from '@/axios';

import { useCounterStore } from '@/stores/counter';

const cStore = useCounterStore()
interface Tag {

  tag: string;
}

interface Category {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  Articles: null | any;
}


interface Article {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  desc: string;
  content: string;
  img: string;
  type: number;
  status: number;
  is_top: boolean;
  is_delete: boolean;
  original_url: string;
  category_id: number;
  tags: Tag[];
  category: Category;
  user: null | any;
}

interface ListItem {
    content: string;
    created_at: string;
    desc: string;
    id: number;
    img: string;
    title: string;
    updated_at: string;

}


const listsz = ref<ListItem[]>([])




const lists = ref<Tag[]>([])

onMounted(async () => {
 
  
  const res =    await http.get("/FH/get_tag")
  const extractedData = res.data
  
  
  lists.value = extractedData.data.TAG
  
  console.log(lists.value)
  

  console.log(lists.value)
})


const loading = ref(true)

function Tohome(){

router.push({ path: '/'}) 

}



async function qianhuan(name: any){

  console.log("w")
//传入主题参数到帖子组件使用get方法获取传入主题的所有帖子
//待实现

cStore.thems = name

console.log("hello1",name)




  router.push({ name: 'allthems',state: {

   TAG:name

} }
    
   )
  


}

</script>





<template>
     
      <WelcomeItem ></WelcomeItem>

<div class="tabbox">

  <n-card  class="card" >
 
    <n-button  @click="Tohome()" text class="homebutton" >
          <template #icon>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M8 12h8"></path><path d="M6 18h12"></path></g></svg>
            </n-icon>
        
          </template>
        
       
          <h3>首页</h3>
            
      
      
       
            </n-button>

  
  <n-grid x-gap="12"  :y-gap="15" :cols="1">


          <n-gi  v-for="tag in  lists" >
          <n-button text class="but8" @click="qianhuan(tag.tag)">
          <template #icon>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M8 12h8"></path><path d="M6 18h12"></path></g></svg>
            </n-icon>
        
          </template>
        
          
          <div style=" height: 10%; width: 500%;">
      
            <h3>{{ tag.tag }}</h3>
          </div>
            
      
      
       
            </n-button>
         
          </n-gi>
       
        
        </n-grid>



  

  </n-card>


  



  
</div>





<!-- <n-grid x-gap="12"  :y-gap="8" :cols="1">
    <n-gi v-for='(item,index) in lists'>

      <div class=""></div>
    </n-gi>
 
  
  </n-grid> -->

  



<!-- 
  <n-card  style="position: relative; " hoverable  class="tips"

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
    
 
  </n-card> -->

<!--   
  <n-grid x-gap="12"  :y-gap="8" :cols="1">
    <n-gi v-for='(item,index) in lists'>
    <div class="post_box" >

      <n-card style="height: 110px;">

       <div class="icon">
        <n-avatar
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
       </div>

       <div class="post_box_top">

        <div style=" width: 100%; height: 84px; position: absolute; top: -5px;">
           <h3> 人中之龙8究极版 [2] Like a DragonInfinite Wealth Ultimate Edition STEAM游戏</h3>

     

        </div>
        
        <h3 style="position: relative; top: 74.1%; left: 4%; font-size: xx-small;">回复于{{  }}</h3>      


        <n-icon size="20" style="top: 45px; left: -1px;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><g><path d="M448,248L288,96v85.334C138.666,202.667,85.333,309.334,64,416c53.333-74.666,117.333-108.802,224-108.802v87.469L448,248
              z"></path></g></g></svg>
  
      </n-icon>
       </div>


     </n-card>



    </div>
    </n-gi>
 
  
  </n-grid> -->

<Suspense>
  <RouterView class="view"></RouterView>


</Suspense>

</template>


<style>


.homebutton{

  position: absolute;
  left: 24%;



}


.view{



}


.user1{

  font-size: x-small;
  position: absolute;
  left: 15%;
  top: 61%;

}

.ghb{

  background-color: rgb(17, 22, 26);
  max-height: 77%;
  height:auto;
  clear:both;
  word-break:break-all;


}


.icon{




  position: absolute;
  left: 10.3%;
  top: 70%;



}


.avatar{


  position: absolute;
  left: 3%;
  top: 16%;

 

}


.post_box_top{

  
  width: 670px;
  height: 100px;
  position: absolute;
  left: 11%;
  top: -4%;
 

}

.post_box{

  /* overflow-y:hidden; */
 
  background-color: aqua;
  width: 41.5%;
  min-height: 100px;

  position: relative;
  left: 34%;
  top: -500%;


}

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
  overflow:hidden;
  left: 15%;
  top:100%;


}


.light-green {
  min-height: 110px;
  width: 43%;

  cursor: pointer;
  height:auto;


 
  position: relative;
  top: 19%;
  left: 31%;

  box-shadow: 1px 1px 10px 1px #080808;
}
.green {
  height: 100px;
  background-color: #101014
}


.but1{

  position: absolute;


  right: 36%;




}




.card{
 
  height: 100%;
  position: absolute;

}


.tabbox{

height: 50%;
overflow:hidden;
width: 10%;
top: 25%;
background-color: rgb(27, 31, 31);
position: absolute;
left: 20%;


 

  

}

</style>
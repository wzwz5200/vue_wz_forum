<script setup lang="ts">
import { onBeforeRouteLeave, onBeforeRouteUpdate, RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { onMounted, ref, watch } from 'vue'

import { csCZ, darkTheme, NUl } from "naive-ui";
import WelcomeItem from './components/WelcomeItem.vue';
import router from './router';

import {  useRoute,useRouter } from "vue-router";
const routerz = useRoute();
import { useCounterStore } from './stores/counter';

let user_img = ref('')

import { http } from './axios';


import { NMessageProvider } from "naive-ui";

const isLogin = ref(false)


const cStore = useCounterStore()
function Login(){

  router.push({
        name:'login',
    
    })


}


 
    

watch(
      () => routerz.path,
      (val, oval) => {
       if (oval== '/logins'){
        window.location.reload();

       }
        
   
      }
    );


onMounted(async () => {
  if (window.localStorage.getItem("TokenInfo") != null){

  

  var items =  JSON.parse(localStorage.getItem('user') || "{}");
  console.log("token 不为空",items)
  user_img.value = items.user_Img
isLogin.value = true
}else{
  isLogin.value = false
}
  
 const res =    await http.get("/FH/get_tag")
 const extractedData = res.data
 
 
 cStore.txt = extractedData.data.ALL
 cStore.tips = extractedData.data.TAG

 console.log("data",cStore.txt)
 console.log("tag",cStore.tips)


 

})



</script>

<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>

    <n-config-provider :theme="darkTheme" >
      <n-space vertical size="large" >
    <n-layout class="header">
      <n-layout-header class="divbox2"  >
       <div>
          
    
          <a href="/"><img src="../src/assets/logo.svg" class="img"></a>

     
       </div>
   
    <n-button text style="font-size: 22px" class="but">
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 480h64"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 432h96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 384V256"></path><path d="M294 240s-21.51 16-38 16s-38-16-38-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>
    </n-icon>
    <h1 style="font-size: medium;">讨论</h1>
  </n-button>
  <n-button text style="font-size: 22px" class="but2">
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12v.01"></path><path d="M14.828 9.172a4 4 0 0 1 0 5.656"></path><path d="M17.657 6.343a8 8 0 0 1 0 11.314"></path><path d="M9.168 14.828a4 4 0 0 1 0-5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0-11.314"></path></g></svg>
    </n-icon>
    <h1 style="font-size: medium;">交友</h1>
  </n-button>
        
  <n-input round placeholder="搜索"  class="input"/>
  <n-button v-show="!isLogin"  text style="font-size:  22px" @click="Login()" class="but3">
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1a1 1 0 0 1 2 0v1h9V4H9v1a1 1 0 1 1-2 0V4c0-1.1.9-2 2-2z" fill="currentColor"></path><path d="M10.795 16.295c.39.39 1.02.39 1.41 0l3.588-3.588a1 1 0 0 0 0-1.414l-3.588-3.588a.999.999 0 0 0-1.411 1.411L12.67 11H4a1 1 0 0 0 0 2h8.67l-1.876 1.884a.999.999 0 0 0 .001 1.411z" fill="currentColor"></path></svg>
    </n-icon>
    <h1 style="font-size: medium;"  >登录</h1>
  </n-button>
  <n-avatar
  v-show="isLogin"
      round
      :size="40"
      style="position: absolute; left: 79%;"
      :src=user_img
    />
  <n-button v-show ="!isLogin"  text style="font-size: 22px" class="but4">
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" fill="currentColor"></path></svg>
    </n-icon>
    <h1 style="font-size: medium;">注册</h1>
  </n-button>

      </n-layout-header>

    
    
    </n-layout>

    <Suspense>
      <RouterView />  
    </Suspense>
   
  </n-space>

  <n-global-style />
  </n-config-provider>
  


</template>

<style scoped>

.footer{

}


.divbox1{
  position: relative;

  left: 60%;

  
  display: inline-block;


}
.divbox2{
position: relative;
display: inline-block;


}

.footbox{
  position: relative;
  background-color: bisque;

  left: 8%;
  display: inline-block;



}


.input{


  width: 15%;

  left: 55%;
  top: -7px;



}

.but{

  padding: 0;
  margin: 0;
  left: 24.4%;
  top: -2px;

  
  
}
.but2{

padding: 0;
margin: 0;
left: 25.4%;
top: -2px;



}

.but3{

padding: 0;
margin: 0;
left: 57.4%;
top: 0px;



}


.but4{

padding: 0;
margin: 0;
left: 59.4%;
top: 0px;



}

.img{


  height: 40%;
  position: absolute;
  left: 21%;
  top: 26.7%;
  
 


}


.topbox{

/*  
  width: 200px;
 background-color: cadetblue;
  position: absolute;
  left: 20.8%;
  top: 5%; */


}



.n-layout-footer {
background-color: #101014
;
  padding: 0.6%;
}

.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
  padding: 0.6%;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {

}

html,
body {
	padding: 0;
	margin: 0;
	height: 100%;
}

</style>

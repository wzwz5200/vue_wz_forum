

<script setup lang="ts">
import { http } from '@/axios';
import { ref } from 'vue';

import { useUsertore } from '@/stores/user';
import router from '@/router';
import { useMessage } from 'naive-ui';
const cStore = useUsertore()



const User_value = ref('')
let User_password = ref('')
const form=ref({   //表单设置的参数名要和后端所需参数对应
  password:'',
  newPass:'',
  confirmPass:'',
  id:''
})


async function login(){

    console.log("he",User_value.value,User_password.value)
    const res =    await http.post("/US/login", {
        Name: User_value.value,
        Password: User_password.value
    

    })
    const extractedData = res.data
    

    cStore.username = extractedData.data.name
    cStore.user_token = extractedData.data.Token

    console.log("hello login",cStore.username,cStore.user_token)
    
    

    
    
    if (extractedData.code == 7) {


        alert("密码或账号错误")

}
else{
    localStorage.setItem("user",JSON.stringify(extractedData.data));

    
    //window.localStorage.getItem("TokenInfo")
    window.localStorage.setItem( "TokenInfo", extractedData.data.Token)
        router.push({ path: '/'}) 

}

    

  
  
  


    


}


</script>

<template>

<div class="loginpage">


    <div class="loginbox">

        <n-card class="logincard">
            <img src="../../assets/logo.svg" class="img">
            <n-input v-model:value="User_value" size="large"  round placeholder="用户名" class="name" />
            <n-input v-model:value="User_password" size="large"  round placeholder="密码" class="pwd" />
    
            <n-button @click="login()" type="success"  class="login_button">
            登录
            </n-button>
        </n-card>
    

    </div>



</div>

</template>


<style >

.name{

    position: relative;
    top: 3%;

}

.img{

  height: 40%;
  position: relative;
  left: 16%;
  top: 0%;
}

.login_button{

    position: absolute;

    right: 41%;
    top: 80%;


}


.pwd{

    position: relative;
    top: 10%;

}


.loginpage{

   
    position: absolute;
    height: 50%;
    width: 18%;


    left: 39.6%;
    top: 13%;

    overflow-x:hidden;
    overflow-y:hidden;


}


.loginbox{

    height: 100%;
    width: 100%;




}

.logincard{

    
    width: 100%;
    height: 100%;
    

}


</style>


<script setup lang="ts">
import { ref } from 'vue';

const User_value = ref('')

</script>

<template>

<div class="loginpage">


    <div class="loginbox">

        <n-card class="logincard">
            <img src="../../assets/logo.svg" class="img">
            <n-input v-model="User_value" size="large"  round placeholder="用户名" class="name" />
            <n-input v-model="User_value" size="large"  round placeholder="密码" class="pwd" />
    
            <n-button type="success" class="login_button">
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
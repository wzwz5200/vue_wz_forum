<template>
    <div></div>
  </template>
   
  <script>
  import { defineComponent, getCurrentInstance } from "vue";
  import { useMessage } from "naive-ui";
   
  export default defineComponent({
    setup() {
      window.$message = useMessage();
    },
  });
  </script>
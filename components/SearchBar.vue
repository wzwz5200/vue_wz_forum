<template>
    <el-input
      v-model="searchText"
      placeholder="请输入搜索内容"
      class="search-bar"
      clearable
      @keyup.enter="handleSearch"
    >
      <template #suffix>
        <el-button icon="el-icon-search" @click="handleSearch" />
      </template>
    </el-input>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchText = ref('');
  
  const handleSearch = () => {
    if (!searchText.value) {
      alert('请输入搜索内容');
      return;
    }
    console.log(`搜索内容: ${searchText.value}`);
  };
  </script>
  
  <style scoped>
  .search-bar {
    width: 100%;
    max-width: 300px;
  }
  </style>
  
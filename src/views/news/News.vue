<template>
    <div class="news-container">
      <h1>News App</h1>
      <input v-model="title" placeholder="請輸入tesla" />
      <button @click="getNews">確認</button>
  
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="newsData" class="news-info">
        <!-- <h2>{{ newsData.city.name }}</h2> -->
        <!-- <p>{{ newsData.news[0].description }}</p> -->
        <!-- <p>{{ newsData.main.temp }}°C</p> -->
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useNewsStore } from '@/stores/newsStore';
  
  export default {
    setup() {
      const title = ref('');
      const newsStore = useNewsStore();
      const getNews = () => {
        newsStore.fetchNews(title.value);
      };
  
      return {
        title,
        getNews,
        ...newsStore
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .news-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  
    input {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 10px 20px;
      border: none;
      background-color: #007bff;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
  
      &:hover {
        background-color: #0056b3;
      }
    }
  
    .loading {
      margin-top: 20px;
    }
  
    .error {
      color: red;
      margin-top: 20px;
    }
  
    .weather-info {
      margin-top: 20px;
  
      h2 {
        margin: 0;
      }
  
      p {
        margin: 5px 0;
      }
    }
  }
</style>
  
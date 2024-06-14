import { defineStore } from 'pinia';
import axios from 'axios';

// URL: https://newsapi.org/
// 免費API URL: https://codelove.tw/@tony/post/2anmG3

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsData: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchNews(title) {
        console.log('title :>> ', title);
      this.loading = true;
      this.error = null;
      try {
        const API_KEY = '30a5807237ed40ee833078daa9feab1a';
        const BASE_URL = 'https://newsapi.org/v2/everything';
        const res = await axios.get(`${BASE_URL}?q=${title}&from=2024-05-14&sortBy=publishedAt&apiKey=${API_KEY}`);
        this.newsData = res.data;
        console.log('this.newsData :>> ', this.newsData);
      } catch (err) {
        this.error = 'Unable to fetch news data';
      } finally {
        this.loading = false;
      }
    }
  }
});

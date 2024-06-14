import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Weather from '@/views/weather/Weather.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

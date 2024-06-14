<template>
  <RouterLink :to="project.link" class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
  </RouterLink>
</template>
  
<script setup>
import {defineProps} from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  project: Object
})
</script>
  
<style lang="scss" scoped>
.project-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  width: 115px;
  height: 88px;
  text-align: center;
  transition: 0.3s;
  transform: scale(1);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  .project-image {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  h3 {
    margin-top: 10px;
    font-size: 19px;
    color: #000000;
  }

  p {
    font-size: 16px;
    color: #555;
  }
}
</style>
  
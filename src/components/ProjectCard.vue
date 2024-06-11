<template>
  <div class="project-card">
    <img :src="project.image" alt="Project Image" class="project-image" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
  </div>
</template>
  
<script>
export default {
  props: {
    project: Object,
  },
};
</script>
  
<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: center;

  .project-image {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  h3 {
    margin-top: 10px;
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
    color: #555;
  }
}
</style>
  
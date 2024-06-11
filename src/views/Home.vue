<template>
  <div class="home">
    <h2>我的項目</h2>
    <ProjectList />
  </div>
</template>
  
  <script>
import ProjectList from "../components/ProjectList.vue";

export default {
  components: {
    ProjectList,
  },
};
</script>
  
<style lang="scss" scoped>
.home {
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
  
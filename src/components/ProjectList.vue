<template>
  <div class="project-list">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
  
<script>
import ProjectCard from "./ProjectCard.vue";
import {reactive} from 'vue';

export default {
  components: {
    ProjectCard,
  },
  setup() {
    let projects = reactive([
        { id: 1, title: "新聞", description: "新聞串接api", link: "/news"},
        { id: 2, title: "項目二", description: "這是第二個項目", link: ""},
      ]);

    return {projects}
  },
};
</script>
  
<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
  
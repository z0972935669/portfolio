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

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        { id: 1, title: "項目一", description: "這是第一個項目" },
        { id: 2, title: "項目二", description: "這是第二個項目" },
        // 添加更多项目
      ],
    };
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
  
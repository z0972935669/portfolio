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
import { useRouter } from 'vue-router';

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const router = useRouter();
    console.log(router);
    console.log(router.options.routes[1]);
    let projects = reactive([
        { id: 1, title: "項目一", description: "這是第一個項目", link: router.options.routes[1].path},
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
  
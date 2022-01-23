<template>
  <div>
    <h1>Projects:</h1>
    <div class="project-grid">
      <ProjectInfoCard
        v-for="project in $store.state.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectInfoCard from "./ProjectInfoCard.vue";
export default {
  components: {
    ProjectInfoCard,
  },
};
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
}
</style>

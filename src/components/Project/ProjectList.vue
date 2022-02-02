<template>
  <div class="ProjectsSection">
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
.ProjectsSection {
  padding: 2rem 5rem 2rem;
  text-align: center;
  margin: 1rem;
  border-radius: 0.5rem;
}
.project-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-areas:
    "one"
    "two"
    "three";

  padding-block: 2rem;
  width: min(95%, 90rem);
  margin-inline: auto;
}

@media (min-width: 720px) {
  .project-grid {
    grid-template-areas:
      "one two"
      "three four";
  }
}

@media (min-width: 1281px) {
  .project-grid {
    grid-template-areas: "one two three";
  }
}
</style>

<template>
  <div class="home">
    <WorkExperinceList />
    <ProjectList />
  </div>
</template>

<script>
import WorkExperinceList from "@/components/WorkExperience/WorkExperinceList.vue";
import ProjectList from "@/components/Project/ProjectList.vue";
export default {
  components: {
    WorkExperinceList,
    ProjectList,
  },
};
</script>

<style>
.home {
  padding: 1rem;
  text-align: center;
}
</style>

<template>
  <div class="home">
    <Profile />
    <WorkExperinceList />
    <ProjectList />
  </div>
</template>

<script>
import WorkExperinceList from "@/components/WorkExperience/WorkExperinceList.vue";
import ProjectList from "@/components/Project/ProjectList.vue";
import Profile from "@/components/Profile.vue";
export default {
  components: {
    WorkExperinceList,
    ProjectList,
    Profile,
  },
};
</script>

<style>
.home {
  padding: 1rem;
  text-align: center;
}
.home > * {
  padding-top: 4rem;
}
</style>

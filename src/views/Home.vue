<template>
  <div class="home">
    <SplashScreen />
    <Profile />
    <WorkExperinceList />
    <ProjectList />
  </div>
</template>

<script>
import WorkExperinceList from "@/components/WorkExperience/WorkExperinceList.vue";
import ProjectList from "@/components/Project/ProjectList.vue";
import Profile from "@/components/Profile.vue";
import SplashScreen from "@/components/SplashScreen.vue";
export default {
  components: {
    WorkExperinceList,
    ProjectList,
    Profile,
    SplashScreen,
  },
};
</script>

<style></style>

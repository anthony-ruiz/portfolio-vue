<template>
  <div class="home">
    <div id="splash-screen"><SplashScreen /></div>
    <div id="profile"><Profile /></div>
    <div id="work-experience"><WorkExperinceList /></div>
    <div id="projects"><ProjectList /></div>
    <div id="contact"><Contact /></div>
  </div>
</template>

<script>
import WorkExperinceList from "@/components/WorkExperience/WorkExperinceList.vue";
import ProjectList from "@/components/Project/ProjectList.vue";
import Profile from "@/components/Profile.vue";
import SplashScreen from "@/components/SplashScreen.vue";
import Contact from "@/components/Contact.vue";
export default {
  components: {
    WorkExperinceList,
    ProjectList,
    Profile,
    SplashScreen,
    Contact,
  },
};
</script>

<style></style>

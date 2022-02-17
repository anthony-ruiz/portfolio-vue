<template>
  <div>
    <v-img
      max-height="300"
      :src="
        require(`../assets/projects/${currentProject(Number(id)).imageBanner}`)
      "
    ></v-img>
    <div class="project-details -shadow">
      <h1>{{ currentProject(Number(id)).name }}</h1>
      <p>{{ currentProject(Number(id)).description }}</p>
      <a :href="currentProject(Number(id)).gitHubLink">
        <img
          class="gitHubLogo"
          alt="GitHub Logo"
          :src="require(`../assets/technology-logos/github-logo.png`)"
        />
      </a>
      <TechnologyStackList :techList="currentProject(Number(id)).toolsUsed" />
    </div>
  </div>
</template>

<script>
import TechnologyStackList from "@/components/TechnologyStackList.vue";
export default {
  props: {
    id: String,
  },
  components: {
    TechnologyStackList,
  },
  computed: {
    currentProject() {
      return this.$store.getters.getProjectById;
    },
  },
};
</script>

<style scoped>
.project-details {
  display: block;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  margin: 50px auto 50px auto;
  width: 80%;
  position: relative;
}

@media (min-width: 720px) {
  .project-details {
    width: 70%;
  }
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
}
img:hover {
  transform: scale(1.01);
  border-radius: 0.5rem;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
h1 {
  text-align: center;
  padding-bottom: 1rem;
}
p {
  padding: 1rem;
}
</style>

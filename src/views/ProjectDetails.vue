<template>
  <div>
    <v-img
      max-height="300"
      :src="require(`../assets/projects/${currentProject(id).image}`)"
    ></v-img>
    <div class="work-detials -shadow">
      <h1>{{ currentProject(id).name }}</h1>
      <p>{{ currentProject(id).description }}</p>
      <TechnologyStackList :techList="currentProject(id).toolsUsed" />
    </div>
  </div>
</template>

<script>
import TechnologyStackList from "@/components/TechnologyStackList.vue";
export default {
  props: {
    id: Number,
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
.work-detials {
  display: block;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  margin: 50px auto 50px auto;
  width: 70%;
  padding: 3rem;
  position: relative;
}
h1 {
  text-align: center;
}
</style>

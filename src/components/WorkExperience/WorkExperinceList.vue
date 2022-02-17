<template>
  <div class="WorkExperienceSection">
    <h1>Work Experience:</h1>
    <div id="list-item">
      <WorkExperieceInfoCard
        v-for="location in $store.state.locations"
        :key="location.id"
        :location="location"
      />
    </div>
  </div>
</template>

<script>
import WorkExperieceInfoCard from "./WorkExpericeInfoCard.vue";
export default {
  components: {
    WorkExperieceInfoCard,
  },
};
</script>

<style scoped>
.WorkExperienceSection {
  background-color: --main-bg-color;
  padding: 2rem 2rem 2rem;
  text-align: center;
  margin: 1rem;
  border-radius: 0.5rem;
}
#list-item {
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: min(95%, 90rem);
  grid-gap: 2rem;
  list-style-type: none;
}
h1 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>

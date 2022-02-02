<template>
  <div class="WorkExperienceSection">
    <h1>Work Experience:</h1>
    <ul>
      <WorkExperieceInfoCard
        v-for="location in $store.state.locations"
        :key="location.id"
        :location="location"
      />
    </ul>
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
  padding: 2rem 5rem 2rem;
  text-align: center;
  margin: 1rem;
  border-radius: 0.5rem;
}
ul {
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width: min(95%, 90rem);
  grid-gap: 2rem;
  list-style-type: none;
}
h1 {
  padding-bottom: 2rem;
}
</style>

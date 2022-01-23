<template>
  <div>
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
/* this is for the grid of work Locations */
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
  list-style-type: none;
}
</style>

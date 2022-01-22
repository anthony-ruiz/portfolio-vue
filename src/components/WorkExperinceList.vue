<template>
  <div>
    <h1>Work Experience:</h1>
    <ul>
      <info-card
        v-for="location in $store.state.locations"
        :key="location.id"
        :location="location"
      />
    </ul>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  components: {
    InfoCard,
  },
};
</script>

<style scoped>
/* this is the for the title of component */
h1 {
  text-align: center;
}
/* this is for the grid of work Locations */
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
}
</style>

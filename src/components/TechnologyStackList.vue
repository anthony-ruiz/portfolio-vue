<template>
  <div class="technology-stack">
    <h1>Technologies Used</h1>
    <ul>
      <li v-for="item in mylocation(id).TechnologyUsed" :key="item">
        <v-img
          max-height="300"
          :src="require(`../assets/technology-logos/${item}-logo.svg`)"
        ></v-img>
        <div class="caption">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
  },
  computed: {
    mylocation() {
      return this.$store.getters.getWorkLocationById;
    },
  },
};
</script>

<style scoped>
.technology-stack {
  padding-top: 50px;
}
ul {
  margin: 50px auto 50px auto;
  display: grid;
  max-width: 700px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-gap: 2rem;
  list-style-type: none;
  justify-content: center;
}
.caption {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
}
</style>

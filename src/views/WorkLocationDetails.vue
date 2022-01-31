<template>
  <div>
    <v-img
      max-height="300"
      :src="require(`../assets/${mylocation(Number(id)).BackgroundImage}`)"
    ></v-img>
    <div class="work-details -shadow">
      <div class="work-location-header">
        <h1>{{ mylocation(Number(id)).CompanyName }}</h1>
        <h4>
          {{
            "from " +
            mylocation(Number(id)).StartDate +
            " to " +
            mylocation(Number(id)).EndDate
          }}
        </h4>
        <h3>{{ mylocation(Number(id)).RoleTitle }}</h3>
      </div>
      <p>{{ mylocation(Number(id)).JobDescription }}</p>
      <TechnologyStackList :techList="mylocation(Number(id)).TechnologyUsed" />
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
    mylocation() {
      return this.$store.getters.getWorkLocationById;
    },
  },
};
</script>

<style scoped>
.work-details {
  display: block;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  margin: 50px auto 50px auto;
  width: 70%;
  position: relative;
  padding: 1rem;
}
.work-location-header {
  text-align: center;
  padding-bottom: 1rem;
}
</style>

<template>
  <div>
    <v-img
      max-height="300"
      :src="require(`../assets/${mylocation(Number(id)).BackgroundImage}`)"
    ></v-img>
    <div class="work-details -shadow">
      <div class="work-location-header">
        <h1>{{ mylocation(Number(id)).CompanyName }}</h1>
        <h5>
          {{
            mylocation(Number(id)).StartDate +
            " - " +
            mylocation(Number(id)).EndDate
          }}
        </h5>
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
  width: 80%;
  position: relative;
}

@media (min-width: 720px) {
  .work-details {
    width: 70%;
  }
}

.work-location-header {
  text-align: center;
  padding-bottom: 1rem;
}
h3 {
  padding: 1rem;
}
p {
  padding: 1rem;
}
</style>

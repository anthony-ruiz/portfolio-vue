<template>
  <div class="info-card -shadow">
    <h2>{{ mylocation(id).CompanyName }}</h2>
    <h4>
      {{ "from " + mylocation(id).StartDate + " to " + mylocation(id).EndDate }}
    </h4>
    <h3>{{ mylocation(id).RoleTitle }}</h3>
    <p>{{ mylocation(id).JobDescription }}</p>
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

<template>
  <div class="about">
    <WorkExperinceList />
  </div>
</template>

<script>
import WorkExperinceList from "@/components/WorkExperinceList.vue";

export default {
  components: {
    WorkExperinceList,
  },
};
</script>

<style scoped>
.about {
  padding: 1rem;
}
</style>

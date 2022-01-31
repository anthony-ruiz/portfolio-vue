<template>
  <div class="info-card -shadow">
    <router-link
      class="info-card-link"
      :to="{ name: 'Project Details', params: { id: project.id } }"
    >
      <figure>
        <img
          :src="require(`@/assets/projects/${project.image}`)"
          alt="Project Image"
        />
      </figure>
      <h3 class="project-name">{{ project.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.info-card {
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  overflow: hidden;
}

.info-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.info-card figure {
  border-radius: 0.5rem;
}

.info-card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.info-card-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.info-card-link:hover {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.info-card:nth-child(1) {
  grid-area: one;
}

.info-card:nth-child(2) {
  grid-area: two;
}

.info-card:nth-child(3) {
  grid-area: three;
}
</style>

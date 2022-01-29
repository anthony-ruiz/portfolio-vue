<template>
  <div class="wholecard" v-bind:class="{ spantwo: project.id === 2 }">
    <router-link
      class="info-card-link"
      :to="{ name: 'Project Details', params: { id: project.id } }"
    >
      <div class="info-card -shadow">
        <figure>
          <img
            :src="require(`@/assets/projects/${project.image}`)"
            alt="Project Image"
          />
        </figure>
        <h3 class="project-name">{{ project.name }}</h3>
      </div>
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
.spantwo {
  grid-row: span 2;
}

/* .spantwo .info-card figure {
  max-height: 400px;
} */

.wholecard {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  height: 15rem;
  overflow: hidden;
}
.wholecard.spantwo {
  height: 31rem;
}

.wholecard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.info-card figure {
  max-height: 100%;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}

.info-card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-card project-name {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

.info-card figure h3 {
  color: white;
  font-size: 1.25rem;
}

.info-card > .title {
  margin: 0;
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
</style>

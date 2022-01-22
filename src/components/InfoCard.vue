<template>
  <router-link
    class="info-link"
    :to="{ name: 'Work Location', params: { id: location.id } }"
  >
    <li class="info-card -shadow">
      <figure>
        <img
          :src="require(`../assets/${location.CompanyLogo}`)"
          alt="Work Location Logo"
        />
        <figcaption>
          <h3>{{ location.CompanyName }}</h3>
        </figcaption>
      </figure>
      <h5>{{ "from " + location.StartDate + " to " + location.EndDate }}</h5>
      <h4>{{ location.RoleTitle }}</h4>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    location: Object,
  },
};
</script>

<style scoped>
.info-card {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  margin: 1rem;
}
.info-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.info-card figure {
  max-height: 30vh;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}

.info-card figure img {
  width: 100%;
}

.info-card figure figcaption {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

figcaption > h3 {
  color: white;
  padding: 0.75rem;
  font-size: 1.25rem;
}

.info-card > .title {
  margin: 0;
}
/* color of text in the card */
.info-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

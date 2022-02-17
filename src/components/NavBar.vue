/* eslint-disable prettier/prettier */
<template>
  <div class="bar">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      class="header"
      fixed="top"
    >
      <b-navbar-brand class="event-link" :to="{ name: 'Home' }"
        >Anthony Ruiz-Alatorre</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav class="right">
          <b-nav-item href="/#profile">About</b-nav-item>
          <b-nav-item href="/#work-experience">Work Experience</b-nav-item>
          <b-nav-item href="/#projects">Projects</b-nav-item>
          <b-nav-item href="/#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  links: [{ id: 0, name: "Home", path: "/" }],
};
</script>
<style scoped>
.navbar.navbar-dark.bg-dark {
  background-color: #ac7b4a !important;
}
.event-link {
  margin-left: 1rem;
}

.right {
  margin-left: auto;
  margin-right: 2rem;
}
</style>

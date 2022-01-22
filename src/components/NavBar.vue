/* eslint-disable prettier/prettier */
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="event-link" :to="{ name: 'Home' }"
        >Anthony Ruiz-Alatorre</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'WorkExperince' }"
            >Work Experience</b-nav-item
          >
          <b-nav-item href="#">Education</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  links: [
    { id: 0, name: "Home", path: "/" },
    { id: 0, name: "About", path: "/About" },
  ],
};
</script>

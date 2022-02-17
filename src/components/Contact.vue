<template>
  <div class="contact-form">
    <h1>Let's Connect!</h1>
    <h4>
      You can find me on
      <b-link :href="user.github">GitHub</b-link> and
      <b-link :href="user.linkedIn">LinkedIn</b-link>.
    </h4>
    <div id="mail-icon">
      <a href="mailto:anthonyruizalatorre@outlook.com">
        <img
          alt="Email icon"
          :src="require(`@/assets/technology-logos/email-icon.svg`)"
          width="100"
          height="100"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.userProfile;
    },
  },
};
</script>

<style scoped>
.contact-form {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h1 {
  padding-bottom: 2rem;
}
#mail-icon {
  padding: 2rem;
}
</style>

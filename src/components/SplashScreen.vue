<template>
  <div>
    <img
      class="SpashScreenPicture"
      alt="Perspn typing on laptop"
      :src="require(`@/assets/splash-screen.jpg`)"
    />
    <h1 class="SpahScreenTitle">{{ user.name }}</h1>
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
.SpashScreenPicture {
  max-height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.SpahScreenTitle {
  font-family: "Roboto Slab", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  font-size: calc(40px + 3vw);
  color: white;
}
</style>

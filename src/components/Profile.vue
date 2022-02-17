<template>
  <div class="profileSection">
    <a :href="user.linkedIn">
      <img
        class="profilePicture"
        alt="Profile Picture"
        :src="require(`@/assets/profile-picture.jpg`)"
      />
    </a>
    <h1>{{ user.name }}</h1>
    <p>{{ user.bio }}</p>
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
.profileSection {
  padding: 5rem 2rem 0rem 2rem;
  text-align: center;
  margin: auto;
  width: 90%;
  height: 100%;
}

img {
  align-self: center;
  border-radius: 50%;
  width: 40%;
  min-width: 200px;
  max-width: 280px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
}

img:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
h1 {
  margin: 2rem;
}
</style>

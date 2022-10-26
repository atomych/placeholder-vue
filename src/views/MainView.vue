<template>
  <div class="container">
    <nav-bar />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
}
</style>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "MainView",

  components: {
    NavBar,
  },

  created() {
    this.$router.push({ name: "home" });
  },
};
</script>

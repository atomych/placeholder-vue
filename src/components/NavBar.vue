<template>
  <section class="nav-wrapper">
    <nav class="nav">
      <a class="nav__item" @click="$router.push({ name: 'users' })">Users</a>
      <a class="nav__item" @click="$router.push({ name: 'posts' })">Posts</a>
      <a class="nav__item" @click="$router.push({ name: 'comments' })"
        >Comments</a
      >
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  padding: 2rem 1rem;

  background-color: rgb(255, 128, 0);
  box-shadow: 0 0 0.5rem #000;

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    &__item {
      text-decoration: none;
      color: #fff;

      font-size: 2rem;
      font-weight: 500;

      margin-right: 2rem;

      cursor: pointer;
      transition: all 0.2s linear;

      user-select: none;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        text-shadow: 0 0 0.3rem #000;
      }
    }
  }
}
</style>

<script>
export default {
  name: "NavBar",
};
</script>

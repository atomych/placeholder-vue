<template>
  <router-view />
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

html {
  font-size: 15px;
}

body {
  font-size: 1rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;

  background-color: rgb(236, 236, 236);
}

#app {
  height: 100vh;
}
</style>

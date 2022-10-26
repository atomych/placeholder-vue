<template>
  <li class="item">
    <h3 class="title">{{ post.title }}</h3>
    <p class="body">
      {{ post.body }}
    </p>
  </li>
</template>

<style lang="scss" scoped>
.item {
  display: block;

  width: 23%;
  min-width: 300px;

  height: 300px;

  border-radius: 1rem;
  border: 2px solid rgb(255, 128, 0);
  background-color: #fff;

  margin-bottom: 1rem;
  margin-right: 1rem;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0 0 0.5rem #000;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 1rem;
    text-align: center;
  }

  .body {
    font-size: 1.3rem;
    text-align: center;
  }
}
</style>

<script>
export default {
  name: "PostItem",

  props: {
    post: {
      required: true,
      default: {},
    },
  },
};
</script>

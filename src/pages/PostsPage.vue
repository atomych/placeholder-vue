<template>
  <div class="wrapper">
    <ul class="list">
      <post-item
        v-for="item in postsList"
        :key="item.id"
        :post="item ? item : {}"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

  padding: 2rem;
}

.list {
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script>
import PostItem from "../components/PostItem.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostsPage",

  components: {
    PostItem,
  },

  created() {
    this.fetchPosts();
  },

  computed: {
    ...mapGetters(["postsList"]),
  },

  methods: {
    ...mapActions(["fetchPosts"]),
  },
};
</script>

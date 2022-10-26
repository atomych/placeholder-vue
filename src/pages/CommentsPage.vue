<template>
  <div class="wrapper">
    <ul class="list">
      <comment-item
        v-for="item in commentsList"
        :key="item.id"
        :comment="item ? item : {}"
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
import CommentItem from "../components/CommentItem.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CommentsPage",

  components: {
    CommentItem,
  },

  created() {
    this.fetchComments();
  },

  computed: {
    ...mapGetters(["commentsList"]),
  },

  methods: {
    ...mapActions(["fetchComments"]),
  },
};
</script>

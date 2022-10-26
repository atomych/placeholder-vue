<template>
  <div class="wrapper">
    <ul class="list">
      <user-item
        v-for="(item, idx) in usersList"
        :key="idx"
        :user="item ? item : {}"
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
import UserItem from "../components/UserItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "UserPage",

  components: {
    UserItem,
  },

  created() {
    this.$store.dispatch("fetchUsers");
  },

  computed: {
    ...mapGetters(["usersList"]),
  },
};
</script>

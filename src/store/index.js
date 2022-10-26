import { createStore } from "vuex";
import users from "./modules/users";
import posts from "./modules/posts";
import comments from "./modules/comments";

export default createStore({
  modules: {
    users,
    posts,
    comments,
  },
});

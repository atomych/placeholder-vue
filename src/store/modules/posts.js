export default {
  state: {
    posts: [],
  },
  actions: {
    async fetchPosts({ commit }) {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await rawData.json();

      commit("setPosts", data);
    },
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    },
  },
  getters: {
    postsList(state) {
      return state.posts;
    },
  },
};

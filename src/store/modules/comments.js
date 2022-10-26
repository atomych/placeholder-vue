export default {
  state: {
    comments: [],
  },
  actions: {
    async fetchComments({ commit }) {
      const rawData = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await rawData.json();

      commit("setComments", data);
    },
  },
  mutations: {
    setComments(state, data) {
      state.comments = data;
    },
  },
  getters: {
    commentsList(state) {
      return state.comments;
    },
  },
};

export default {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers({ commit }) {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await rawData.json();

      commit("setUsers", data);
    },
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  getters: {
    usersList(state) {
      return state.users;
    },
  },
};

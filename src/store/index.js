import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    isAdmin: false,
    users: [],
    currentUser: Object,
    projects: [],
    currentProject: Object,
    techSet: [],
  },
  getters: {
    getIsLogged: (state) => {},
    getIsAdmin: (state) => {},
    getUsers: (state) => {},
    getCurrentUser: (state) => {
      return state.currentUser;
    },
    getProjects: (state) => {
      return state.projects;
    },
    getCurrentProject: (state) => {
      return [];
    },
    getTechSet: (state) => {},
  },
  mutations: {
    setIslogged(state) {},
    setIsAdmin(state, userAdmin) {},
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setUsers(state, users) {},
    setProjects(state, data) {
      state.projects = data.projects;
    },
    setCurrentProject(state, project) {},
    setTechSet(state, techSet) {},
  },
  actions: {
    getUsers({ commit }) {},
    async getUserById({ commit }, id) {
      try {
        const response = await axios.get(
          `https://6227da469fd6174ca814fdc5.mockapi.io/api/users/${id}`
        );
        commit("setCurrentUser", response.data);
      } catch (e) {
        console.log(e);
      }
    },
    setNewUser({ dispatch }) {},
    deleteUser({ dispatch }, id) {},
    async getProjects({ commit }) {
      try {
        const response = await axios.get(
          "https://6227da469fd6174ca814fdc5.mockapi.io/api/projects"
        );
        commit("setProjects", response.data);
      } catch (e) {
        console.log(e);
      }
    },
    getProjectById({ commit }, id) {},
    setNewProject({ dispatch }, project) {},
    updateProject({ dispatch }, project) {},
    deleteProject({ dispatch }, id) {},
    getTechSet({ commit }) {},
    logIn({ commit }, login) {},
    uploadDocument({ dispatch }, document) {},
    downloadDocument(url) {},
  },
  modules: {},
});

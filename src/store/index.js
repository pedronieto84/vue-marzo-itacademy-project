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
    //initial value of the fields when creating a new project
    newProject: {
      title: "",
      description: "",
      published: "",
      deadline: "",
      bid: "",
      frameworks: [""],
      files: []
    }
  },
  getters: {
    getIsLogged: (state) => { },
    getIsAdmin: (state) => { },
    getUsers: (state) => { },
    getCurrentUser: (state) => { },
    getProjects: (state) => {
      return state.projects;
    },
    getCurrentProject: (state) => {
      return [];
    },
    getTechSet: (state) => { },
  },
  mutations: {
    setIslogged(state) { },
    setIsAdmin(state, userAdmin) { },
    setCurrentUser(state, user) { },
    setUsers(state, users) { },
    setProjects(state, data) {
      state.projects = data.projects;
      console.log(state.projects)
    },
    setCurrentProject(state, project) { },
    setTechSet(state, techSet) { },

    //mutations for createProject page
    updateNewProjecTitle(state, newTitle) {
      state.newProject.title = newTitle
    },
    updateNewProjecDescription(state, newDescription) {
      state.newProject.description = newDescription
    },
    updateNewDate(state, newDate) {
      state.newProject.published = newDate
    },
    updateDeadline(state, newDeadline) {
      state.newProject.deadline = newDeadline
    },
    updateFrameworks(state, newFrameworks) {
      state.newProject.frameworks = newFrameworks
    },
    updateBid(state, newBid) {
      state.newProject.bid = newBid
    },
    resetNewProject(state) {
      state.newProject = {
        title: "",
        description: "",
        published: "",
        deadline: "",
        bid: "",
        frameworks: [""],
        files: []
      }
    }

  },
  actions: {
    getUsers({ commit }) { },
    getUserById({ commit }, id) { },
    setNewUser({ dispatch }) { },
    deleteUser({ dispatch }, id) { },
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
    getProjectById({ commit }, id) { },

    async setNewProject({ dispatch, state, commit }) {
      try {
        await axios.post(
          "https://6227da469fd6174ca814fdc5.mockapi.io/api/projects", state.newProject
        );
        commit('resetNewProject');
        dispatch("getProjects");
      } catch (e) {
        console.log(e);
      }
    },
    updateProject({ dispatch }, project) { },
    deleteProject({ dispatch }, id) { },
    getTechSet({ commit }) { },
    logIn({ commit }, login) { },
    uploadDocument({ dispatch }, document) { },
    downloadDocument(url) { },
  },
  modules: {},
});

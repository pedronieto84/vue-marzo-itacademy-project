import Vue from "vue";
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
    getCurrentUser: (state) => {},
    getProjects: (state) => {},
    getCurrentProject: (state) => {},
    getTechSet: (state) => {},
  },
  mutations: {
    setIslogged(state) {},
    setIsAdmin(state, userAdmin) {},
    setCurrentUser(state, user) {},
    setUsers(state, users) {},
    setProjects(state, projects) {},
    setCurrentProject(state, project) { },
    setTechSet(state, techSet){},
  },
  actions: {
    getUsers({ commit }) {},
    getUserById({ commit }, id) {},
    setNewUser({ dispatch }) {},
    deleteUser({ dispatch }, id) {},
    getProjects({ commit }) {},
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

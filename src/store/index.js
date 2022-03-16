import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
const API = "https://itacademyvuemarzo.duckdns.org/api";

export default new Vuex.Store({
  state: {
    isLogged: false,
    isAdmin: false,
    users: [],
    currentUser: Object,
    userLogged: { name: "Julius" },
    projects: [],
    currentProject: Object,
    techSet: [],
    //initial value of the fields when creating a new project
    newProject: {
      title: "",
      shortExplanation: "",
      publishedDate: "",
      deadline: "",
      bid: "",
      techSet: [""],
      files: [],
    },
    filesArray: [],
    messageError: "",
  },
  getters: {
    getIsLogged: (state) => {
      return state.isLogged;
    },
    getIsAdmin: (state) => {
      return state.isAdmin;
    },
    getUsers: (state) => {
      return state.users;
    },
    getCurrentUser: (state) => {
      return state.currentUser;
    },
    getUserLogged: (state) => {
      return state.userLogged;
    },
    getProjects: (state) => {
      return state.projects;
    },
    getCurrentProject: (state) => {
      return state.currentProject;
    },
    getTechSet: (state) => {
      return state.techSet;
    },
    getErrorMessage: (state) => {
      return state.errorMessage;
    },
    getFiles: (state) => {
      return state.filesArray;
    },
  },
  mutations: {
    setUserLogged(state, user) {
      state.isLogged = true;
      state.userLogged = user;
      if (user.admin === 1) state.isAdmin = true;
    },
    setIsAdmin(state, userAdmin) {},
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTechSet(state, techSet) {},

    //mutations for createProject page
    updateNewProjectTitle(state, newTitle) {
      state.newProject.title = newTitle;
    },
    updateNewProjectDescription(state, newDescription) {
      state.newProject.shortExplanation = newDescription;
    },
    updateNewDate(state, newDate) {
      state.newProject.publishedDate = newDate;
    },
    updateDeadline(state, newDeadline) {
      state.newProject.deadline = newDeadline;
    },
    updateTechSet(state, newFrameworks) {
      state.newProject.techSet = newFrameworks;
    },
    updateBid(state, newBid) {
      state.newProject.bid = newBid;
    },
    updateFiles(state, file) {
      state.filesArray = file;
    },
    resetNewProject(state) {
      state.newProject = {
        title: "",
        shortExplanation: "",
        publishedDate: "",
        deadline: "",
        bid: "",
        techSet: [""],
        filesArray: [],
        state: "published",
      };
    },
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
    setTechSet(state, techSet) {
      state.techSet = techSet;
    },
    setErrorMessage(state, message) {
      state.ErrorMessage = message;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get(`${API}/users`);
        if (response.error) {
          throw response.error;
        }
        commit("setUsers", response.data);
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async getUserById({ commit }, id) {
      try {
        const response = await axios.get(`${API}/users/${id}`);
        if (response.error) {
          throw response.error;
        }
        commit("setCurrentUser", response.data);
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async setNewUser({ dispatch, commit }, user) {
      try {
        const response = await axios.post(`${API}/user`, {
          name: user.name,
          password: user.password,
          email: user.email,
          typeOfInstitution: user.typeOfInstitution,
        });
        if (response.error) {
          throw response.error;
        }
        setTimeout(() => {
          dispatch("getUsers"), 2000;
        });
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async deleteUser({ dispatch, commit }, id) {
      try {
        const response = await axios.delete(`${API}/users/${id}`);
        if (response.error) {
          throw response.error;
        }
        dispatch("getUsers");
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async getProjects({ commit }) {
      try {
        const response = await axios.get(`${API}/projects`);
        console.log(response);
        if (response.error) {
          throw response.error;
        }
        commit("setProjects", response.data);
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async getProjectById({ commit }, id) {
      try {
        const response = await axios.get(`${API}/project/${id}`);
        if (response.error) {
          throw response.error;
        }
        commit("setCurrentProject", response.data);
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },

    async updateProject({ dispatch, commit }, project) {
      const headers = { _method: "PUT" };
      try {
        const response = await axios.post(
          `${API}/projects`, /// ???????????????????
          {
            project,
          },
          { headers: headers }
        );
        if (response.error) {
          throw response.error;
        }
        dispatch("getProjects");
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },

    async setNewProject({ dispatch, state, commit }, $router) {
      try {
        await axios.post(`${API}/projects`, state.newProject);
        commit("resetNewProject");
        $router.push({ name: "ProjectsPage" });
        dispatch("getProjects");
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },

    async deleteProject({ dispatch }, id) {
      try {
        const response = await axios.delete(`${API}/project/${id}`);
        if (response.error) {
          throw response.error;
        }
        dispatch("getProjects");
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async getTechSet({ commit }) {
      try {
        const response = await axios.get(`${API}/techSet`);
        if (response.error) {
          throw response.error;
        }
        commit("setTechSet", response.data);
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },
    async logIn({ commit }, login) {
      try {
        const response = await axios.post(`${API}/login`, {
          email: login.email,
          password: login.password,
        });
        console.log(response.data.mensaje);
        if (response.data.mensaje) {
          throw response.data.mensaje;
        }
        commit("setUserLogged", response.data[0]);
      } catch (e) {
        commit("setErrorMessage", e);
        console.log(response);
        // Redirect goBack(-1)
      }
    },
    uploadDocument({ dispatch }, document) {},
    downloadDocument(url) {},
    async uploadFiles({ getters }) {
      const upload = getters.getFiles;
      try {
        const response = await axios.post(`${API}/proyecto`, { upload });
        if (response.error) {
          throw response.error;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});

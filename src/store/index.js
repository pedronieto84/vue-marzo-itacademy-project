import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);
const API = "https://itacademyvuemarzo.duckdns.org/api";

export default new Vuex.Store({
  state: {
    isLogged: false,
    isAdmin: false,
    users: [],
    currentUser: Object,
    userLogged: Object,
    projects: [],
    currentProject: Object,
    techSet: [],
    //initial value of the fields when creating a new project
    newProject: {
      user_id: Number,
      title: "",
      shortExplanation: "",
      publishedDate: "",
      deadline: "",
      bid: "",
      techSet: [""],
    },
    errorMessage: "",
    filesArray: [],
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
      state.newProject.user_id = state.userLogged.id;
      if (user.admin) state.isAdmin = true;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    //mutations for createProject page
    updateNewProjectTitle(state, newTitle) {
      state.newProject.title = newTitle;
    },
    // Addition in order to accomplish lastMinute project protocol changes
    setUserIdProject(state, id) {
      state.newProject.user_id = id;
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
        state: "published",
      };
      state.filesArray = [];
    },
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
    setTechSet(state, techSet) {
      state.techSet = techSet;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
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
        console.log(id);
        const response = await axios.get(`${API}/user/${id}`);
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
          verified: true,
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
    async logIn({ commit, dispatch }, login) {
      try {
        const response = await axios.post(`${API}/login`, {
          email: login.email,
          password: login.password,
        });
        console.log(response);
        if (response.data.message) {
          throw response.data;
        }
        commit("setUserLogged", response.data);
      } catch (e) {
        commit("setErrorMessage", e.message);
        console.log(e);
        // Redirect goBack(-1)
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
      try {
        const projectToJSON = JSON.stringify(project);
        const response = await axios.post(`${API}/project/${project.id}`, {
          request: projectToJSON,
          _method: "PUT",
        });
        if (response.error) {
          throw response.error;
        }
        dispatch("getProjects");
      } catch (e) {
        commit("setErrorMessage", { error: `${e.message}` });
      }
    },

    async setNewProject({ dispatch, state, commit }, $router) {
      let formData = new FormData();
      let filesArray = [];
      for (let i; this.state.filesArray.lengh - 1; i++) {}
      try {
        // const response = await axios.post(
        //   `${API}/project`,
        //   {
        //     request: JSON.stringify(state.newProject),
        //     filesArray: arraySend,
        //   },
        //   {
        //     headers: { "Content-type": "multipart/form-data" },
        //   }
        // );
        const response = await axios.post(`${API}/project`, {
          request: JSON.stringify({
            ...state.newProject,
            publishedDate: Math.floor(Date.now() / 1000),
          }),
        });
        console.log(response);
        if (response.data.message) {
          throw response.data;
        }
        commit("resetNewProject");
        dispatch("getProjects");
        // $router.push({ name: "ProjectsPage" });
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

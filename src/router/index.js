import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
import CreateProjectPage from "../views/CreateProjectPage.vue";
import MyAccountPage from "../views/MyAccountPage.vue";
import LoginForm from "../views/LoginForm.vue";
import CreateAccount from "../views/CreateAccount.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/project-detail/:id",
    name: "ProjectDetailPage",
    component: () => {
      return import(
        /* webpackChunkName: 'ProjectDetailPage' */ "../views/ProjectDetailPage.vue"
      );
    },
  },
  {
    path: "/form-login",
    name: "FormLogin",
    component: () => {
      return import(
        /* webpackChunkName: 'FormLogin' */ "../views/FormLogin.vue"
      );
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => {
      return import(
        /* webpackChunkName: 'Register' */ "../views/Register.vue"
      );
    },
  },
  {
    path: "/create-project",
    name: "CreateProjectPage",
    component: CreateProjectPage,
  },
  {
    path: "/my-account-",
    name: "MyAccountPage",
    component: MyAccountPage,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "Register",
    component: () => {
      import(/* webpackChunkName: 'Register' */ 'Register.vue')
    },
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

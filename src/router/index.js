import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
import CreateProjectPage from "../views/CreateProjectPage.vue";
import MyAccountPage from "../views/MyAccountPage.vue";
import LoginForm from "../views/LoginForm.vue";
import CreateAccount from "../views/CreateAccount.vue";
import AdminPage from '../views/AdminPage.vue';

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
    path: "/create-project",
    name: "CreateProjectPage",
    component: CreateProjectPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
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
      return import(
        /* webpackChunkName: 'Register' */ "../views/Register.vue"
        );
      },
    },
    {
      path: "/create-account",
      name: "CreateAccount",
      component: CreateAccount,
    },
    {
      path: "/my-account",
      name: "MyAccountPage",
      component: MyAccountPage,
    },
  ];
  
  const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

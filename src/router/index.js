import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
import CreateProjectPage from "../views/CreateProjectPage.vue"
import MyAccountPage from "../views/MyAccountPage.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/project-detail-page/:id",
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
    path: "/create-project",
    name: "CreateProjectPage",
    component: CreateProjectPage
  },
  {
    path: "/my-account-page",
    name: "MyAccountPage",
    component: MyAccountPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

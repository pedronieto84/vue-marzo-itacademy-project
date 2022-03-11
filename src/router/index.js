import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
import CreateProjectPage from "../views/CreateProjectPage.vue";
import MyAccountPage from "../views/MyAccountPage.vue";
import LoginForm from "../views/LoginForm.vue"

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
      import(
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
    path: "/my-account-page",
    name: "MyAccountPage",
    component: MyAccountPage,
  },
  {
    path: "/login-form",
    name: "LoginForm",
    component: LoginForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

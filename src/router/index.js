import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
import MyAccountPage from "../views/MyAccountPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProjectsPage",
    component: ProjectsPage,
  },

  {
    path: "/ProjectDetailPage/:id",
    name: "ProjectDetailPage",
    coponent: () => {
      import(
        /* webpackChunkName: 'ProjectDetailPage' */ "../views/ProjectDetailPage.vue"
      );
    },
  },

  {
    path: "/MyAccountPage",
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

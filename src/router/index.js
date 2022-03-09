import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsPage from "../views/ProjectsPage.vue";
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

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

<template>
  <div class="home container">
    <!-- The NavComponent goes Here -->
    <h1 class="text-center mt-5 mb-5">Projects Page</h1>
    <b-row>
      <b-col class="content">
        <article
          class="aticle-card"
          v-for="project in projects"
          :key="project.id"
        >
          <router-link
            :to="{ path: '/ProjectDetailPage/', query: { id: project.id } }"
          >
            <project-card
              :title="project.title"
              :shortDescription="project.shortExplanation"
            ></project-card>
          </router-link>
        </article>
      </b-col>
    </b-row>
    <b-row class="chat">
      <chat-component></chat-component>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import ProjectCard from "@/components/ProjectCard.vue";
import ChatComponent from "@/components/ChatComponent.vue";

export default {
  name: "ProjectsPage",
  components: { ProjectCard, ChatComponent },
  data() {
    return {
      id: 1,
      projects: [],
    };
  },
  created: function () {
    store.dispatch("getProjects");
  },
  computed: {
    projectsStore: function () {
      return store.getters.getProjects;
    },
  },
  watch: {
    projectsStore: function () {
      // Clon the object in order to avoid mutate state outside the store
      this.projects = store.getters.getProjects.map((a) => {
        return { ...a };
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  height: 100vh

.content
  width: 90%
  display: flex
  flex-wrap: wrap
  justify-content: start

  a
    text-decoration: none

.chat
  display: flex
  justify-content: end
</style>

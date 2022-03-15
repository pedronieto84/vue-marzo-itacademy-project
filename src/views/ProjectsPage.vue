<template>
  <div class="container mt-4">
    <b-row>
      <b-col class="content d-flex ml-4">
        <article
          class="aticle-card"
          v-for="project in projects"
          :key="project.id"
        >
          <router-link
            :to="{ path: '/project-detail/', query: { id: project.id } }"
          >
            <project-card
              :title="project.title"
              :shortDescription="project.shortExplanation"
            ></project-card>
          </router-link>
        </article>
      </b-col>
    </b-row>
    <div class="chat">
      <chat-component></chat-component>
    </div>
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
  column-gap: 1rem
  flex-wrap: wrap
  margin: 1rem .5rem

  a
    text-decoration: none

.chat
  position: sticky
  top: 90vh
</style>

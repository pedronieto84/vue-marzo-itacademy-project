<template>
  <div class="container">
    <account-page-nav @changeView="changeView" :views="views" />
    <div class="view-container">
      <data-edit-form v-if="currentView === 'data'" />
      <projects-edit-table
        v-if="currentView === 'projects' && projects.length > 0"
        v-model="projects"
        @remove="handleRemoveProject"
      />
      <div v-else>You still have no projects</div>
    </div>
  </div>
</template>

<script>
import AccountPageNav from "@/components/AccountPageNav.vue";
import DataEditForm from "@/components/DataEditForm.vue";
import ProjectsEditTable from "@/components/ProjectsEditTable.vue";

export default {
  name: "MyAccountPage",
  components: {
    AccountPageNav,
    DataEditForm,
    ProjectsEditTable,
  },
  data() {
    return {
      views: ["My Data", "My Projects"],
      currentView: "data",
      projects: [],
    };
  },
  created() {
    this.projects = this.$store.state.currentUser.projectsPublished;
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
    getProjects() {
      const test = [...this.currentUser.projectsPublished]; // problem passing computed to v-model
      return test;
    },
  },
  methods: {
    changeView(view) {
      view === "My Data"
        ? (this.currentView = "data")
        : (this.currentView = "projects");
    },
    async handleRemoveProject(project) {
      await this.$store.dispatch("deleteProject", project.id);
    },
  },
};
</script>

<style scoped>
.view-container {
  border: 2px solid #666;
}
</style>

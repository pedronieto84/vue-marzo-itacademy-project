<template>
  <div class="container">
    <account-page-nav @changeView="changeView" :views="views" />
    <div class="view-container">
      <data-edit-form v-if="currentView === 'data'" />
      <projects-edit-table
        v-if="
          currentView === 'projects' && currentUser.projectsPublished.length > 0
        "
        v-model="projects"
        @remove="handleRemoveProject"
      />
      <div
        v-if="
          currentView === 'projects' && currentUser.projectsPublished.length < 1
        "
      >
        You still have no projects
      </div>
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
      currentView: "projects",
    };
  },
  created() {
    const userId = this.$store.state.userLogged.id;
    this.$store.dispatch("getUserById", userId);
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
    projects() {
      return this.$store.getters.getCurrentUser.projectsPublished;
    },
  },
  methods: {
    changeView(view) {
      view === "My Data"
        ? (this.currentView = "data")
        : (this.currentView = "projects");
    },
    async handleRemoveProject(id) {
      await this.$store.dispatch("deleteProject", id);
    },
  },
};
</script>

<style scoped>
.view-container {
  border: 2px solid #666;
}
</style>

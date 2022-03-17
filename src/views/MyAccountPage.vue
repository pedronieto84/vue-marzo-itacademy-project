<template>
  <div class="container">
    <account-page-nav @changeView="changeView" :views="views" />
    <div class="view-container">
      <data-edit-form v-if="currentView === 'data'" />
      <projects-edit-table
        v-if="currentView === 'projects'"
        v-model="projects"
        @remove="handleRemoveProject"
      />
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
      projects: [
        {
          id: 3,
          title: "Zolore Omnis Project",
          publishedDate: "1650136649",
          deadline: "1656087529",
          shortExplanation:
            "Omnis dolorum quis assumenda nihil ducimus minus recusandae. Et inventore animi voluptatem architecto et quae ad impedit.",
          state: "refused",
          bid: "20409.73",
        },
        {
          id: 9,
          title: "Ullam Necessitatibus Voluptatem Project",
          publishedDate: 1650917598,
          deadline: 1654657134,
          shortExplanation:
            "Distinctio quam iusto nemo qui sed. Necessitatibus totam molestiae est ut nostrum.",
          state: "finished",
          bid: 94919.16,
        },
      ],
    };
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

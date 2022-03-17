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
          title: "Dolore Omnis Project",
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
          publishedDate: "1650917598",
          deadline: "1654657134",
          shortExplanation:
            "Distinctio quam iusto nemo qui sed. Necessitatibus totam molestiae est ut nostrum.",
          state: "finished",
          bid: "94919.16",
        },
        {
          id: 17,
          title: "Quam Nostrum Neque Project",
          publishedDate: "1649592109",
          deadline: "1655337139",
          shortExplanation:
            "Qui sed animi adipisci beatae quas quia saepe eos. Aut est fuga dignissimos quod.",
          state: "accepted",
          bid: "48161.08",
        },
        {
          id: 37,
          title: "Et Libero Corporis Project",
          publishedDate: "1650686670",
          deadline: "1658177622",
          shortExplanation:
            "Consequatur est molestiae rem quidem magnam cupiditate quidem. Laudantium neque illo maxime quisquam magnam quia ut.",
          state: "finished",
          bid: "1513.81",
        },
        {
          id: 50,
          title: "Optio Impedit Project",
          publishedDate: "1650931205",
          deadline: "1659618602",
          shortExplanation:
            "Error voluptatum odio ut a. Tempora voluptatem dolor occaecati.",
          state: "finished",
          bid: "9667.78",
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

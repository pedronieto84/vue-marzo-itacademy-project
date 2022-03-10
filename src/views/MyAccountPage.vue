<template>
  <div class="container">
    <account-page-nav @changeView="changeView" :views="views" />
    <div class="view-container">
      <data-edit-form v-if="currentView === 'data'" />
      <projects-edit-table v-if="currentView === 'projects'" />
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
    };
  },
  methods: {
    changeView(view) {
      view === "My Data"
        ? (this.currentView = "data")
        : (this.currentView = "projects");
    },
  },
};
</script>

<style scoped>
.view-container {
  border: 2px solid #666;
}
</style>

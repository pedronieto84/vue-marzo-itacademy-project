<template>
  <div class="container">
    <account-page-nav @changeView="changeView" :views="views" />
    <div class="view-container">
      <data-edit-form v-if="currentView === 'data'" />
    </div>
  </div>
</template>

<script>
import AccountPageNav from "@/components/AccountPageNav.vue";
import DataEditForm from "@/components/DataEditForm.vue";

export default {
  name: "MyAccountPage",
  components: {
    AccountPageNav,
    DataEditForm,
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

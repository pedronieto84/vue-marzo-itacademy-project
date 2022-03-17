<template>
  <div class="container">
    <div class="view-container">
      <admin-table
        v-model="projects"
        :options="options"
        @remove="handleRemoveProject"
      />
    </div>
  </div>
</template>

<script>
import AdminTable from "@/components/AdminTable.vue";
export default {
  name: "AdminPage",
  components: {
    AdminTable,
  },
  created() {
    this.$store.dispatch("getProjects");
  },
  data() {
    return {
      options: ["accepted", "published", "refused", "doing", "finished"],
      projects: [],
    };
  },
  computed: {
    projectsFromStore() {
      return this.$store.getters.getProjects;
    },
  },
  watch: {
    projectsFromStore: function (newVal, oldVal) {
      this.projects = [...newVal];
    },
  },
  methods: {
    async handleRemoveProject(projectId) {
      console.log(projectId);
      await this.$store.dispatch("deleteProject", projectId);
    },
  },
};
</script>

<style scoped>
.view-container {
  margin-top: 3rem;
  border: 2px solid #666;
}
</style>

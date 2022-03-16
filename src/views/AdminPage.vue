<template>
  <div class="container">
    <div class="view-container">
      <admin-table
        v-model="projects"
        :fields="fields"
        :options="options"
        @remove="handleRemoveProject($event)"
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
      fields: [
        { key: "title", label: "Name", sortable: true, type: "text" },
        {
          key: "publishedDate",
          label: "Published",
          sortable: true,
          type: "date",
        },
        { key: "deadline", sortable: true, type: "date" },
        { key: "bid", sortable: true, type: "number" },
        {
          key: "state",
          sortable: true,
          type: "select",
        },
        { key: "edit", label: "", type: "edit" },
      ],
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

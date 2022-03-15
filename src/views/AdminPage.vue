<template>
  <div class="container">
    <div class="view-container">
      <admin-table v-model="projects" :fields="fields" />
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
  data() {
    return {
      projects: [
        {
          title: "Project 1",
          id: 1,
          user_id: 666,
          publishedDate: 1646902840,
          deadline: 1649992840,
          techset: ["CSS", "JS"],
          filesArray: ["delete me"],
          shortExplanation: ["idk"],
          state: "doing",
          bid: 1200,
        },
        {
          title: "Project 2",
          id: 2,
          user_id: 666,
          publishedDate: 1646802840,
          deadline: 1651232840,
          techset: ["CSS", "HTML"],
          filesArray: ["delete me"],
          shortExplanation: ["idk"],
          state: "refused",
          bid: 4200,
        },
        {
          title: "Project 3",
          id: 3,
          user_id: 666,
          publishedDate: 1646902840,
          deadline: 1649992840,
          techset: ["CSS", "JS"],
          filesArray: ["delete me"],
          shortExplanation: ["idk"],
          state: "doing",
          bid: 1800,
        },
        {
          title: "Project 4",
          id: 4,
          user_id: 666,
          publishedDate: 1646902840,
          deadline: 1649992840,
          techset: ["CSS", "JS"],
          filesArray: ["delete me"],
          shortExplanation: ["idk"],
          state: "doing",
          bid: 2300,
        },
      ],
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
    };
  },
};
</script>

<style scoped>
.view-container {
  margin-top: 3rem;
  border: 2px solid #666;
}
</style>

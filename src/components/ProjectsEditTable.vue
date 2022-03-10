<template>
    <b-table
      class="border mx-5 my-5"
      responsive="true"
      striped
      hover
      :items="items"
      :fields="fields"
    >
    <template></template>
    </b-table>
</template>

<script>
export default {
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
          state: "doing",
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
        { key: "name", sortable: true },
        { key: "published", sortable: true },
        { key: "deadline", sortable: true },
        { key: "bid", sortable: true },
        { key: "state", sortable: true },
      ],
    };
  },
  computed: {
    items() {
      const itemsArray = [];
      this.projects.forEach((project) => {
        const publishedToDate = new Date(
          project.publishedDate * 1000
        ).toLocaleString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        const deadlineToDate = new Date(project.deadline * 1000).toLocaleString(
          undefined,
          {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }
        );
        const item = {
          name: project.title,
          published: publishedToDate,
          deadline: deadlineToDate,
          bid: project.bid,
          state: project.state,
        };
        itemsArray.push(item);
      });
      return itemsArray;
    },
  },
};
</script>

<style scoped>
.border {
  border: 2px solid #666 !important;
  border-radius: 5px;
}
::v-deep .sr-only {
  display: none !important;
}
</style>

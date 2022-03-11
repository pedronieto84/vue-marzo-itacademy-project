<template>
  <div>
    <b-table
      class="border mx-5 my-5"
      responsive="true"
      striped
      hover
      :items="items"
      :fields="fields"
    >
      <template #cell(name)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="text"
          v-model="items[data.index].name"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(published)="data">
        <b-form-datepicker
          v-if="items[data.index].isEdit"
          v-model="items[data.index].published"
        ></b-form-datepicker>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(deadline)="data">
        <b-form-datepicker
          v-if="items[data.index].isEdit"
          v-model="items[data.index].deadline"
        ></b-form-datepicker>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(bid)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="number"
          v-model="items[data.index].bid"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(state)="data">
        <b-form-select
          v-if="items[data.index].isEdit"
          v-model="items[data.index].state"
          :options="['accepted', 'published', 'refused', 'doing', 'finished']"
        ></b-form-select>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(edit)="data">
        <b-button @click="handleEdit(data)">
          <span v-if="!items[data.index].isEdit">Edit</span>
          <span v-else>Done</span>
        </b-button>
      </template>
    </b-table>
    <pre>
      {{ items }}
    </pre>
  </div>
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
        { key: "edit", label: ""}
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
          isEdit: false
        };
        itemsArray.push(item);
      });
      return itemsArray;
    },
  },
  methods: {
    handleEdit(data) {
      this.items[data.index].isEdit = !this.items[data.index].isEdit;
    }
  }
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

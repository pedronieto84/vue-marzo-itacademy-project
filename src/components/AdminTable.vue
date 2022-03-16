<template>
  <div>
    <b-table
      class="border mx-5 my-5"
      responsive
      striped
      hover
      :items="tableItems"
      :fields="fields"
    >
      <template #cell(title)="data">
        <b-form-input
          v-if="tableItems[data.index].isEdit"
          type="text"
          :value="tableItems[data.index].title"
          @blur="(e) => inputHandler(e.target.value, data.index, 'title')"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>

      <template #cell(publishedDate)="data">
        <span>{{ convertDateToLocale(data.value) }}</span>
      </template>

      <template #cell(deadline)="data">
        <b-form-datepicker
          value-as-date
          v-if="tableItems[data.index].isEdit"
          v-model="tableItems[data.index].deadlineToDatepicker"
        ></b-form-datepicker>
        <span v-else>{{ convertDateToLocale(data.value) }}</span>
      </template>

      <template #cell(bid)="data">
        <b-form-input
          v-if="tableItems[data.index].isEdit"
          type="number"
          min="0"
          :value="tableItems[data.index].bid"
          @blur="
            (e) => inputHandler(Math.abs(e.target.value), data.index, 'bid')
          "
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>

      <template #cell(state)="data">
        <b-form-select
          v-if="tableItems[data.index].isEdit"
          :options="options"
          :value="tableItems[data.index].state"
          @change="(value) => inputHandler(value, data.index, 'state')"
        ></b-form-select>
        <span v-else>{{ data.value }}</span>
      </template>

      <template #cell(edit)="data">
        <button class="edit-button" @click="handleEdit(data)">
          <span v-if="!tableItems[data.index].isEdit"
            ><img src="@/assets/icons/pencil.png" alt="Edit"
          /></span>
          <span v-else class="done-span" @click="updateDBProject(data)"
            ><img src="@/assets/icons/done.png" alt="Done"
          /></span>
        </button>
        <button
          v-if="!tableItems[data.index].isEdit"
          class="delete-button"
          @click="handleDelete(tableItems[data.index])"
        >
          <img src="@/assets/icons/remove.png" alt="Delete" />
        </button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
    fields: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      tableItems: this.mapItems(this.value),
    };
  },
  watch: {
    value(newVal) {
      this.tableItems = this.mapItems(newVal);
    },
  },
  methods: {
    mapItems(data) {
      return data.map((item, index) => ({
        ...item,
        isEdit: this.tableItems[index] ? this.tableItems[index].isEdit : false,
        deadline: parseInt(item.deadline),
        bid: parseFloat(item.bid),
        publishedDate: parseInt(item.publishedDate),
        deadlineToDatepicker: this.convertDateToDatepicker(
          parseInt(item.deadline)
        ),
      }));
    },
    inputHandler(value, index, key) {
      this.tableItems[index][key] = value;
      this.$set(this.tableItems, index, this.tableItems[index]);
      this.$emit("input", this.tableItems);
    },
    handleEdit(data) {
      this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit;
    },
    handleDelete(index) {
      const id = index.id;
      this.tableItems = this.tableItems.filter((item) => item.id !== index.id);
      this.$emit("input", this.tableItems);
      this.$emit("remove", id);
    },
    convertDateToLocale(date) {
      const localeDate = new Date(date * 1000).toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return localeDate;
    },
    convertDateToDatepicker(date) {
      const datepickerDate = new Date(date * 1000);
      let dd = datepickerDate.getDate();
      let mm = datepickerDate.getMonth() + 1;
      const yyyy = datepickerDate.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return yyyy + "-" + mm + "-" + dd;
    },
    convertDeadlineToUnixDate(data) {
      data.item.deadline = Math.floor(
        new Date(data.item.deadlineToDatepicker).getTime() / 1000
      );
    },
    updateDBProject(data) {
      this.convertDeadlineToUnixDate(data);
      let updatedProject = { ...data.item };
      updatedProject.bid = updatedProject.bid.toString();
      updatedProject.deadline = updatedProject.deadline.toString();
      updatedProject.publishedDate = updatedProject.publishedDate.toString();
      delete updatedProject.isEdit;
      delete updatedProject.deadlineToDatepicker;
      this.$store.dispatch("updateProject", updatedProject);
    },
  },
};
</script>

<style scoped>
.table-responsive {
  max-width: 90%;
}
.border {
  border: 2px solid #666 !important;
  border-radius: 5px;
}
::v-deep .sr-only {
  display: none !important;
}
.edit-button {
  max-height: 36px;
  border: none;
  background-color: transparent;
}
.edit-button img,
.delete-button img {
  max-height: 30px;
}
.delete-button {
  margin-left: 1rem;
  max-height: 36px;
  border: none;
  background-color: transparent;
}
</style>

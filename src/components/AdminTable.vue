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
        <span>{{ data.value }}</span>
      </template>

      <template #cell(edit)="data">
        <button class="edit-button" @click="handleEdit(data)">
          <span v-if="!tableItems[data.index].isEdit"
            ><img src="@/assets/icons/pencil.png" alt="Edit"
          /></span>
          <span
            v-else
            class="done-span"
            @click="convertDeadlineToUnixDate(data)"
            ><img src="@/assets/icons/done.png" alt="Done"
          /></span>
        </button>
        <button
          v-if="!tableItems[data.index].isEdit"
          class="delete-button"
          @click="handleDelete(data.index)"
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
  },
  data() {
    return {
      tableItems: this.value.map((item) => ({
        ...item,
        isEdit: false,
        deadlineToDatepicker: this.convertDateToDatepicker(item.deadline),
      })),
    };
  },
  methods: {
    inputHandler(value, index, key) {
      console.log(value);
      this.tableItems[index][key] = value;
      this.$set(this.tableItems, index, this.tableItems[index]);
      this.$emit("input", this.tableItems);
    },
    handleEdit(data) {
      this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit;
    },
    handleDelete(index) {
      this.tableItems = this.tableItems.filter((item, i) => i !== index);
      this.$emit("input", this.tableItems);
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

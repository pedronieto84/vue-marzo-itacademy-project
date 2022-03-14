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
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker
          v-if="field.type === 'date' && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="convertDateToDatepicker(tableItems[data.index][field.key])"
          @blur="(e) => inputHandler(e.target.value, data.index, field.key)"
        ></b-form-datepicker>
        <b-form-select
          v-else-if="field.type === 'select' && tableItems[data.index].isEdit"
          :key="index"
          :value="tableItems[data.index][field.key]"
          @blur="(e) => inputHandler(e.target.value, data.index, field.key)"
          :options="field.options"
        ></b-form-select>
        <div :key="index" v-else-if="field.type === 'edit'">
          <button class="edit-button" @click="handleEdit(data)">
            <span v-if="!tableItems[data.index].isEdit"
              ><img src="@/assets/icons/pencil.png" alt="Edit"
            /></span>
            <span v-else class="done-span"
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
        </div>
        <b-form-input
          v-else-if="field.type && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="tableItems[data.index][field.key]"
          @blur="(e) => inputHandler(e.target.value, data.index, field.key)"
        ></b-form-input>
        <span :key="index" v-else-if="field.type === 'date'">{{
          convertDateToLocale(data.value)
        }}</span>
        <span :key="index" v-else>{{ data.value }}</span>
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
      tableItems: this.value.map((item) => ({ ...item, isEdit: false })),
    };
  },
  methods: {
    inputHandler(value, index, key) {
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

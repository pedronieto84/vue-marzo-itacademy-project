<template>
  <div>
    <b-table
      class="border mx-5 my-5"
      responsive="true"
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
          :value="tableItems[data.index][field.key]"
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
          <b-button @click="handleEdit(data)">
            <span v-if="!tableItems[data.index].isEdit">Edit</span>
            <span v-else>Done</span>
          </b-button>
          <b-button
            class="delete-button"
            variant="danger"
            @click="handleDelete(data.index)"
            >Delete</b-button
          >
        </div>
        <b-form-input
          v-else-if="field.type && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="tableItems[data.index][field.key]"
          @blur="(e) => inputHandler(e.target.value, data.index, field.key)"
        ></b-form-input>
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
      this.$emit('input', this.tableItems);
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

<template>
  <div>
    <div class="border mx-5 my-5 overflow-x-auto">
      <div class="header">
        <h3 class="column-header" @click="handleSort('name')">Name</h3>
        <h3 class="column-header" @click="handleSort('published')">
          Published
        </h3>
        <h3 class="column-header" @click="handleSort('deadline')">Deadline</h3>
        <h3 class="column-header" @click="handleSort('bid')">Bid</h3>
        <h3 class="column-header" @click="handleSort('state')">State</h3>
      </div>

      <div v-for="item in orderedItems" :key="item.id" class="table-row">
        <div class="project-name">
          <b-form-input
            v-if="item.isEdit"
            type="text"
            :value="item.title"
            @blur="(e) => inputHandler(e.target.value, item.id, 'title')"
          ></b-form-input>
          <span v-else>{{ item.title }}</span>
        </div>

        <div class="project-published">
          <span>{{ convertDateToLocale(item.publishedDate) }}</span>
        </div>

        <div class="project-deadline">
          <b-form-datepicker
            value-as-date
            v-if="item.isEdit"
            v-model="item.deadlineToDatepicker"
          >
          </b-form-datepicker>
          <span v-else>{{ convertDateToLocale(item.deadline) }}</span>
        </div>

        <div class="project-bid">
          <b-form-input
            v-if="item.isEdit"
            type="number"
            min="0"
            :value="item.bid"
            @blur="
              (e) => inputHandler(Math.abs(e.target.value), item.id, 'bid')
            "
          ></b-form-input>
          <span v-else>{{ item.bid }}</span>
        </div>

        <div class="project-state">
          <b-form-select
            v-if="item.isEdit"
            :options="options"
            :value="item.state"
            @change="(value) => inputHandler(value, item.id, 'state')"
          ></b-form-select>
          <span v-else>{{ item.state }}</span>
        </div>

        <div class="table-buttons">
          <button class="edit-button" @click="handleEdit(item)">
            <span v-if="!item.isEdit"
              ><img src="@/assets/icons/pencil.png" alt="Edit"
            /></span>
            <span v-else class="done-span" @click="updateDBProject(item)"
              ><img src="@/assets/icons/done.png" alt="Done"
            /></span>
          </button>
          <button
            v-if="!item.isEdit"
            class="delete-button"
            @click="handleDelete(item.id)"
          >
            <img src="@/assets/icons/remove.png" alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      tableItems: this.mapItems(this.value),
      sortOrder: "id",
    };
  },
  watch: {
    value(newVal) {
      this.tableItems = this.mapItems(newVal);
    },
  },
  computed: {
    orderedItems() {
      switch (this.sortOrder) {
        case "id":
          return this.tableItems.sort((a, b) =>
            a.id > b.id ? 1 : a.id === b.id ? 0 : -1
          );
        case "name":
          return this.tableItems.sort((a, b) =>
            a.title > b.title ? 1 : a.title === b.title ? 0 : -1
          );
        case "published":
          return this.tableItems.sort((a, b) =>
            a.publishedDate > b.publishedDate
              ? 1
              : a.publishedDate === b.publishedDate
              ? 0
              : -1
          );
        case "deadline":
          return this.tableItems.sort((a, b) =>
            a.deadline > b.deadline ? 1 : a.deadline === b.deadline ? 0 : -1
          );
        case "bid":
          return this.tableItems.sort((a, b) =>
            a.bid > b.bid ? 1 : a.bid === b.bid ? 0 : -1
          );
        case "state":
          return this.tableItems.sort((a, b) =>
            a.state > b.state ? 1 : a.state === b.state ? 0 : -1
          );
        default:
          return this.tableItems.sort((a, b) =>
            a.id > b.id ? 1 : a.id === b.id ? 0 : -1
          );
      }
    },
  },
  methods: {
    handleSort(property) {
      this.sortOrder !== property
        ? (this.sortOrder = property)
        : (this.sortOrder = "id");
    },
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
    inputHandler(value, id, key) {
      const index = this.tableItems.findIndex((item) => (item.id = id));
      this.tableItems[index][key] = value;
      this.$set(this.tableItems, index, this.tableItems[index]);
      this.$emit("input", this.tableItems);
    },
    handleEdit(item) {
      item.isEdit = !item.isEdit;
    },
    handleDelete(index) {
      console.log(index);
      this.tableItems = this.tableItems.filter((item) => item.id !== index);
      this.$emit("input", this.tableItems);
      this.$emit("remove", index);
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
    convertDeadlineToUnixDate(item) {
      item.deadline = Math.floor(
        new Date(item.deadlineToDatepicker).getTime() / 1000
      );
    },
    updateDBProject(project) {
      this.convertDeadlineToUnixDate(project);
      let updatedProject = { ...project };
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
.border {
  border: 2px solid #666 !important;
  border-radius: 5px;
}
.overflow-x-auto {
  overflow-x: auto;
}
.header {
  display: flex;
  padding: 12px;
  border-bottom: 2px solid #d8d8d8;
}
.column-header {
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 0.65em 1em;
  background-position: right calc(0.75rem / 2) center;
  padding-right: calc(0.75rem + 0.65em);
}
.table-row {
  padding: 12px;
  border-bottom: 1px solid #d8d8d8;
}
.table-row:last-of-type {
  border-bottom: none;
}
.table-row:nth-child(even) {
  background-color: #f5f5f5;
}
.table-row,
.column-header {
  display: flex;
}
.table-row:hover {
  background-color: #f2f7fa;
}
.project-name,
.column-header:nth-of-type(1) {
  width: 38ch;
}
.project-published,
.column-header:nth-of-type(2) {
  width: 14ch;
}
.project-deadline,
.column-header:nth-of-type(3) {
  width: 14ch;
}
.project-bid,
.column-header:nth-of-type(4) {
  width: 12ch;
}
.project-state,
.column-header:nth-of-type(5) {
  width: 10ch;
}
.table-buttons {
  padding-left: 2rem;
}
.table-responsive {
  max-width: 90%;
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

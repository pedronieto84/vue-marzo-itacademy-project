<template>
  <div>
    <div>
      Published:
      <b-form-datepicker v-model="publishedDate"></b-form-datepicker>
    </div>
    <div>
      Deadline:
      <b-form-datepicker v-model="deadline"></b-form-datepicker>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "DateInput",
  computed: {
    publishedDate: {
      get() {
        return this.$store.state.newProject.published;
      },
      set(newDate) {
        this.$store.commit("updateNewDate", newDate);
      },
    },
    deadline: {
      get() {
        return this.$store.state.newProject.deadline;
      },
      set(newDeadline) {
        this.$store.commit("updateDeadline", newDeadline);
      },
    },
  },
};
</script>
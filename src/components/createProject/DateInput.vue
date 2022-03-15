<template>
  <div>
    <b-row>
      <b-form-input>
        <b-col>
          <div class="datepicker">
            Published:
            <b-form-datepicker v-model="publishedDate"></b-form-datepicker>
          </div>
        </b-col>
        <b-col>
          <div class="datepicker">
            Deadline:
            <b-form-datepicker v-model="deadline"></b-form-datepicker>
          </div>
        </b-col>
      </b-form-input>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "DateInput",
  computed: {
    publishedDate: {
      get() {
        return this.$store.state.newProject.publishedDate;
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

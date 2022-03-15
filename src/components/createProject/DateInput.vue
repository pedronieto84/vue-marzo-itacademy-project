<template>
  <div>
    <b-row>
      <b-col>
        <div>
          <label for="published-date">Published:</label>
          <b-form-datepicker
            id="published-date"
            v-model="publishedDate"
            :state="ispublishedDateValid"
          ></b-form-datepicker>
        </div>
      </b-col>
      <b-col>
        <div>
          <label for="deadline">Deadline:</label>
          <b-form-datepicker
            id="deadline"
            v-model="deadline"
            :state="isDeadlineValid"
            :min="publishedDate"
          ></b-form-datepicker>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "DateInput",
  props: {
    ispublishedDateValid: Boolean,
    isDeadlineValid: Boolean,
  },
  computed: {
    publishedDate: {
      get() {
        return this.$store.state.newProject.publishedDate;
      },
      set(newDate) {
        // let toMs = new Date(newDate).getTime();
        this.$store.commit("updateNewDate", newDate);
      },
    },
    deadline: {
      get() {
        return this.$store.state.newProject.deadline;
      },
      set(newDeadline) {
        // let toMs = new Date(newDeadline).getTime();
        this.$store.commit("updateDeadline", newDeadline);
      },
    },
  },
};
</script>

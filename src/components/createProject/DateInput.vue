<template>
  <div>
    <b-row>
      <b-col>
        <div>
          <label for="published-date" class="date-title mt-4">Published:</label>
          <b-form-datepicker
            id="published-date"
            :value="new Date()"
            readonly
          ></b-form-datepicker>
        </div>
      </b-col>
      <b-col>
        <div>
          <label for="deadline" class="date-title mt-4">Deadline:</label>
          <b-form-datepicker
            id="deadline"
            v-model="deadline"
            :state="isDeadlineValid"
            :min="new Date()"
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
    isDeadlineValid: Boolean,
  },
  data() {
    return {
      deadline: "",
    };
  },
  watch: {
    deadline: function () {
      this.$store.commit(
        "updateDeadline",
        this.convertDeadlineToUnixDate(this.deadline)
      );
    },
  },
  methods: {
    convertDeadlineToUnixDate(data) {
      return Math.floor(new Date(data).getTime() / 1000);
    },
  },

  // computed: {
  //   publishedDate: {
  //     get() {
  //       return this.$store.state.newProject.publishedDate;
  //     },
  //     set(newDate) {
  //       // let toMs = new Date(newDate).getTime();
  //       this.$store.commit("updateNewDate", newDate);
  //     },
  //   },
  //   deadline: {
  //     get() {
  //       return this.$store.state.newProject.deadline;
  //     },
  //     set(newDeadline) {
  //       // let toMs = new Date(newDeadline).getTime();
  //       this.$store.commit("updateDeadline", newDeadline);
  //     },
  //   },
  // },
};
</script>
<style scoped>
label {
  color: black;
}
</style>

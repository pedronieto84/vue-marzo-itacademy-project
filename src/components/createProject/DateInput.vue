<template>
  <div>
    <b-row>
      <b-col>
        <div class="datepicker">
          <label for="publishDate">Published:</label>
          <b-form-datepicker
            id="publishedDate"
            v-model="publishedDate"
          ></b-form-datepicker>
        </div>
      </b-col>
      <b-col>
        <div class="datepicker">
          <label for="deadline">Deadline:</label>

          <b-form-datepicker v-model="deadline"></b-form-datepicker>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "DateInput",
  computed: {
    publishedDate: {
      get() {
        return this.$store.state.newProject.published;
      },
      set(newDate) {
        let toMs = new Date(newDate).getTime();
        this.$store.commit("updateNewDate", toMs);
      },
    },
    deadline: {
      get() {
        return this.$store.state.newProject.deadline;
      },
      set(newDeadline) {
        let toMs = new Date(newDeadline).getTime();
        this.$store.commit("updateDeadline", toMs);
      },
    },
  },
};
</script>

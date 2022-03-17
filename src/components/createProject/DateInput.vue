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
  methods: {
    convertDeadlineToUnixDate(data) {
      return data && Math.floor(new Date(data).getTime() / 1000);
    },
    fromUnixDate(data) {
      return data && new Date(data * 1000);
    },
  },

  computed: {
    deadline: {
      get() {
        return this.fromUnixDate(this.$store.state.newProject.deadline);
      },
      set(newDeadline) {
        // let toMs = new Date(newDeadline).getTime();
        this.$store.commit(
          "updateDeadline",
          this.convertDeadlineToUnixDate(newDeadline)
        );
      },
    },
  },
};
</script>
<style scoped>
label {
  color: black;
}
</style>

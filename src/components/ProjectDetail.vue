<template>
  <div>
    <b-card :title="currentProject.title">
      <b-card-body>
        <div class="mb-4">
          {{ currentProject.shortExplanation }}
        </div>
        <b-row>
          <b-col>
            <label for="published-display">Published</label>
            <b-form-datepicker
              id="published-display"
              class="mb-2"
              readonly
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="deadline-display">Deadline</label>
            <b-form-datepicker
              id="deadline-display"
              class="mb-2"
              readonly
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="bid-display">Bid</label>
            <b-form-input id="bid" readonly :value="currentProject.bid">
            </b-form-input>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card title="Tech Set" class="mb-4">
        <b-card-body>
          <b-badge
            pill
            variant="info"
            v-for="techSet in currentProject.techSet"
            :key="techSet"
            class="mr-2 px-3 py-2"
          >
            {{ techSet }}
          </b-badge>
        </b-card-body>
      </b-card>
      <div>
        <h3>Files</h3>
        <div v-for="file in currentProject.files" :key="file.id">
          {{ file.filename }}
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "ProjectDetail",
  computed: {
    currentProject() {
      return this.$store.getters.getCurrentProject;
    },
  },
  mounted() {
    this.$store.dispatch("getProjectById", this.$route.query.id);
  },
};
</script>
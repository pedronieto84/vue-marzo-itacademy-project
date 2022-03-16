<template>
  <div>
    <b-card :title="currentProject.title" :sub-title="currentProject.published">
      <b-card-body>
        <div class="mb-4">
          {{ currentProject.shortExplanation }}
        </div>
        <b-row>
          <b-col>
            <label for="published-display">Published</label>
            <b-form-datepicker
              v-model="published"
              id="published-display"
              class="mb-2"
              readonly
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="deadline-display">Deadline</label>
            <b-form-datepicker
              v-model="deadline"
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
        <div v-for="file in currentProject.filesArray" :key="file.id">
          {{ file.filename }}
        </div>
      </div>
    </b-card>
    <b-button @click="$router.go(-1)">GoBack</b-button>
  </div>
</template>
<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      currentProject: Object,
      deadline: "",
      published: "",
    };
  },
  computed: {
    // getProject() {
    //   this.currentProject = this.$store.getters.getCurrentProject;
    //   alert(this.currentProject);
    //   this.deadline = this.secondsToDate(this.currentProject.deadline);
    // },
  },

  async mounted() {
    await this.$store.dispatch("getProjectById", this.$route.query.id);
    this.currentProject = this.$store.getters.getCurrentProject;
    this.deadline = this.secondsToDate(this.currentProject.deadline);
    this.published = this.secondsToDate(this.currentProject.publishedDate);
  },
  methods: {
    secondsToDate(seconds) {
      let d = new Date(seconds * 1000);
      let dateString = d.toISOString("en-US");
      return dateString.slice(0, 9);
    },
  },
};
</script>

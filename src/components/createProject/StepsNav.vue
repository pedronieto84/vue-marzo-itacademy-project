<template>
  <div class="tabs-container">
    <b-tabs content-class="mt-3">
      <b-tab title="1" active>
        <ProjectTitle />
        <b-progress
          class="mt-2 barra-progress"
          :value="25"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
      </b-tab>
      <b-tab title="2">
        <div>
          <DateInput />
          <!-- BID INPUT -->
          <b-form-input
            type="number"
            placeholder="Bid in Euro"
            v-model="bid"
            class="bid"
          ></b-form-input>
          <AddTechSet />
        </div>
        <b-progress
          class="mt-2 barra-progress"
          :value="50"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
      </b-tab>
      <b-tab title="3">
        <FileUploader />
        <b-progress
          class="mt-2 barra-progress"
          :value="75"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import ProjectTitle from "./ProjectTitle.vue";
import AddTechSet from "./AddTechSet.vue";
import DateInput from "./DateInput.vue";
import FileUploader from "./FileUploader.vue";

export default {
  name: "StepsNav",
  components: { ProjectTitle, AddTechSet, DateInput, FileUploader },
  data() {
    return {
      animate: true,
    };
  },
  computed: {
    bid: {
      get() {
        return this.$store.state.newProject.bid;
      },
      set(newBid) {
        this.$store.commit("updateBid", newBid);
      },
    },
  },
};
</script>
<style scoped>
.barra-progress {
  margin: 50px;
}
.bid {
  margin: 30px;
  width: 150px;
}
</style>

<template>
  <div class="mx-auto w-50">
    <b-tabs content-class="mt-3">
      <b-tab title="1" active>
        <b-progress
          class="mt-2 barra-progress"
          :value="25"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
        <ProjectTitle />
      </b-tab>
      <b-tab title="2">
        <b-progress
          class="mt-2 barra-progress"
          :value="50"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
        <DateInput />
        <Bid />
        <AddTechSet />
      </b-tab>
      <b-tab title="3">
        <b-progress
          class="mt-2 barra-progress"
          :value="75"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
        <FileUploader />
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import ProjectTitle from "./ProjectTitle.vue";
import AddTechSet from "./AddTechSet.vue";
import DateInput from "./DateInput.vue";
import FileUploader from "./FileUploader.vue";
import Bid from "./Bid.vue";

export default {
  name: "StepsNav",
  components: { ProjectTitle, AddTechSet, DateInput, FileUploader, Bid },
  data() {
    return {
      animate: true,
    };
  },
};
</script>



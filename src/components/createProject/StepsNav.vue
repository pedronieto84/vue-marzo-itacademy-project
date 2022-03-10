<template>
  <div class="tabs-container">
    <b-tabs content-class="mt-3">
      <b-tab title="1" active>
        <ProjectTitle />
      </b-tab>
      <b-tab title="2">
        <div>
          <DateInput />
          <AddTechSet />
        </div>
      </b-tab>
      <b-tab title="3"
        ><p><FileUploader /></p
      ></b-tab>
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
};
</script>
<style scoped>
</style>

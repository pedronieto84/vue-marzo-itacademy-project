<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="1" active
        ><p><ProjectTitle /></p
      ></b-tab>
      <b-tab title="2">
        <p>
          <DateInput />
          <AddTechSet /></p
      ></b-tab>
      <b-tab title="3"><p>File uploader</p></b-tab>
    </b-tabs>
  </div>
</template>
<script>
import ProjectTitle from "./ProjectTitle.vue";
import AddTechSet from "./AddTechSet.vue";
import DateInput from "./DateInput.vue";
export default {
  name: "StepsNav",
  components: { ProjectTitle, AddTechSet, DateInput },
};
</script>

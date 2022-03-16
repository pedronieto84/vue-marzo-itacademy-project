<template>
  <div class="mx-auto w-50">
    <b-tabs content-class="mt-3" v-model="tabIndex">
      <b-tab title="1">
        <b-progress
          class="my-2 barra-progress"
          :value="25"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
        <ProjectTitle
          :isTitleValid="isTitleValid"
          :isDescriptionValid="isDescriptionValid"
        />
      </b-tab>
      <b-tab title="2" :disabled="!isTitleValid || !isDescriptionValid">
        <b-progress
          class="mt-2 barra-progress"
          :value="50"
          variant="info"
          striped
          :animated="animate"
        ></b-progress>
        <DateInput
          :isDeadlineValid="isDeadlineValid"
          :ispublishedDateValid="ispublishedDateValid"
        />
        <Bid :bidValid="isBidValid" />
        <AddTechSet :techSetValid="isTechSetValid" />
      </b-tab>
      <b-tab
        title="3"
        :disabled="!isBidValid || !isTechSetValid || !isDeadlineValid"
      >
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
    <b-button-group class="mt-2">
      <b-button @click="tabIndex--" :disabled="tabIndex === 0"
        >Previous</b-button
      >
      <b-button @click="tabIndex++" :disabled="tabIndex === 2">Next</b-button>
    </b-button-group>
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
      tabIndex: 0,
    };
  },
  computed: {
    isTitleValid() {
      if(this.$store.state.newProject.title.length === 0) {
        return null;
      }
      return this.$store.state.newProject.title.length >= 3 ? true : false;
    },
    isDescriptionValid() {
      return this.$store.state.newProject.shortExplanation ? true : false;
    },
    isBidValid() {
      return this.$store.state.newProject.bid >= 1 ? true : false;
    },
    isTechSetValid() {
      return this.$store.state.newProject.techSet.length >= 1 ? true : false;
    },
    isDeadlineValid() {
      return this.$store.state.newProject.deadline ? true : false;
    },
    ispublishedDateValid() {
      return this.$store.state.newProject.publishedDate ? true : false;
    },
  },
};
</script>

<template>
  <b-card class="mx-auto w-50" title="Create project">
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
        <DateInput :isDeadlineValid="isDeadlineValid" />
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
      <b-button @click="tabIndex--" v-if="tabIndex > 0">Previous</b-button>
      <b-button
        @click="
          setDirty(tabIndex);
          tabIndex++;
        "
        v-if="tabIndex < 2"
        >Next</b-button
      >
    </b-button-group>
  </b-card>
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
      isTabDirty: [false, false],
    };
  },
  methods: {
    setDirty(tabIndex) {
      this.isTabDirty = this.isTabDirty.map((isDirty, i) =>
        i === tabIndex ? true : isDirty
      );
    },
  },
  computed: {
    isTitleValid() {
      if (
        this.$store.state.newProject.title.length === 0 &&
        !this.isTabDirty[0]
      ) {
        return null;
      }
      return this.$store.state.newProject.title.length >= 3 ? true : false;
    },
    isDescriptionValid() {
      if (
        this.$store.state.newProject.shortExplanation.length === 0 &&
        !this.isTabDirty[0]
      ) {
        return null;
      }
      return this.$store.state.newProject.shortExplanation ? true : false;
    },
    isBidValid() {
      if (
        this.$store.state.newProject.bid.length === 0 &&
        !this.isTabDirty[1]
      ) {
        return null;
      }
      return this.$store.state.newProject.bid >= 1 ? true : false;
    },
    isTechSetValid() {
      if (
        this.$store.state.newProject.techSet.length === 0 &&
        !this.isTabDirty[1]
      ) {
        return null;
      }
      return this.$store.state.newProject.techSet.length >= 1 ? true : false;
    },
    isDeadlineValid() {
      if (
        this.$store.state.newProject.deadline.length === 0 &&
        !this.isTabDirty[1]
      ) {
        return null;
      }
      return this.$store.state.newProject.deadline ? true : false;
    },
  },
};
</script>

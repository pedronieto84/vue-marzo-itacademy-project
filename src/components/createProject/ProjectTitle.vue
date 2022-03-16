<template>
  <div class="stepper1-container">
    <b-form-group type="text" label="Project Title" id="projectTitle">
      <b-form-input
        id="title"
        placeholder="Your Title"
        v-model="title"
        :state="isTitleValid"
        aria-describedby="title-feedback"
      ></b-form-input>
      <b-form-invalid-feedback id="title-feedback">
        The title must have at least 3 letters
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group>
      <b-form-textarea
        id="new-textarea"
        :state="isDescriptionValid"
        placeholder="Project Description, 500 char"
        class="description"
        v-model="description"
        aria-describedby="new-textarea-feedback"
      ></b-form-textarea>
      <b-form-invalid-feedback id="new-textarea-feedback">
        This field cannot be empty
      </b-form-invalid-feedback>
    </b-form-group>
  </div>
</template>
<script>
export default {
  name: "ProjectTitle",
  props: {
    isDescriptionValid: false,
    isTitleValid: Boolean,
  },
  computed: {
    title: {
      get() {
        return this.$store.state.newProject.title;
      },
      set(newTitle) {
        this.$store.commit("updateNewProjectTitle", newTitle);
      },
    },
    description: {
      get() {
        return this.$store.state.newProject.shortExplanation;
      },
      set(newDescription) {
        this.$store.commit("updateNewProjectDescription", newDescription);
      },
    },
  },
};
</script>
<style scoped>
.description {
  height: 300px;
}
</style>

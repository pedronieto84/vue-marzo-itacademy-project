<template>
  <div class="stepper1-container">
    <b-form-group type="text" label="Project Title" id="projectTitle">
      <b-form-input
        id="title"
        placeholder="Your Title"
        v-model="title"
        :state="titleState"
      ></b-form-input>
      <b-form-invalid-feedback id="title-feedback">
        The title must have at least 3 letters
      </b-form-invalid-feedback>
      <b-form-textarea
        id="new-textarea"
        :state="descriptionState"
        placeholder="Project Description, 500 char"
        class="description"
        v-model="description"
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
  computed: {
    title: {
      get() {
        return this.$store.state.newProject.title;
      },
      set(newTitle) {
        this.$store.commit("updateNewProjecTitle", newTitle);
      },
    },
    description: {
      get() {
        return this.$store.state.newProject.description;
      },
      set(newDescription) {
        this.$store.commit("updateNewProjecDescription", newDescription);
      },
    },
    titleState() {
      return this.title.length > 3 ? true : false;
    },
    descriptionState() {
      return this.description ? true : false;
    },
  },
};
</script>
<style scoped>
.stepper1-container {
  display: flex;
  flex-direction: column;
}

.description {
  height: 300px;
}
</style>

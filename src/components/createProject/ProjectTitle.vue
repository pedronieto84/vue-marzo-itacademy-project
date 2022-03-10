<template>
  <div class="create-container-step1">
    <b-form-group type="text" label="Project Title" id="projectTitle">
      <b-form-input placeholder="Your Title" v-model="title"></b-form-input>
      <b-form-input
        placeholder="Project Description, 500 char"
        class="description"
        v-model="description"
      ></b-form-input>
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
  },
};
</script>
<style scoped>
.create-container-step1 {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.description {
  height: 300px;
}
</style>

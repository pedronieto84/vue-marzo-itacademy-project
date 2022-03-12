<template>
  <div class="hola">
    <b-form-group
      type="text"
      label="Project Title"
      id="projectTitle"
      class="stepper1"
    >
      <b-form-input placeholder="Your Title" v-model="title"></b-form-input>
      <b-form-textarea
        placeholder="Project Description, 500 char"
        class="description"
        v-model="description"
      ></b-form-textarea>
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
.hola {
  display: flex;
  flex-direction: column;
}
.stepper1 {
  margin: 20px;
}
.description {
  height: 300px;
}
</style>

<template>
  <div class="techset-container">
    <div>
      <label for="tags-basic">Add Technology desired:</label>
      <b-form-tags input-id="tags-basic" v-model="frameworks"></b-form-tags>
    </div>
    {{ frameworks }}
  </div>
</template>
<script>
export default {
  name: "AddTechSet",
  computed: {
    frameworks: {
      get() {
        return this.$store.state.newProject.frameworks;
      },
      set(newFrameworks) {
        this.$store.commit("updateFrameworks", newFrameworks);
      },
    },
  },
};
</script>
<style scoped>
.techset-container {
  margin-top: 30px;
  padding: 20px;
}
</style>
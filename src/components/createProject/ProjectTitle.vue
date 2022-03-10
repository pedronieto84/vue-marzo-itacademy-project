<template>
  <div class="create-container-step1">
    <b-form-group type="text" label="Project Title" id="projectTitle">
      <b-form-input placeholder="Your Title"></b-form-input>
      <b-form-input
        placeholder="Project Description, 500 char"
        class="description"
      ></b-form-input>
    </b-form-group>
  </div>
</template>
<script>
export default {
  name: "ProjectTitle",
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

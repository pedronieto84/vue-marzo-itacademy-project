<template>
  <div class="techset-container">
    <div>
      <label for="tags-basic">Add Technology desired:</label>
      <b-form-tags input-id="tags-basic" v-model="languages"></b-form-tags>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTechSet",
  data() {
    return {
      languages: [""],
    };
  },
};
</script>
<style scoped>
.techset-container {
  margin-top: 30px;
  padding: 20px;
}
</style>